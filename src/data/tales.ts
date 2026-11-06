import type { Archetype, ArchetypeId } from './archetypes';
import { seededRandom } from './resonance';
import { narratives } from './narratives';
import { clinicalLenses } from './clinicalLenses';
import { clinicalBridges } from './clinicalBridges';
import type { ClinicalBridge } from './clinicalBridges';

export const emojiSymbols: Record<ArchetypeId, string> = {
  noeud: '🪢', barque: '⛵', roseau: '🌾', mycelium: '🍄', graine: '🌱', cage: '🕊️',
  phare: '🔦', riviere: '🌊', cercles: '🫧', fissure: '⚡', plume: '🪶', pierres: '🪨',
};

export interface TaleInspiration {
  id: string;
  lensKey: string;
  archetype: Archetype;
  title: string;
  alternativeTitle: string;
  paragraphs: string[];
  sideStepTitle: string;
  clinicalBridge: ClinicalBridge;
  questions: [string, string];
  invitation: string;
  storyInvitation: string;
}

const invitations = [
  'Racontez la scène du point de vue d’une personne restée silencieuse.',
  'Arrêtez le conte avant le dernier geste. Quelle autre suite imaginez-vous ?',
  'Faites parler un détail du paysage. Que remarque-t-il ?',
  'Reprenez le conte le lendemain. Qu’est-ce qui a changé ?',
];

/** Un seul émoji : une scène, sa tension et une fin écrite pour ce même récit. */
export function makeTale(archetype: Archetype, recent: string[], seed: number): TaleInspiration {
  if (!archetype || Array.isArray(archetype) || !Object.hasOwn(narratives, archetype.id)) {
    throw new Error('Choisissez un seul émoji.');
  }
  if (!Number.isFinite(seed)) throw new Error('La graine du tirage doit être un nombre fini.');
  const random = seededRandom(seed);
  // Chaque émoji a son propre cycle, conservé lorsqu’on change d’image.
  const prefix = `conte:${archetype.id}:`;
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
  const primary = archetype.id;
  const story = narratives[primary][coreIndex];
  const lens = clinicalLenses[primary];
  const bridge = clinicalBridges[primary][coreIndex];
  const focus = bridge.focus ?? lens;
  return {
    id: `${seed}-${lensKey}`, lensKey, archetype,
    title: endingIndex % 2 ? story.otherTitle : story.title,
    alternativeTitle: endingIndex % 2 ? story.title : story.otherTitle,
    paragraphs: [story.opening, story.tension, story.endings[endingIndex]],
    sideStepTitle: focus.title,
    clinicalBridge: bridge,
    questions: [...focus.questions],
    invitation: focus.returnToSituation,
    storyInvitation: invitations[endingIndex],
  };
}
