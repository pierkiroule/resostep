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
const narrativeUrl = await moduleUrl('src/data/narratives.ts');
const lensUrl = await moduleUrl('src/data/clinicalLenses.ts');
const bridgeUrl = await moduleUrl('src/data/clinicalBridges.ts');
const { narratives } = await import(narrativeUrl);
const { clinicalLenses } = await import(lensUrl);
const { clinicalBridges, imageThemes } = await import(bridgeUrl);
const { makeTale, emojiSymbols } = await import(await moduleUrl('src/data/tales.ts', {
  './resonance': await moduleUrl('src/data/resonance.ts'), './narratives': narrativeUrl, './clinicalLenses': lensUrl,
  './clinicalBridges': bridgeUrl,
}));
const combinations = [];
function collect(chosen) {
  if (chosen.length) combinations.push(chosen);
  if (chosen.length === 3) return;
  for (const item of archetypes) if (!chosen.includes(item)) collect([...chosen, item]);
}
collect([]);
assert.equal(combinations.length, 1464, 'Toutes les sélections, y compris les ordres différents');
assert.equal(new Set(Object.values(emojiSymbols)).size, 12);
const titles = new Set();
for (const item of archetypes) {
  assert.equal(narratives[item.id].length, 2);
  const lens = clinicalLenses[item.id];
  assert.equal(new Set(lens.questions).size, 2);
  assert(lens.title && lens.opening && lens.returnToSituation);
  for (const story of narratives[item.id]) {
    for (const title of [story.title, story.otherTitle]) {
      assert(!titles.has(title), `Titre éditorial répété : ${title}`); titles.add(title);
    }
    assert(story.opening && story.tension);
    assert.equal(new Set(story.endings).size, 4);
  }
}
let minimum = Infinity, maximum = 0;
for (const chosen of combinations) {
  const history = [];
  const stories = new Set();
  let previousOpening = '';
  for (let seed = 0; seed < 8; seed++) {
    const tale = makeTale(chosen, history, seed);
    assert.deepEqual(makeTale(chosen, history, seed), tale, 'Tirage reproductible');
    assert.deepEqual(tale.archetypes.map(item => item.id), chosen.map(item => item.id));
    assert.equal(tale.paragraphs.length, chosen.length + 2);
    const primaryStories = narratives[chosen[0].id];
    const original = primaryStories.find(story => story.title === tale.title || story.otherTitle === tale.title);
    assert(original, 'Le titre appartient au récit affiché');
    assert.equal(tale.paragraphs[0], original.opening);
    assert.notEqual(tale.paragraphs[0], previousOpening, 'Le tirage alterne les scènes, pas seulement leurs fins');
    previousOpening = tale.paragraphs[0];
    assert.equal(tale.paragraphs[1], original.tension);
    assert(original.endings.some(ending => tale.paragraphs.at(-1).endsWith(ending)), 'La fin revient au même récit');
    assert(tale.title !== tale.alternativeTitle && tale.storyInvitation);
    const coreIndex = primaryStories.indexOf(original);
    assert.deepEqual(tale.clinicalBridge, clinicalBridges[chosen[0].id][coreIndex], 'Le lien clinique explique la scène réellement affichée');
    assert(['image', 'practice', 'example'].every(field => typeof tale.clinicalBridge[field] === 'string' && tale.clinicalBridge[field].trim().length > 0));
    assert.deepEqual(tale.otherImages, chosen.slice(1).map(item => ({ id: item.id, theme: imageThemes[item.id] })), 'Les pistes supplémentaires correspondent aux images choisies');
    const focus = tale.clinicalBridge.focus ?? clinicalLenses[chosen[0].id];
    assert.equal(tale.invitation, focus.returnToSituation);
    assert.equal(tale.sideStepTitle, focus.title);
    assert.deepEqual(tale.questions, focus.questions, 'Les questions restent liées à la variante affichée, même avec plusieurs émojis');
    assert.equal(tale.questions.length, 2);
    assert.equal(new Set(tale.questions).size, 2);
    assert(tale.questions.every(question => question.endsWith('?')));
    assert(tale.questions.every(question => question.trim().split(/\s+/).length <= 14), 'Les questions restent courtes');
    for (let i = 1; i < chosen.length; i++) {
      assert(clinicalLenses[chosen[i].id].echoes.some(echo => tale.paragraphs[i + 1].includes(echo)), 'Chaque image supplémentaire intervient dans la scène');
    }
    const count = tale.paragraphs.join(' ').trim().split(/\s+/).length;
    minimum = Math.min(minimum, count); maximum = Math.max(maximum, count);
    assert(count >= 90 && count <= 350, `Récit de ${count} mots : ${tale.title}`);
    assert(!history.includes(tale.lensKey), 'Huit variantes avant répétition');
    stories.add(tale.paragraphs.join('\n'));
    history.push(tale.lensKey);
  }
  assert.equal(stories.size, 8);
  const next = makeTale(chosen, history, 123);
  assert(!history.slice(-3).includes(next.lensKey), 'Le nouveau cycle évite les trois dernières lectures');
  const foreign = makeTale(chosen.length > 1 ? [chosen[0]] : [archetypes.find(item => item !== chosen[0])], [], 91);
  assert.deepEqual(makeTale(chosen, [foreign.lensKey], 17), makeTale(chosen, [], 17), 'Une autre sélection ne consomme pas le cycle courant');
}
assert.throws(() => makeTale([], [], 1), /1 à 3/);
assert.throws(() => makeTale(archetypes.slice(0, 4), [], 1), /1 à 3/);
assert.throws(() => makeTale([archetypes[0], archetypes[0]], [], 1), /différents/);
assert.throws(() => makeTale([{ id: 'constructor' }], [], 1), /différents/);
assert.throws(() => makeTale([null], [], 1), /différents/);
assert.throws(() => makeTale(null, [], 1), /différents/);
assert.throws(() => makeTale([archetypes[0]], [], NaN), /fini/);
console.log(`Contes : 24 noyaux narratifs, 48 titres, 96 fins liées et 24 liens entre conte et clinique. ${minimum}–${maximum} mots.`);
console.log('1 464 sélections ordonnées : huit variantes sans répétition, cycles indépendants, images, questions et titres liés aux récits vérifiés.');
