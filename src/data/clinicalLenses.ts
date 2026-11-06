import type { ArchetypeId } from './archetypes';

export interface ClinicalLens {
  title: string;
  questions: [string, string];
}

/** Questions d’intervision adressées aux professionnels, jamais des conclusions sur l’enfant. */
export const clinicalLenses: Record<ArchetypeId, ClinicalLens> = {
  noeud: {
    title: 'Ce que nos efforts resserrent ou soutiennent',
    questions: ['Qu’est-ce qui nous pousse à insister dans cette situation ?', 'Comment nos interventions modifient-elles les échanges avec le jeune et ses proches ?'],
  },
  barque: {
    title: 'Les caps que nous croyons partager',
    questions: ['Qu’est-ce qui nous donne le sentiment de tourner en rond ?', 'Qu’est-ce qu’« avancer » voudrait dire pour le jeune et ses proches ?'],
  },
  roseau: {
    title: 'Ce que le contexte fait éprouver à chacun',
    questions: ['Dans quels moments nous sentons-nous tendus face à cette situation ?', 'Qu’est-ce qui change pour le jeune entre la maison, l’école et les soins ?'],
  },
  mycelium: {
    title: 'Les liens discrets et les continuités fragiles',
    questions: ['Que ressentons-nous quand le soutien se construit en dehors de notre équipe ?', 'Qui compte pour ce jeune sans apparaître dans nos échanges ?'],
  },
  graine: {
    title: 'Le temps du soin et le besoin de voir',
    questions: ['Comment vivons-nous le temps où rien ne semble changer ?', 'Quel petit changement avons-nous peut-être laissé de côté ?'],
  },
  cage: {
    title: 'Les appuis d’une possibilité réellement accessible',
    questions: ['Que ressentons-nous quand notre proposition n’est pas saisie ?', 'Comment le jeune vit-il le premier pas que nous lui proposons ?'],
  },
  phare: {
    title: 'Ce que notre attention éclaire et laisse dans l’ombre',
    questions: ['Quelle inquiétude prend le plus de place dans notre équipe ?', 'Quel moment de vie du jeune connaissons-nous encore peu ?'],
  },
  riviere: {
    title: 'Les enchaînements plutôt qu’une cause isolée',
    questions: ['Quand avons-nous l’impression de rejouer la même scène ?', 'Que se passe-t-il juste avant le moment difficile ?'],
  },
  cercles: {
    title: 'Se rencontrer sans confondre les places',
    questions: ['Comment vivons-nous les désaccords autour de cette situation ?', 'Qu’est-ce que chacun cherche à préserver ?'],
  },
  fissure: {
    title: 'Ce qu’une rupture change dans les liens',
    questions: ['Qu’est-ce que cette rupture a changé pour nous ?', 'Comment le jeune et ses proches ont-ils vécu ce changement ?'],
  },
  plume: {
    title: 'La place de nos mots et de nos éprouvés',
    questions: ['Quelle émotion revient quand nous parlons de cette situation ?', 'Quelle parole du jeune ou de ses proches avons-nous peu entendue ?'],
  },
  pierres: {
    title: 'Les appuis et la fatigue de ceux qui soutiennent',
    questions: ['Qu’est-ce qui nous fatigue dans le soutien que nous apportons ?', 'Qui soutient le quotidien du jeune en dehors des soins ?'],
  },
};
