import type { Archetype, ArchetypeId } from './archetypes';
import { seededRandom } from './resonance';
import { narratives } from './narratives';
import { clinicalLenses } from './clinicalLenses';

export const emojiSymbols: Record<ArchetypeId, string> = {
  noeud: '🪢', barque: '⛵', roseau: '🌾', mycelium: '🍄', graine: '🌱', cage: '🕊️',
  phare: '🔦', riviere: '🌊', cercles: '🫧', fissure: '⚡', plume: '🪶', pierres: '🪨',
};

export interface TaleInspiration {
  id: string;
  lensKey: string;
  archetypes: Archetype[];
  title: string;
  alternativeTitle: string;
  paragraphs: string[];
  sideStepTitle: string;
  sideStep: string;
  questions: [string, string];
  invitation: string;
  storyInvitation: string;
}

const invitations = [
  'Racontez quelques lignes depuis la place de quelqu’un qui n’a pas encore parlé. Que remarque-t-il, sans résoudre l’histoire ?',
  'Arrêtez le conte juste avant le dernier geste. Quelle autre suite devient imaginable depuis une autre place ?',
  'Donnez une voix à un détail resté dans le paysage. Que sait-il de l’histoire que la gardienne ignore encore ?',
  'Reprenez le conte au lendemain de cette scène. Qu’est-ce qui a changé, et qu’est-ce qui continue de demander de l’attention ?',
];

/** Une scène, une tension, des rencontres qui la déplacent et un retour à la même scène. */
export function makeTale(selected: Archetype[], recent: string[], seed: number): TaleInspiration {
  if (!Array.isArray(selected) || selected.length < 1 || selected.length > 3 ||
    selected.some(item => !item || !Object.hasOwn(narratives, item.id)) ||
    new Set(selected.map(item => item.id)).size !== selected.length) {
    throw new Error('Choisissez de 1 à 3 émojis différents.');
  }
  if (!Number.isFinite(seed)) throw new Error('La graine du tirage doit être un nombre fini.');
  const random = seededRandom(seed);
  // Chaque combinaison ordonnée a son propre cycle : changer une image ne consomme pas celui d’une autre.
  const prefix = `conte:${selected.map(item => item.id).join('+')}:`;
  const candidates = Array.from({ length: 8 }, (_, variant) => `${prefix}${variant}`);
  const keys = new Set(candidates);
  const history = recent.filter(key => keys.has(key));
  const cycleLength = history.length % candidates.length;
  const used = new Set(cycleLength ? history.slice(-cycleLength) : []);
  const unseen = candidates.filter(key => !used.has(key));
  const fresh = unseen.filter(key => !history.slice(-3).includes(key));
  const pool = fresh.length ? fresh : unseen;
  const lastVariant = history.length ? Number(history.at(-1)!.slice(prefix.length)) : -1;
  const alternating = lastVariant < 0 ? [] : pool.filter(key =>
    Math.floor(Number(key.slice(prefix.length)) / 4) !== Math.floor(lastVariant / 4));
  const available = alternating.length ? alternating : pool;
  const lensKey = available[Math.floor(random() * available.length)];
  const variant = Number(lensKey.slice(prefix.length));
  const coreIndex = variant < 4 ? 0 : 1;
  const endingIndex = variant % 4;
  const primary = selected[0].id;
  const story = narratives[primary][coreIndex];
  const lens = clinicalLenses[primary];
  const encounters = selected.slice(1).map((item, index) => {
    const echo = clinicalLenses[item.id].echoes[(variant + index) % 2];
    // Les échos sont des souvenirs : la gardienne reste dans sa scène, même si elle est en barque ou dans le phare.
    return `${index === 0 ? 'Avant de reprendre son geste, une scène lui revient en mémoire. ' : 'Un autre souvenir se mêle au premier. '}${echo}`;
  });
  const ending = `${encounters.length ? lens.returns[coreIndex] + ' ' : ''}${story.endings[endingIndex]}`;
  // Deux questions distinctes : les éprouvés de l’équipe et une perspective relationnelle.
  const relationalLens = selected.length > 1
    ? clinicalLenses[selected[1 + Math.floor(random() * (selected.length - 1))].id]
    : lens;
  return {
    id: `${seed}-${lensKey}`, lensKey, archetypes: [...selected],
    title: endingIndex % 2 ? story.otherTitle : story.title,
    alternativeTitle: endingIndex % 2 ? story.title : story.otherTitle,
    paragraphs: [story.opening, story.tension, ...encounters, ending],
    sideStepTitle: lens.title,
    sideStep: lens.opening,
    questions: [lens.questions[0], relationalLens.questions[1]],
    invitation: lens.returnToSituation,
    storyInvitation: invitations[endingIndex],
  };
}
