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
const titles = new Set();
for (const archetype of archetypes) {
  assert.equal(perspectives[archetype.id].length, 8);
  for (const lens of perspectives[archetype.id]) {
    assert(!titles.has(lens.title), `Titre répété : ${lens.title}`); titles.add(lens.title);
    assert(lens.opening.startsWith('Et si cette situation ressemblait à '), lens.title);
    assert(lens.opening && lens.unfolding && lens.invitation);
    assert.equal(new Set(lens.questions).size, 2);
    for (const question of lens.questions) {
      assert(question.endsWith('?'));
      const words=[lens.title,lens.opening,lens.unfolding,question,lens.invitation].join(' ').trim().split(/\s+/).length;
      minimum=Math.min(minimum,words);maximum=Math.max(maximum,words);
      assert(words>=95&&words<=180,`${lens.title} : ${words} mots`);
    }
  }
  const recent=[];
  for(let seed=0;seed<8;seed++) {
    const draw=makeInspiration(archetype,recent,seed);
    assert(!recent.includes(draw.lensKey)); recent.push(draw.lensKey);
    assert.equal(draw.archetype.id,archetype.id);
    assert.equal(draw.paragraphs.length,2);
    assert(draw.title&&draw.question&&draw.invitation);
    const lens=perspectives[archetype.id].find(item=>item.title===draw.title);
    assert.deepEqual(draw.paragraphs,[lens.opening,lens.unfolding]);
    assert.equal(draw.invitation,lens.invitation,'La fin appartient au même récit.');
    assert(lens.questions.includes(draw.question),'La question appartient au même récit.');
    assert.deepEqual(makeInspiration(archetype,recent.slice(0,-1),seed),draw);
    const words=[draw.title,...draw.paragraphs,draw.question,draw.invitation].join(' ').trim().split(/\s+/).length;
    minimum=Math.min(minimum,words);maximum=Math.max(maximum,words);
    assert(words>=65&&words<=180,`${draw.lensKey} : ${words} mots`);
  }
  const next=makeInspiration(archetype,recent,100);
  assert(!recent.slice(-3).includes(next.lensKey));
  for (let cycle=0;cycle<5;cycle++) {
    const seen=new Set();
    for (let i=0;i<8;i++) {
      const draw=makeInspiration(archetype,recent,200+cycle*8+i);
      assert(!seen.has(draw.lensKey),'Aucun récit répété avant la fin du cycle.');
      if(i===0) assert(!recent.slice(-3).includes(draw.lensKey),'Le nouveau cycle évite les dernières lectures.');
      seen.add(draw.lensKey); recent.push(draw.lensKey);
    }
  }
}
assert.throws(()=>makeInspiration([archetypes[0]],[],1),/symbole/);
console.log(`Résonance : 96 métaphores filées, ${minimum}–${maximum} mots, 192 questions liées à leur récit.`);
console.log('Six cycles de huit récits sans répétition vérifiés pour chacun des douze symboles.');
