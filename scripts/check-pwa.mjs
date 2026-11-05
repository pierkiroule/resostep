import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import vm from 'node:vm';

// Test du cycle réel du SW généré dans un stockage en mémoire.
// Il ne remplace pas l’essai en mode avion sur un appareil.
const root = 'https://example.test/intervision/';
let online = true;
const handlers = {};
const stores = new Map();
const urlOf = request => typeof request === 'string' ? request : request instanceof URL ? request.href : request.url;
const fetchResource = async request => {
  if (!online) throw new TypeError('Offline');
  const path = new URL(urlOf(request)).pathname.replace('/intervision/', '') || 'index.html';
  try { return new Response(await readFile(join('dist', path))); }
  catch { return new Response('Not found', { status: 404 }); }
};
const caches = {
  async open(name) {
    if (!stores.has(name)) stores.set(name, new Map());
    const store = stores.get(name);
    return {
      async addAll(requests) {
        const responses = await Promise.all(requests.map(fetchResource));
        if (responses.some(response => !response.ok)) throw new Error('Precache failed');
        requests.forEach((request, index) => store.set(urlOf(request), responses[index]));
      },
      async match(request) { return store.get(urlOf(request))?.clone(); },
    };
  },
  async keys() { return [...stores.keys()]; },
  async delete(name) { return stores.delete(name); },
  async match(request) {
    for (const store of stores.values()) {
      const response = store.get(urlOf(request));
      if (response) return response.clone();
    }
  },
};
let claimed = false;
const context = vm.createContext({
  URL, Request, Response, Promise, caches, fetch: fetchResource,
  self: {
    registration: { scope: root },
    addEventListener(name, handler) { handlers[name] = handler; },
    skipWaiting: async () => undefined,
    clients: { claim: async () => { claimed = true; } },
  },
});
vm.runInContext(await readFile('dist/sw.js', 'utf8'), context);
async function lifecycle(name) {
  let done;
  handlers[name]({ waitUntil(promise) { done = promise; } });
  await done;
}
function request(url, mode = 'cors', method = 'GET') {
  let response;
  handlers.fetch({ request: { url, mode, method }, respondWith(promise) { response = promise; } });
  return response;
}

await caches.open('pas-de-cote-old-version');
await caches.open('autre-application');
await lifecycle('install');
await lifecycle('activate');
assert(claimed);
assert(!stores.has('pas-de-cote-old-version'));
assert(stores.has('autre-application'));
online = false;
const navigation = await request(root, 'navigate');
assert(navigation.ok);
assert.match(await navigation.text(), /Le pas de côté résonant/);
const current = [...stores.entries()].find(([name]) => name.startsWith('pas-de-cote-'));
const assets = [...current[1].keys()];
assert(assets.some(path => path.endsWith('.js')));
assert(assets.some(path => path.endsWith('.css')));
assert(assets.some(path => path.endsWith('manifest.webmanifest')));
for (const asset of assets) {
  const response = await request(asset);
  assert(response.ok, 'Ressource inaccessible hors ligne : ' + asset);
  assert((await response.arrayBuffer()).byteLength > 0);
}
assert.equal(request('https://other.example/audio.mp3'), undefined);
assert.equal(request(root, 'cors', 'POST'), undefined);
const manifest = JSON.parse(await readFile('dist/manifest.webmanifest', 'utf8'));
for (const icon of manifest.icons) await readFile(join('dist', icon.src));
console.log('PWA : installation, navigation et ' + assets.length + ' ressources hors ligne vérifiées en simulation.');
console.log('Le nettoyage conserve les caches des autres applications. Les icônes installables sont présentes.');
