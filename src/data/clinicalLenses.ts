import type { ArchetypeId } from './archetypes';

export interface ClinicalLens {
  title: string;
  opening: string;
  questions: [string, string];
  returnToSituation: string;
}

/** Questions d’intervision adressées aux professionnels, jamais des conclusions sur l’enfant. */
export const clinicalLenses: Record<ArchetypeId, ClinicalLens> = {
  noeud: {
    title: 'Ce que nos efforts resserrent ou soutiennent',
    opening: 'Et si nous regardions aussi les tensions auxquelles nous participons ? Un cadre, un lien ou un accord peut protéger et serrer à la fois. L’image invite à distinguer les gestes de chacun, sans décider qui serait « le nœud ».',
    questions: ['Qu’est-ce qui nous pousse à insister dans cette situation ?', 'Comment nos interventions modifient-elles les échanges avec le jeune et ses proches ?'],
    returnToSituation: 'Reprenons un échange récent en décrivant la réponse de chacun.',
  },
  barque: {
    title: 'Les caps que nous croyons partager',
    opening: 'Et si notre impression de tourner en rond contenait plusieurs destinations encore peu dites ? Le jeune, ses proches et les professionnels peuvent tenir au même voyage sans attendre la même chose de la prochaine étape.',
    questions: ['Qu’est-ce qui nous donne le sentiment de tourner en rond ?', 'Qu’est-ce qu’« avancer » voudrait dire pour le jeune et ses proches ?'],
    returnToSituation: 'Choisissons un objectif du projet et écoutons ce que chacun en attend.',
  },
  roseau: {
    title: 'Ce que le contexte fait éprouver à chacun',
    opening: 'Et si nous prenions le temps de décrire les conditions dans lesquelles un mouvement apparaît ? Ce qui nous semble souplesse, agitation ou retrait peut changer selon le lieu, le moment et la place depuis laquelle nous regardons.',
    questions: ['Dans quels moments nous sentons-nous tendus face à cette situation ?', 'Qu’est-ce qui change pour le jeune entre la maison, l’école et les soins ?'],
    returnToSituation: 'Comparons deux scènes du quotidien dans des lieux différents.',
  },
  mycelium: {
    title: 'Les liens discrets et les continuités fragiles',
    opening: 'Et si certains appuis échappaient à notre carte des soins ? Une présence ordinaire, un trajet, un lien avec l’école ou un relais informel peuvent compter sans être nommés dans nos transmissions. Leur discrétion ne dit pas leur importance.',
    questions: ['Que ressentons-nous quand le soutien se construit en dehors de notre équipe ?', 'Qui compte pour ce jeune sans apparaître dans nos échanges ?'],
    returnToSituation: 'Nommons un lien du jeune que nous connaissons encore peu.',
  },
  graine: {
    title: 'Le temps du soin et le besoin de voir',
    opening: 'Et si notre attente de signes visibles faisait elle aussi partie de la situation ? Les temps du jeune, de sa famille, de l’école et de l’institution ne coïncident pas toujours. L’image permet d’interroger notre manière d’attendre, sans idéaliser l’inaction.',
    questions: ['Comment vivons-nous le temps où rien ne semble changer ?', 'Quel petit changement avons-nous peut-être laissé de côté ?'],
    returnToSituation: 'Racontons un petit changement observé lors d’une rencontre récente.',
  },
  cage: {
    title: 'Les appuis d’une possibilité réellement accessible',
    opening: 'Et si nous distinguions une possibilité annoncée et les conditions pour s’en saisir ? Une sortie, une séparation ou un relais peuvent être souhaités tout en restant difficiles à habiter. L’image ne dit pas pourquoi le jeune hésite ; elle questionne ce que nous rendons accessible.',
    questions: ['Que ressentons-nous quand notre proposition n’est pas saisie ?', 'Comment le jeune vit-il le premier pas que nous lui proposons ?'],
    returnToSituation: 'Décrivons le premier pas proposé du point de vue du jeune.',
  },
  phare: {
    title: 'Ce que notre attention éclaire et laisse dans l’ombre',
    opening: 'Et si nous élargissions la scène sans minimiser ce qui nous inquiète ? Un risque ou une difficulté peut mobiliser toute l’attention. Faire place à d’autres moments de vie ne l’annule pas ; cela peut rendre notre récit moins étroit.',
    questions: ['Quelle inquiétude prend le plus de place dans notre équipe ?', 'Quel moment de vie du jeune connaissons-nous encore peu ?'],
    returnToSituation: 'Ajoutons à notre récit une scène ordinaire de la vie du jeune.',
  },
  riviere: {
    title: 'Les enchaînements plutôt qu’une cause isolée',
    opening: 'Et si nous racontions une séquence d’interactions plutôt qu’un problème situé chez une seule personne ? Avant et après un moment difficile, des réponses s’enchaînent entre le jeune, son entourage et les lieux qui l’accueillent. Plusieurs descriptions peuvent coexister.',
    questions: ['Quand avons-nous l’impression de rejouer la même scène ?', 'Que se passe-t-il juste avant le moment difficile ?'],
    returnToSituation: 'Reprenons un épisode précis, dans l’ordre où il s’est déroulé.',
  },
  cercles: {
    title: 'Se rencontrer sans confondre les places',
    opening: 'Et si nous faisions place à des perspectives différentes sans chercher trop vite une version commune ? Famille, jeune et professionnels peuvent partager une préoccupation et avoir besoin de frontières différentes. La rencontre n’exige pas que leurs récits deviennent identiques.',
    questions: ['Comment vivons-nous les désaccords autour de cette situation ?', 'Qu’est-ce que chacun cherche à préserver ?'],
    returnToSituation: 'Écoutons deux points de vue sans chercher tout de suite à les accorder.',
  },
  fissure: {
    title: 'Ce qu’une rupture change dans les liens',
    opening: 'Et si nous regardions ce qu’une rupture a fragilisé, mais aussi ce qu’elle rend désormais perceptible ? Une crise, une absence ou un changement d’interlocuteur ne reçoit pas le même sens pour tous. L’image n’en fait ni une faute ni une chance obligatoire.',
    questions: ['Qu’est-ce que cette rupture a changé pour nous ?', 'Comment le jeune et ses proches ont-ils vécu ce changement ?'],
    returnToSituation: 'Nommons un lien qui a changé depuis cette rupture.',
  },
  plume: {
    title: 'La place de nos mots et de nos éprouvés',
    opening: 'Et si notre façon de parler de la situation faisait aussi partie de ce qui se passe ? Les mots repris en transmission, les silences et les émotions d’équipe peuvent orienter les rencontres. Les mettre en discussion ne revient pas à désigner un responsable.',
    questions: ['Quelle émotion revient quand nous parlons de cette situation ?', 'Quelle parole du jeune ou de ses proches avons-nous peu entendue ?'],
    returnToSituation: 'Reformulons une phrase de nos transmissions à partir d’un fait observé.',
  },
  pierres: {
    title: 'Les appuis et la fatigue de ceux qui soutiennent',
    opening: 'Et si nous rendions visibles les appuis derrière ce qui paraît tenir ? Le jeune, ses proches et les professionnels peuvent porter des parts inégales de la continuité. Les reconnaître permet d’interroger notre récit de l’autonomie sans confondre soutien et dépendance.',
    questions: ['Qu’est-ce qui nous fatigue dans le soutien que nous apportons ?', 'Qui soutient le quotidien du jeune en dehors des soins ?'],
    returnToSituation: 'Nommons une personne qui soutient le quotidien du jeune et ce qu’elle apporte.',
  },
};
