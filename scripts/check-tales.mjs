import { readFile } from 'node:fs/promises';
import { transpileModule, ModuleKind, ScriptTarget } from 'typescript';
import assert from 'node:assert/strict';

async function moduleUrl(file, dependencies = {}) {
  const source = await readFile(file, 'utf8');
  let js = transpileModule(source, { compilerOptions: { module: ModuleKind.ESNext, target: ScriptTarget.ES2022 } }).outputText;
  for (const [name, url] of Object.entries(dependencies)) js = js.replaceAll(`'${name}'`, `'${url}'`);
  return 'data:text/javascript;base64,' + Buffer.from(js).toString('base64');
}
const { archetypes } = await import(await moduleUrl('src/data/archetypes.ts'));
const resonance = await moduleUrl('src/data/resonance.ts');
const { makeTale, emojiSymbols } = await import(await moduleUrl('src/data/tales.ts', { './resonance': resonance }));
const combinations = [];
function collect(start, chosen) {
  if (chosen.length) combinations.push(chosen);
  if (chosen.length === 3) return;
  for (let i = start; i < archetypes.length; i++) collect(i + 1, [...chosen, archetypes[i]]);
}
collect(0, []);
assert.equal(combinations.length, 298);
assert.equal(new Set(Object.values(emojiSymbols)).size, 12);
for (const chosen of combinations) {
  const history = [];
  const stories = new Set();
  for (let seed = 0; seed < 8; seed++) {
    const tale = makeTale(chosen, history, seed);
    assert.deepEqual(makeTale(chosen, history, seed), tale, 'Tirage déterministe à historique et graine identiques');
    assert.deepEqual(tale.archetypes.map(item => item.id), chosen.map(item => item.id));
    assert.equal(tale.paragraphs.length, chosen.length + 2);
    assert(tale.title && tale.alternativeTitle && tale.title !== tale.alternativeTitle);
    assert(tale.sideStep && tale.invitation);
    assert(tale.questions.every(question => question.endsWith('?')));
    assert(!history.includes(tale.lensKey), 'Huit variantes avant répétition');
    // Chaque image apporte une rencontre distincte au conte : retirer une image retire sa scène.
    for (let i = 0; i < chosen.length; i++) {
      assert(tale.paragraphs[i + 1].length > 100);
      if (chosen.length > 1) {
        const reduced = makeTale(chosen.filter((_, index) => index !== i), [], seed);
        assert(!reduced.paragraphs.includes(tale.paragraphs[i + 1]));
      }
    }
    stories.add(tale.paragraphs.join('\n'));
    history.push(tale.lensKey);
  }
  assert.equal(stories.size, 8, 'Huit trames distinctes pour chaque combinaison');
}
assert.throws(() => makeTale([], [], 1), /1 à 3/);
assert.throws(() => makeTale(archetypes.slice(0, 4), [], 1), /1 à 3/);
assert.throws(() => makeTale([archetypes[0], archetypes[0]], [], 1), /différents/);
console.log('Contes : 298 combinaisons de 1 à 3 émojis, 8 variantes chacune, contribution de chaque image et bornes vérifiées.');
