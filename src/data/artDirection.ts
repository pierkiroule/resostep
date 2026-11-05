import type { ArchetypeId } from './archetypes';

/** Pigment principal, nuance et lumière. Le texte et les commandes restent en noir et blanc. */
export const artDirection: Record<ArchetypeId, [string, string, string]> = {
  noeud: ['#657f8c', '#b88670', '#d9c8ab'],
  barque: ['#6c929f', '#a0b8b8', '#dcc7aa'],
  roseau: ['#889b7b', '#b0a17c', '#d9d5bd'],
  mycelium: ['#879988', '#ae8b77', '#d7c5a4'],
  graine: ['#ac8768', '#b5ac8d', '#ead4a0'],
  cage: ['#8b9ca1', '#b39b8b', '#e0cda7'],
  phare: ['#7c929b', '#a5b6b7', '#e6d3a4'],
  riviere: ['#658d9d', '#9bb7b0', '#c6b59c'],
  cercles: ['#7895a0', '#b98d78', '#d7c6a6'],
  fissure: ['#b18d76', '#a9a99d', '#e6c98b'],
  plume: ['#92aeb5', '#b8b5a2', '#d8c5bd'],
  pierres: ['#82949a', '#a9aa9b', '#b9957e'],
};
