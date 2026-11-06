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
const tagsUrl = await moduleUrl('src/data/explorationTags.ts');
const { emojiExplorations, explorationTags } = await import(tagsUrl);
const { makeMetaphor, emojiSymbols, metaphorTexts } = await import(await moduleUrl('src/data/metaphors.ts', {
  './resonance': await moduleUrl('src/data/resonance.ts'), './clinicalLenses': lensUrl, './clinicalLinks': linkUrl, './explorationTags': tagsUrl,
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
let taggedCases = 0;
for (const archetype of archetypes) {
  assert.equal(new Set(emojiExplorations[archetype.id].map(option => option.tag)).size, 3);
  for (const option of emojiExplorations[archetype.id]) {
    const history = [];
    const seen = new Set();
    for (let seed = 0; seed < 4; seed++) {
      const result = makeMetaphor(archetype, history, seed, option.tag);
      assert.equal(result.exploration, option.tag);
      assert(result.metaphor.endsWith(option.extension));
      const validTexts = metaphorTexts[archetype.id].filter((_, index) => index % 2 === option.angle);
      assert(validTexts.some(text => result.metaphor === text + ' ' + option.extension));
      assert.equal(result.clinicalLink, clinicalLinks[archetype.id][option.angle].practice + ' ' + explorationTags[option.tag].practice);
      assert.deepEqual(result.questions, [explorationTags[option.tag].question, option.question]);
      assert.equal(new Set(result.questions).size, 2);
      assert(result.questions.every(q => q.endsWith('?') && q.trim().split(/\s+/).length <= 14));
      if (seed < 2) { assert(!seen.has(result.lensKey)); seen.add(result.lensKey); }
      if (history.length) assert.notEqual(result.lensKey, history.at(-1));
      const open = makeMetaphor(archetype, [], seed);
      assert.deepEqual(makeMetaphor(archetype, [...history, open.lensKey], seed, option.tag), result, 'Cycles des tags et du choix ouvert indépendants');
      history.push(result.lensKey);
    }
    assert.equal(seen.size, 2);
    taggedCases++;
  }
}
assert.equal(taggedCases, 36);
assert.throws(() => makeMetaphor(archetypes[0], [], 1, 'inconnu'), /angle proposé/);
assert.throws(() => makeMetaphor(archetypes[0], [], 1, 'relais'), /angle proposé/);
assert.throws(() => makeMetaphor(archetypes.slice(0,3), [], 1), /un seul émoji/);
assert.throws(() => makeMetaphor(null, [], 1), /un seul émoji/);
assert.throws(() => makeMetaphor({id:'constructor'}, [], 1), /un seul émoji/);
assert.throws(() => makeMetaphor(archetypes[0], [], NaN), /fini/);
console.log(`Métaphores : ${seenTexts.size} textes courts, 12 émojis, liens cliniques et 2 questions courtes par angle. 36 associations émoji–tag, choix ouvert, cycles indépendants et absence de conte vérifiés.`);
