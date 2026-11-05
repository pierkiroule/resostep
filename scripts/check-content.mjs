import { readFile } from 'node:fs/promises';
import { transpileModule, ModuleKind } from 'typescript';
import assert from 'node:assert/strict';

const source = await readFile('src/data/archetypes.ts', 'utf8');
const js = transpileModule(source, { compilerOptions: { module: ModuleKind.ESNext } }).outputText;
const { archetypes, spokenText } = await import('data:text/javascript;base64,' + Buffer.from(js).toString('base64'));
const order = ['noeud', 'barque', 'roseau', 'mycelium', 'graine', 'cage', 'phare', 'riviere', 'cercles', 'fissure', 'plume', 'pierres'];
assert.deepEqual(archetypes.map(a => a.id), order);
for (const [index, a] of archetypes.entries()) {
  const words = spokenText(a).join(' ').trim().split(/\s+/).length;
  assert.equal(a.number, index + 1);
  assert.equal(a.questions.length, 3);
  assert(words >= 180 && words <= 250, a.name + ' : ' + words + ' mots, attendu : 180–250');
  console.log(String(a.number).padStart(2, '0') + ' ' + a.name + ' : ' + words + ' mots');
}
console.log('Les 12 textes et leurs trois questions sont présents et respectent la longueur demandée.');
