import { readdir, readFile, writeFile } from 'node:fs/promises';
import { createHash } from 'node:crypto';
import { join } from 'node:path';

// Toutes les ressources locales livrées sont incluses, y compris les futurs médias.
async function walk(directory, prefix = '') {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const relative = prefix + entry.name;
    if (entry.isDirectory()) files.push(...await walk(join(directory, entry.name), relative + '/'));
    else if (!relative.endsWith('.map') && relative !== 'sw.js') files.push(relative);
  }
  return files.sort();
}

const files = await walk('dist');
const hash = createHash('sha256');
for (const file of files) { hash.update(file); hash.update(await readFile(join('dist', file))); }
const version = hash.digest('hex').slice(0, 12);
const sw = `/* Généré au build. Ne pas modifier : scripts/build-sw.mjs. */
const CACHE = 'pas-de-cote-${version}';
const ROOT = self.registration.scope;
const ASSETS = ${JSON.stringify(files)}.map(path => new URL(path, ROOT).href);
self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE).then(cache => cache.addAll(ASSETS.map(url => new Request(url, { cache: 'reload' })))).then(() => self.skipWaiting()));
});
self.addEventListener('activate', event => {
  event.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(key => key.startsWith('pas-de-cote-') && key !== CACHE).map(key => caches.delete(key)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', event => {
  const request = event.request;
  if (request.method !== 'GET' || new URL(request.url).origin !== new URL(ROOT).origin) return;
  if (request.mode === 'navigate') {
    event.respondWith(fetch(request).then(response => response.ok ? response : caches.match(new URL('index.html', ROOT))).catch(() => caches.match(new URL('index.html', ROOT))).then(response => response || Response.error()));
    return;
  }
  event.respondWith(caches.open(CACHE).then(cache => cache.match(request).then(cached => cached || fetch(request))));
});
`;
await writeFile('dist/sw.js', sw);
console.log('PWA : ' + files.length + ' ressources précachées, version ' + version);
