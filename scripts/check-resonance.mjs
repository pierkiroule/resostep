import { readFile } from 'node:fs/promises';
import { transpileModule, ModuleKind, ScriptTarget } from 'typescript';
import assert from 'node:assert/strict';
async function tsData(file) {
  const source = await readFile(file, 'utf8');
  const js = transpileModule(source, { compilerOptions: { module: ModuleKind.ESNext, target: ScriptTarget.ES2022 } }).outputText;
  return import('data:text/javascript;base64,' + Buffer.from(js).toString('base64'));
}
const { archetypes } = await tsData('src/data/archetypes.ts');
const { perspectives, makeInspiration } = await tsData('src/data/resonance.ts');
assert.equal(Object.values(perspectives).flat().length, 96);
let minimum=Infinity, maximum=0;
for (const archetype of archetypes) {
  assert.equal(perspectives[archetype.id].length, 8);
  const recent=[];
  for(let seed=0;seed<8;seed++) {
    const draw=makeInspiration(archetype,recent,seed);
    assert(!recent.includes(draw.lensKey)); recent.push(draw.lensKey);
    assert.equal(draw.archetype.id,archetype.id);
    assert.equal(draw.paragraphs.length,2);
    assert(draw.title&&draw.question&&draw.invitation);
    assert.deepEqual(makeInspiration(archetype,recent.slice(0,-1),seed),draw);
    const words=[draw.title,...draw.paragraphs,draw.question,draw.invitation].join(' ').trim().split(/\s+/).length;
    minimum=Math.min(minimum,words);maximum=Math.max(maximum,words);
    assert(words>=65&&words<=180,`${draw.lensKey} : ${words} mots`);
  }
  const next=makeInspiration(archetype,recent,100);
  assert(!recent.slice(-3).includes(next.lensKey));
}
assert.throws(()=>makeInspiration([archetypes[0]],[],1),/symbole/);
console.log(`Résonance : 96 textes sensibles et cliniques, ${minimum}–${maximum} mots, un seul archétype par tirage.`);
console.log('Les 12 premiers cycles de huit angles sont sans répétition ; les derniers angles sont ensuite évités.');
