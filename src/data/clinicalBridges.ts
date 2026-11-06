import type { ArchetypeId } from './archetypes';

export interface ClinicalBridge {
  focus?: {
    title: string;
    questions: [string, string];
    returnToSituation: string;
  };
  image: string;
  practice: string;
  example: string;
}

/** Une lecture possible de chaque scène, sans équivalence entre un personnage et une personne. */
export const clinicalBridges: Record<ArchetypeId, [ClinicalBridge, ClinicalBridge]> = {
  noeud: [
    {
      image: 'Le nœud a protégé la passerelle pendant la crue. L’eau a baissé, mais la corde tire encore comme avant.',
      practice: 'Un accord pris dans l’urgence peut continuer à organiser les liens alors que la situation a changé.',
      example: 'Après une crise, parents et soignants peuvent garder les mêmes échanges très rapprochés. L’équipe peut se demander ce qu’ils soutiennent aujourd’hui.',
    },
    {
      focus: {
        title: 'Quand notre aide se rigidifie',
        questions: ['Que ressentons-nous quand nos tentatives habituelles n’aident plus ?', 'Quel autre sujet permettrait de rencontrer le jeune autrement ?'],
        returnToSituation: 'Reprenons un entretien récent en cherchant un sujet encore peu abordé.',
      },
      image: 'Les réparations répétées ont durci la toile. Un autre point de départ apparaît à côté des anciennes coutures.',
      practice: 'Répéter une réponse qui n’aide plus peut réduire la place pour d’autres façons de rencontrer le jeune.',
      example: 'Quand les mêmes rappels occupent chaque entretien, un détail de la vie quotidienne peut ouvrir un autre sujet de rencontre.',
    },
  ],
  barque: [
    {
      image: 'Les deux passagères font des efforts, mais elles ne visent pas la même rive. Leur bonne volonté ne suffit pas à partager un cap.',
      practice: 'Le jeune, ses proches et les professionnels peuvent utiliser les mêmes mots sans attendre la même chose du soin.',
      example: '« Reprendre l’école » peut évoquer une journée entière pour les adultes, et retrouver un seul camarade pour le jeune.',
    },
    {
      focus: {
        title: 'Le poids de ce que nous connaissons peu',
        questions: ['Que ressentons-nous quand nous ne comprenons pas un empêchement ?', 'Quelles contraintes du quotidien connaissons-nous encore peu ?'],
        returnToSituation: 'Nommons une difficulté pratique dont nous savons encore peu de choses.',
      },
      image: 'La barque porte des paquets dont personne n’a raconté l’histoire. Leur poids reste absent du récit du voyage.',
      practice: 'Des contraintes du quotidien ou des expériences passées peuvent peser sur le soin sans être connues de l’équipe.',
      example: 'Devant des rendez-vous manqués, les trajets, les horaires familiaux ou une précédente rencontre difficile restent parfois peu explorés.',
    },
  ],
  roseau: [
    {
      image: 'Depuis l’abri, la gardienne voit un roseau agité. Dehors, elle découvre le vent auquel il répond.',
      practice: 'Un comportement se décrit aussi avec le lieu, le moment et les personnes présentes. Changer de point de vue peut changer notre compréhension.',
      example: 'Un jeune très silencieux en consultation peut parler davantage ailleurs. Ces observations invitent à comparer les conditions de rencontre.',
    },
    {
      focus: {
        title: 'Ce que notre aide change pour les autres',
        questions: ['Que ressentons-nous quand notre aide déplace la difficulté ?', 'Qu’est-ce que notre proposition change pour l’entourage du jeune ?'],
        returnToSituation: 'Décrivons ce qu’un aménagement récent change pour chaque personne concernée.',
      },
      image: 'L’abri protège un roseau, mais déplace le vent vers l’autre. Il modifie l’ensemble du petit paysage.',
      practice: 'Un aménagement peut soulager une difficulté tout en changeant les appuis demandés à l’entourage.',
      example: 'Un emploi du temps scolaire réduit peut apaiser certaines journées et demander aux proches une organisation nouvelle, encore peu discutée.',
    },
  ],
  mycelium: [
    {
      image: 'La carte montre les grands chemins. Elle ne montre pas les fils qui nourrissent les racines sous les feuilles.',
      practice: 'Le parcours de soins ne résume pas tous les liens qui comptent pour le jeune.',
      example: 'Une personne de l’école, un ami ou une activité régulière peuvent soutenir le quotidien sans apparaître dans les transmissions.',
    },
    {
      focus: {
        title: 'Un relais préparé, un lien encore à construire',
        questions: ['Comment vivons-nous le passage de relais dans cette situation ?', 'Qui peut être contacté par la famille pendant la transition ?'],
        returnToSituation: 'Reprenons une transition récente du point de vue de la famille.',
      },
      image: 'Le chemin semble réparé, mais les liens sous la terre restent coupés. La continuité visible ne raconte pas toute la continuité vécue.',
      practice: 'Un relais organisé entre services ne dit pas encore comment le jeune et ses proches vivent ce changement.',
      example: 'Le dossier est transmis et un rendez-vous fixé. La famille peut pourtant ne pas savoir à qui parler pendant l’attente.',
    },
  ],
  graine: [
    {
      image: 'En voulant vérifier chaque jour la pousse, la gardienne déplace aussi la graine. Son observation participe à ce qui se passe.',
      practice: 'Notre attente de résultats peut influencer la rencontre. Elle mérite d’être regardée avec les signes de changement que nous suivons.',
      example: 'Si chaque échange commence par « Alors, ça va mieux ? », il peut rester peu de place pour raconter un changement discret ou une incertitude.',
    },
    {
      focus: {
        title: 'Des rythmes et des conditions différents',
        questions: ['Qu’est-ce qui nous pousse à attendre le même rythme pour tous ?', 'Quelles conditions facilitent le prochain pas pour ce jeune ?'],
        returnToSituation: 'Décrivons les conditions concrètes dans lesquelles le changement est attendu.',
      },
      image: 'Les graines ont été semées le même jour, mais ne reçoivent pas la même lumière. Le calendrier ne décrit pas leurs conditions.',
      practice: 'Une même étape ou une même durée de suivi ne représente pas la même expérience pour chaque jeune.',
      example: 'Un objectif de retour en classe prend une autre forme selon l’accueil scolaire, les trajets et les appuis disponibles à la maison.',
    },
  ],
  cage: [
    {
      image: 'La porte est ouverte, mais un vide sépare le perchoir de la branche. Depuis l’extérieur, cette distance était peu visible.',
      practice: 'Proposer une possibilité et pouvoir s’en saisir sont deux expériences différentes.',
      example: 'Un rendez-vous accepté ne dit pas encore comment le jeune vivra le trajet, la salle d’attente ou la première séparation.',
    },
    {
      focus: {
        title: 'Les appuis qui accompagnent le changement',
        questions: ['Que ressentons-nous à l’idée de maintenir cet appui ?', 'Qu’est-ce que cet appui permet au jeune aujourd’hui ?'],
        returnToSituation: 'Nommons un appui familier et ce qu’il rend possible actuellement.',
      },
      image: 'Le perchoir semblait retenir l’oiseau. Il lui servait aussi à se retourner et à mesurer la distance vers la porte.',
      practice: 'Un appui peut accompagner un changement. Sa présence ne signifie pas forcément que le jeune ne peut pas avancer.',
      example: 'Au moment d’un relais, une personne ou un repère familier peut compter dans la façon dont le jeune rencontre le nouveau lieu.',
    },
  ],
  phare: [
    {
      image: 'Le rocher occupe toute la lumière. Un léger déplacement révèle une maison, sans faire disparaître le danger du rocher.',
      practice: 'Une inquiétude peut prendre toute la place dans le récit clinique. D’autres scènes de vie peuvent aussi éclairer la rencontre.',
      example: 'Une transmission centrée sur un épisode de crise peut laisser de côté un moment partagé avec un proche ou un intérêt du jeune.',
    },
    {
      focus: {
        title: 'Quand nos explications prennent toute la place',
        questions: ['Que ressentons-nous quand nos explications ne semblent pas aider ?', 'Comment le jeune s’exprime-t-il en dehors des mots ?'],
        returnToSituation: 'Reprenons un geste ou un dessin du jeune encore peu discuté.',
      },
      image: 'Dans la brume, augmenter la lumière éblouit davantage. D’autres repères deviennent perceptibles quand la gardienne écoute aussi.',
      practice: 'Multiplier les explications ne rend pas toujours la rencontre plus claire. D’autres formes d’expression peuvent rester peu entendues.',
      example: 'Pendant un entretien très rempli de paroles adultes, un dessin, un geste ou une phrase brève du jeune peut passer inaperçu.',
    },
  ],
  riviere: [
    {
      image: 'La gardienne cherche à corriger le remous. En remontant la berge, elle découvre les courants qui l’alimentent.',
      practice: 'Un moment difficile peut se comprendre dans une suite d’interactions, plutôt que comme le seul geste d’une personne.',
      example: 'Raconter ce qui précède et suit un départ d’entretien peut faire apparaître les réponses successives du jeune, des proches et des professionnels.',
    },
    {
      focus: {
        title: 'Prendre pied dans un nouveau lieu',
        questions: ['Comment vivons-nous le temps nécessaire à cette transition ?', 'Quels repères le jeune trouve-t-il dans le nouveau lieu ?'],
        returnToSituation: 'Racontons le premier jour d’une transition, au-delà de son organisation.',
      },
      image: 'Le canal accélère le trajet, mais supprime les endroits où accoster. Arriver vite et pouvoir prendre pied ne sont pas la même chose.',
      practice: 'Une transition peut sembler fluide pour l’organisation tout en laissant peu de temps pour trouver ses repères.',
      example: 'Une sortie peut être préparée entre services alors que le jeune et sa famille cherchent encore comment se passera le premier jour ailleurs.',
    },
  ],
  cercles: [
    {
      image: 'La limite entre les cercles sépare, mais permet aussi de déposer ses affaires. La table crée un lieu partagé sans effacer les places.',
      practice: 'Travailler ensemble n’exige pas de vivre la situation de la même façon. Les différences peuvent entrer dans la discussion.',
      example: 'Une famille et une équipe peuvent vouloir aider le jeune tout en ayant des attentes différentes sur les contacts avec le service.',
    },
    {
      focus: {
        title: 'Deux récits d’une même situation',
        questions: ['Que ressentons-nous quand un autre récit contredit le nôtre ?', 'Qu’est-ce qui change selon la place de chacun ?'],
        returnToSituation: 'Décrivons une même scène depuis deux places différentes.',
      },
      image: 'Les deux cartes montrent le même lieu avec des légendes différentes. Les superposer rend leurs mots illisibles.',
      practice: 'Des récits différents ne s’annulent pas forcément. Ils peuvent décrire des expériences depuis des places différentes.',
      example: 'Un parent décrit un enfant débordé à la maison ; l’école le voit très contenu. Les deux descriptions peuvent être explorées ensemble.',
    },
  ],
  fissure: [
    {
      image: 'La fissure revient malgré l’enduit. En regardant l’autre face du mur, la gardienne découvre une arrivée d’eau.',
      practice: 'Ce qui se répète dans un lieu peut être lié à des événements ou des échanges que nous connaissons peu.',
      example: 'Avant de raconter une nouvelle difficulté comme « toujours la même », l’équipe peut chercher ce qui a changé dans le quotidien du jeune.',
    },
    {
      focus: {
        title: 'Ce qui a tenu hier, ce qu’on attend aujourd’hui',
        questions: ['Que nous fait vivre l’idée de revoir cet accord ?', 'À quoi cet accord répond-il encore aujourd’hui ?'],
        returnToSituation: 'Rappelons le contexte dans lequel un accord a été pris.',
      },
      image: 'Le tissu a permis de garder les morceaux du bol ensemble. Cette première réparation ne répond pas à tous ses usages futurs.',
      practice: 'Un arrangement utile à un moment donné peut demander une nouvelle lecture quand les attentes changent.',
      example: 'Un cadre convenu pendant une crise peut rester important, tout en suscitant de nouvelles questions lorsque les rencontres reprennent autrement.',
    },
  ],
  plume: [
    {
      image: 'Les voix autour de la table déplacent la plume. La gardienne découvre que son propre souffle fait aussi partie de la scène.',
      practice: 'Nos émotions et nos échanges d’équipe participent à la façon dont nous abordons le jeune et ses proches.',
      example: 'Après une réunion tendue, une équipe peut remarquer qu’elle attend surtout de la prochaine rencontre une confirmation de son inquiétude.',
    },
    {
      focus: {
        title: 'Les mots qui orientent encore notre regard',
        questions: ['Quelle formule revient souvent quand nous parlons de ce jeune ?', 'Quel fait récent pourrait nuancer cette formule ?'],
        returnToSituation: 'Relisons une transmission à la lumière d’une rencontre récente.',
      },
      image: 'Une phrase recopiée dans le registre devient une évidence. Un petit trajet, oublié dans la marge, en nuance pourtant le sens.',
      practice: 'Les formulations transmises peuvent continuer à orienter notre regard après que la situation a évolué.',
      example: 'La mention « ne vient jamais » peut faire oublier une venue récente ou les conditions précises dans lesquelles le jeune a pu venir.',
    },
  ],
  pierres: [
    {
      image: 'L’empilement paraît tenir seul. La gardienne remarque ensuite la main qui le soutient et la fatigue du poignet.',
      practice: 'Ce qui semble stable peut reposer sur un soutien devenu peu visible.',
      example: 'Une présence régulière à l’école peut demander beaucoup à un proche. Cette part du quotidien n’apparaît pas toujours dans le bilan.',
    },
    {
      focus: {
        title: 'Retrouver une continuité après une rupture',
        questions: ['Qu’espérons-nous retrouver de la situation d’avant ?', 'Qu’est-ce qui a changé dans les appuis du jeune ?'],
        returnToSituation: 'Nommons ce qui reste disponible après le changement.',
      },
      image: 'Les pierres sont toujours là après la crue, mais leurs surfaces ont changé. Le vieux dessin ne suffit plus à les assembler.',
      practice: 'Après une rupture, retrouver une continuité ne signifie pas forcément reproduire exactement l’organisation précédente.',
      example: 'Après un changement d’interlocuteur, le projet peut rester le même alors que le jeune et les proches ont de nouveaux liens à construire.',
    },
  ],
};

export const imageThemes: Record<ArchetypeId, string> = {
  noeud: 'les tensions dans les liens', barque: 'les attentes de chacun', roseau: 'les effets du contexte',
  mycelium: 'les soutiens discrets', graine: 'le temps du changement', cage: 'les appuis du premier pas',
  phare: 'ce qui attire notre attention', riviere: 'la suite des interactions', cercles: 'les points de vue différents',
  fissure: 'les effets d’une rupture', plume: 'les mots et les émotions de l’équipe', pierres: 'ceux qui soutiennent le quotidien',
};
