import { readFile } from 'node:fs/promises';
import { transpileModule, ModuleKind, ScriptTarget } from 'typescript';
import assert from 'node:assert/strict';
async function tsData(file) {
  const source = await readFile(file, 'utf8');
  const js = transpileModule(source, { compilerOptions: { module: ModuleKind.ESNext, target: ScriptTarget.ES2022 } }).outputText;
  return import('data:text/javascript;base64,' + Buffer.from(js).toString('base64'));
}
const { archetypes } = await tsData('src/data/archetypes.ts');
const { perspectives, crossings, crossingKey, makeInspiration } = await tsData('src/data/resonance.ts');
assert.equal(Object.values(perspectives).flat().length, 96);
assert.equal(Object.keys(crossings).length, 66);
const recent = [];
for (let seed = 0; seed < 8; seed++) {
  const draw = makeInspiration([archetypes[0]], recent, seed);
  assert(!recent.includes(draw.lensKey), 'Un angle se répète avant la fin du premier cycle.');
  recent.push(draw.lensKey);
}
const ninth = makeInspiration([archetypes[0]], recent, 9);
assert(!recent.slice(-3).includes(ninth.lensKey));
const selections = [];
for (let i = 0; i < 12; i++) {
  selections.push([archetypes[i]]);
  for (let j = i + 1; j < 12; j++) {
    assert(crossings[crossingKey(archetypes[i].id, archetypes[j].id)]);
    selections.push([archetypes[i], archetypes[j]]);
    for (let k = j + 1; k < 12; k++) selections.push([archetypes[i], archetypes[j], archetypes[k]]);
  }
}
for (const [i, symbols] of selections.entries()) {
  const draw = makeInspiration(symbols, [], 1000 + i);
  assert.equal(draw.paragraphs.length, symbols.length);
  assert(draw.title && draw.question && draw.invitation);
  assert(draw.paragraphs.every(paragraph => paragraph.length > 70));
  assert.deepEqual(makeInspiration(symbols, [], 1000 + i), draw);
}
console.log('Résonance : 96 perspectives, 66 rencontres et ' + selections.length + ' sélections de 1 à 3 symboles vérifiées.');
console.log('Renouvellement sans répétition au premier cycle, évitement des angles récents et tirages reproductibles : OK.');
