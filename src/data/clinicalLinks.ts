import type { ArchetypeId } from './archetypes';

export interface ClinicalLink {
  focus?: {
    title: string;
    questions: [string, string];
  };
  practice: string;
}

/** Des liens possibles avec la pratique et des questions propres à chaque angle métaphorique. */
export const clinicalLinks: Record<ArchetypeId, [ClinicalLink, ClinicalLink]> = {
  noeud: [
    {
      practice: 'Un accord pris dans l’urgence peut continuer à organiser les liens alors que la situation a changé.',
    },
    {
      focus: {
        title: 'Quand notre aide se rigidifie',
        questions: ['Que ressentons-nous quand nos tentatives habituelles n’aident plus ?', 'Quel autre sujet permettrait de rencontrer le jeune autrement ?'],
      },
      practice: 'Répéter une réponse qui n’aide plus peut réduire la place pour d’autres façons de rencontrer le jeune.',
    },
  ],
  barque: [
    {
      practice: 'Le jeune, ses proches et les professionnels peuvent utiliser les mêmes mots sans attendre la même chose du soin.',
    },
    {
      focus: {
        title: 'Le poids de ce que nous connaissons peu',
        questions: ['Que ressentons-nous quand nous ne comprenons pas un empêchement ?', 'Quelles contraintes du quotidien connaissons-nous encore peu ?'],
      },
      practice: 'Des contraintes du quotidien ou des expériences passées peuvent peser sur le soin sans être connues de l’équipe.',
    },
  ],
  roseau: [
    {
      practice: 'Un comportement se décrit aussi avec le lieu, le moment et les personnes présentes. Changer de point de vue peut changer notre compréhension.',
    },
    {
      focus: {
        title: 'Ce que notre aide change pour les autres',
        questions: ['Que ressentons-nous quand notre aide déplace la difficulté ?', 'Qu’est-ce que notre proposition change pour l’entourage du jeune ?'],
      },
      practice: 'Un aménagement peut soulager une difficulté tout en changeant les appuis demandés à l’entourage.',
    },
  ],
  mycelium: [
    {
      practice: 'Le parcours de soins ne résume pas tous les liens qui comptent pour le jeune.',
    },
    {
      focus: {
        title: 'Un relais préparé, un lien encore à construire',
        questions: ['Comment vivons-nous le passage de relais dans cette situation ?', 'Qui peut être contacté par la famille pendant la transition ?'],
      },
      practice: 'Un relais organisé entre services ne dit pas encore comment le jeune et ses proches vivent ce changement.',
    },
  ],
  graine: [
    {
      practice: 'Notre attente de résultats peut influencer la rencontre. Elle mérite d’être regardée avec les signes de changement que nous suivons.',
    },
    {
      focus: {
        title: 'Des rythmes et des conditions différents',
        questions: ['Qu’est-ce qui nous pousse à attendre le même rythme pour tous ?', 'Quelles conditions facilitent le prochain pas pour ce jeune ?'],
      },
      practice: 'Une même étape ou une même durée de suivi ne représente pas la même expérience pour chaque jeune.',
    },
  ],
  cage: [
    {
      practice: 'Proposer une possibilité et pouvoir s’en saisir sont deux expériences différentes.',
    },
    {
      focus: {
        title: 'Les appuis qui accompagnent le changement',
        questions: ['Que ressentons-nous à l’idée de maintenir cet appui ?', 'Qu’est-ce que cet appui permet au jeune aujourd’hui ?'],
      },
      practice: 'Un appui peut accompagner un changement. Sa présence ne signifie pas forcément que le jeune ne peut pas avancer.',
    },
  ],
  phare: [
    {
      practice: 'Une inquiétude peut prendre toute la place dans le récit clinique. D’autres scènes de vie peuvent aussi éclairer la rencontre.',
    },
    {
      focus: {
        title: 'Quand nos explications prennent toute la place',
        questions: ['Que ressentons-nous quand nos explications ne semblent pas aider ?', 'Comment le jeune s’exprime-t-il en dehors des mots ?'],
      },
      practice: 'Multiplier les explications ne rend pas toujours la rencontre plus claire. D’autres formes d’expression peuvent rester peu entendues.',
    },
  ],
  riviere: [
    {
      practice: 'Un moment difficile peut se comprendre dans une suite d’interactions, plutôt que comme le seul geste d’une personne.',
    },
    {
      focus: {
        title: 'Prendre pied dans un nouveau lieu',
        questions: ['Comment vivons-nous le temps nécessaire à cette transition ?', 'Quels repères le jeune trouve-t-il dans le nouveau lieu ?'],
      },
      practice: 'Une transition peut sembler fluide pour l’organisation tout en laissant peu de temps pour trouver ses repères.',
    },
  ],
  cercles: [
    {
      practice: 'Travailler ensemble n’exige pas de vivre la situation de la même façon. Les différences peuvent entrer dans la discussion.',
    },
    {
      focus: {
        title: 'Deux récits d’une même situation',
        questions: ['Que ressentons-nous quand un autre récit contredit le nôtre ?', 'Qu’est-ce qui change selon la place de chacun ?'],
      },
      practice: 'Des récits différents ne s’annulent pas forcément. Ils peuvent décrire des expériences depuis des places différentes.',
    },
  ],
  fissure: [
    {
      practice: 'Ce qui se répète dans un lieu peut être lié à des événements ou des échanges que nous connaissons peu.',
    },
    {
      focus: {
        title: 'Ce qui a tenu hier, ce qu’on attend aujourd’hui',
        questions: ['Que nous fait vivre l’idée de revoir cet accord ?', 'À quoi cet accord répond-il encore aujourd’hui ?'],
      },
      practice: 'Un arrangement utile à un moment donné peut demander une nouvelle lecture quand les attentes changent.',
    },
  ],
  plume: [
    {
      practice: 'Nos émotions et nos échanges d’équipe participent à la façon dont nous abordons le jeune et ses proches.',
    },
    {
      focus: {
        title: 'Les mots qui orientent encore notre regard',
        questions: ['Quelle formule revient souvent quand nous parlons de ce jeune ?', 'Quel fait récent pourrait nuancer cette formule ?'],
      },
      practice: 'Les formulations transmises peuvent continuer à orienter notre regard après que la situation a évolué.',
    },
  ],
  pierres: [
    {
      practice: 'Ce qui semble stable peut reposer sur un soutien devenu peu visible.',
    },
    {
      focus: {
        title: 'Retrouver une continuité après une rupture',
        questions: ['Qu’espérons-nous retrouver de la situation d’avant ?', 'Qu’est-ce qui a changé dans les appuis du jeune ?'],
      },
      practice: 'Après une rupture, retrouver une continuité ne signifie pas forcément reproduire exactement l’organisation précédente.',
    },
  ],
};
