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
const lensUrl = await moduleUrl('src/data/clinicalLenses.ts');
const linkUrl = await moduleUrl('src/data/clinicalLinks.ts');
const { clinicalLenses } = await import(lensUrl);
const { clinicalLinks } = await import(linkUrl);
const { makeMetaphor, emojiSymbols, metaphorTexts } = await import(await moduleUrl('src/data/metaphors.ts', {
  './resonance': await moduleUrl('src/data/resonance.ts'), './clinicalLenses': lensUrl, './clinicalLinks': linkUrl,
}));
assert.equal(new Set(Object.values(emojiSymbols)).size, 12);
const seenTexts = new Set();
for (const archetype of archetypes) {
  const history = [];
  const variations = metaphorTexts[archetype.id];
  const seen = new Set();
  for (let seed = 0; seed < variations.length * 3; seed++) {
    const result = makeMetaphor(archetype, history, seed);
    assert.deepEqual(makeMetaphor(archetype, history, seed), result);
    assert.equal(result.archetype.id, archetype.id);
    const index = variations.indexOf(result.metaphor);
    assert(index >= 0);
    const link = clinicalLinks[archetype.id][index % 2];
    const focus = link.focus ?? clinicalLenses[archetype.id];
    assert.equal(result.title, focus.title);
    assert.equal(result.clinicalLink, link.practice);
    assert.deepEqual(result.questions, focus.questions);
    assert.equal(new Set(result.questions).size, 2);
    assert(result.questions.every(q => q.endsWith('?') && q.trim().split(/\s+/).length <= 14));
    assert(result.metaphor.startsWith('Et si cette situation ressemblait à '));
    assert(!/gardienne|il était une fois|pas conté/i.test(result.metaphor));
    const words = result.metaphor.trim().split(/\s+/).length;
    assert(words >= 30 && words <= 90, `${archetype.id} : ${words} mots`);
    assert(!('paragraphs' in result || 'storyInvitation' in result || 'alternativeTitle' in result));
    if(seed < variations.length) { assert(!seen.has(result.lensKey)); seen.add(result.lensKey); }
    if(history.length) assert.notEqual(result.lensKey, history.at(-1));
    const other = archetypes.find(item => item.id !== archetype.id);
    const foreign = makeMetaphor(other, [], seed);
    assert.deepEqual(makeMetaphor(archetype, [...history, foreign.lensKey], seed), result);
    history.push(result.lensKey);
  }
  assert.equal(seen.size, variations.length);
  for(const text of variations) { assert(!seenTexts.has(text)); seenTexts.add(text); }
}
assert.throws(() => makeMetaphor(archetypes.slice(0,3), [], 1), /un seul émoji/);
assert.throws(() => makeMetaphor(null, [], 1), /un seul émoji/);
assert.throws(() => makeMetaphor({id:'constructor'}, [], 1), /un seul émoji/);
assert.throws(() => makeMetaphor(archetypes[0], [], NaN), /fini/);
console.log(`Métaphores : ${seenTexts.size} textes courts, 12 émojis, liens cliniques et 2 questions courtes par angle. Cycles indépendants et absence de conte vérifiés.`);
