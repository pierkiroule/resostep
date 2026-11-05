export type ArchetypeId =
  | 'noeud' | 'barque' | 'roseau' | 'mycelium' | 'graine' | 'cage'
  | 'phare' | 'riviere' | 'cercles' | 'fissure' | 'plume' | 'pierres';

export interface Archetype {
  id: ArchetypeId;
  number: number;
  name: string;
  symbol: ArchetypeId;
  dynamic: string;
  subtitle: string;
  animationDescription: string;
  /** Sans media, la scène SVG de cette première version est utilisée. */
  media?: { type: 'video' | 'image'; src: string; poster?: string };
  /** Facultatif : fichier enregistré, prioritaire sur la synthèse du navigateur. */
  audio?: string;
  voice: string;
  paradox: string;
  counterpoint: string;
  questions: [string, string, string];
  invitation: string;
}

export const questionLabels = [
  'Ce que cela nous fait vivre',
  'Ce qui se joue entre nous',
  'Le pas de côté',
] as const;

export const archetypes: Archetype[] = [
  {
    id: 'noeud', number: 1, name: 'Le Nœud', symbol: 'noeud',
    dynamic: 'Tension et attachement',
    subtitle: 'Dans ce qui serre, quelque chose tient.',
    animationDescription: 'Deux fils se tendent puis se desserrent. Leur croisement laisse apparaître un petit fragment qu’ils maintiennent ensemble.',
    voice: 'Je suis le Nœud. Je nais au croisement de plusieurs fils, jamais d’un seul. Quand une main tire, toutes les autres sentent quelque chose. On voudrait parfois m’effacer pour retrouver un fil droit. Mais quelle histoire resterait alors de leur rencontre ?',
    paradox: 'Je peux retenir un mouvement et soutenir un assemblage. Me serrer donne une prise ; cette prise peut aussi faire mal. Me défaire soulage peut-être, mais expose ce qui reposait sur moi. Aucun fil, regardé isolément, ne raconte toute la tension. Et celui qui paraît immobile n’est pas nécessairement celui qui tire le plus.',
    counterpoint: 'Dans notre équipe, l’envie de résoudre peut devenir un fil supplémentaire. Que se passerait-il si nous regardions, un instant, les appuis de ce qui résiste ? Cette image ne dit pas pourquoi une situation dure. Elle offre un endroit où observer notre manière d’y prendre part, nos impatiences et nos fidélités, sans décider à l’avance de ce qu’il faudrait dénouer.',
    questions: [
      'Quand nous disons « tout est bloqué », où sentons-nous la tension dans nos corps, et quelles images viennent à chacun ?',
      'Comment nos différentes façons de tenir à cette situation se répondent-elles, se renforcent-elles ou se contrarient-elles ?',
      'Si nous regardions ce que le nœud assemble autant que ce qu’il entrave, quel détail deviendrait visible ?',
    ],
    invitation: 'Laissons un peu de jeu entre les fils : nous ne savons pas encore ce qui tient.',
  },
  {
    id: 'barque', number: 2, name: 'La Barque', symbol: 'barque',
    dynamic: 'Traversée et incertitude',
    subtitle: 'Tenir à flot, sans posséder la rive.',
    animationDescription: 'Une barque oscille entre deux courants contraires. Elle reste à flot, sans rejoindre une direction définitive.',
    voice: 'Je suis la Barque. Sous ma coque passent des eaux qui ne vont pas toutes au même endroit. Je porte des présences, des silences, quelques bagages dont personne ne connaît tout le poids. Depuis la rive, on pourrait croire que je n’avance pas. À bord, on sent combien cela bouge.',
    paradox: 'Un cap rassemble ; il peut aussi rendre sourd à ce que rencontre la traversée. Changer de direction peut ressembler à une hésitation ou témoigner d’une attention au courant. Et rester à flot mobilise parfois plus de gestes qu’une avancée visible. L’incertitude n’a pourtant rien d’un refuge confortable : elle fatigue ceux qui cherchent où poser le pied.',
    counterpoint: 'Et si la question du moment concernait moins la bonne rive que les places à bord ? Qui regarde l’horizon, qui écope, qui compte le temps ? Ces images ne distribuent aucun rôle définitif. Elles permettent d’entendre des expériences différentes d’un même voyage, y compris celle d’un collègue resté sur le quai de notre récit.',
    questions: [
      'Dans cette traversée, éprouvons-nous plutôt le vertige, l’épuisement, l’élan ou une sensation encore difficile à nommer ?',
      'Quels caps différents orientent nos échanges, et comment chacun reçoit-il les changements de direction des autres ?',
      'Si nous racontions la scène depuis la rive, puis depuis la coque, qu’est-ce qui changerait dans notre récit ?',
    ],
    invitation: 'Entre deux rives, une manière de voyager reste à inventer ensemble.',
  },
  {
    id: 'roseau', number: 3, name: 'Le Roseau', symbol: 'roseau',
    dynamic: 'Souplesse et résistance',
    subtitle: 'Le même vent, plusieurs manières de tenir.',
    animationDescription: 'Deux roseaux reçoivent le même vent. L’un s’incline largement ; l’autre garde sa verticalité tout en vibrant.',
    voice: 'Je suis le Roseau. Mon voisin et moi rencontrons le même vent, mais nos courbes diffèrent. Je m’incline ; il demeure presque droit. De loin, on me dit souple et on le dit solide. De près, nos fibres travaillent toutes les deux, et nos racines n’habitent pas exactement la même terre.',
    paradox: 'Plier peut préserver une continuité, ou finir par épuiser. Résister peut offrir un repère, ou rendre chaque rafale plus rude. Rien, dans la seule forme de nos tiges, ne permet de trancher. Le vent lui-même change. Une posture qui soutient aujourd’hui peut coûter demain, et ce coût reste parfois invisible à ceux qui observent.',
    counterpoint: 'Notre conversation peut-elle faire une place aux deux mouvements sans élire le bon roseau ? La différence entre collègues pourrait devenir un contraste à explorer. Cela n’annule ni les désaccords ni les contraintes. Cela suspend seulement le classement rapide entre ceux qui « cèdent » et ceux qui « tiennent », pour écouter les conditions dans lesquelles chacun cherche un appui.',
    questions: [
      'Qu’est-ce qui se tend ou s’assouplit en nous lorsque nous entendons une position très différente de la nôtre ?',
      'Comment les adaptations de certains et les résistances d’autres modifient-elles le mouvement de notre collectif ?',
      'Quel changement du vent, du sol ou de notre point d’observation ferait apparaître ces postures autrement ?',
    ],
    invitation: 'Écoutons aussi le vent entre les tiges.',
  },
  {
    id: 'mycelium', number: 4, name: 'Le Mycélium', symbol: 'mycelium',
    dynamic: 'Interdépendance et liens invisibles',
    subtitle: 'Sous la scène, d’autres chemins se dessinent.',
    animationDescription: 'Des filaments d’encre se rejoignent. Des liens s’effacent pendant que d’autres connexions apparaissent à la périphérie.',
    voice: 'Je suis le Mycélium. Vous apercevez un point, puis un autre, et vous cherchez la ligne qui les relie. Une partie de mon dessin demeure sous la surface. Certains de mes chemins s’éteignent tandis que d’autres commencent ailleurs. Mon réseau n’a pas de centre qui puisse en raconter toute l’étendue.',
    paradox: 'Être relié peut soutenir et peut encombrer. Une circulation nombreuse ne garantit pas une rencontre ; un lien discret peut compter beaucoup. Ce qui se retire ne disparaît pas forcément sans laisser de trace. Ce qui se multiplie n’est pas nécessairement plus vivant. Mes ramifications n’offrent donc ni carte idéale ni célébration de tous les liens.',
    counterpoint: 'Dans le récit d’une situation, les personnes très présentes occupent facilement toute la lumière. Quels relais ordinaires restent dans la pénombre : un accueil, un trajet, un échange de seuil ? Nous pouvons les imaginer sans prétendre connaître leurs effets. Déplacer le regard vers ces passages pourrait aussi éclairer la façon dont nos propres informations circulent, se perdent ou changent de sens.',
    questions: [
      'Quand les liens nous échappent, ressentons-nous de la solitude, une surcharge, de la curiosité ou autre chose ?',
      'Par quels chemins nos paroles circulent-elles entre professionnels, et que deviennent-elles lorsqu’elles passent d’un lieu à l’autre ?',
      'Quel lien peu visible, ou quel espace sans lien, mériterait une place dans notre représentation actuelle ?',
    ],
    invitation: 'Sous ce que nous voyons, le dessin reste inachevé.',
  },
  {
    id: 'graine', number: 5, name: 'La Graine', symbol: 'graine',
    dynamic: 'Germination et temporalité',
    subtitle: 'Ce qui ne se voit pas n’est pas encore une réponse.',
    animationDescription: 'Une graine paraît immobile. La terre et l’humidité changent autour d’elle ; une racine devient visible puis se fond dans le sol.',
    voice: 'Je suis la Graine. Vous me regardez depuis plusieurs jours et vous ne voyez presque rien. Autour de moi, pourtant, la terre se tasse, l’eau se déplace, la lumière change. Je ne peux pas vous promettre une pousse. Mon silence ne prouve ni que tout commence, ni que tout est perdu.',
    paradox: 'Attendre peut laisser du temps ; attendre peut aussi devenir une absence. Chercher un signe peut rendre attentif, ou transformer chaque détail en preuve espérée. La racine minuscule que vous apercevez ne connaît pas la suite de l’histoire. Je demeure exposée aux conditions qui m’entourent, sans être entièrement définie par elles.',
    counterpoint: 'Si l’équipe cessait un instant de mesurer seulement ce qui émerge, que remarquerait-elle du milieu qu’elle contribue à former ? Les rythmes institutionnels, les rendez-vous, les passages de relais ont aussi leur météo. Cette image n’invite pas à différer une décision nécessaire. Elle ouvre une conversation sur nos horloges différentes et sur ce que nous appelons, parfois trop vite, « rien ».',
    questions: [
      'Qu’est-ce que l’absence de changement visible dépose en nous : doute, ennui, urgence, espoir ou sentiment d’impuissance ?',
      'Comment nos échéances et nos attentes se rencontrent-elles, et lesquelles prennent le plus de place dans nos échanges ?',
      'Si nous observions les conditions autour de la graine plutôt que sa croissance, quels petits déplacements apparaîtraient ?',
    ],
    invitation: 'Une terre silencieuse reste une question ouverte.',
  },
  {
    id: 'cage', number: 6, name: 'La Cage ouverte', symbol: 'cage',
    dynamic: 'Liberté et sécurité',
    subtitle: 'Une porte ouverte ne raconte pas tout du seuil.',
    animationDescription: 'La porte d’une cage s’ouvre et reste ouverte. L’oiseau demeure sur son perchoir tandis que la lumière extérieure change.',
    voice: 'Je suis la Cage ouverte. Ma porte a bougé et l’oiseau est encore là. Depuis l’extérieur, le passage semble disponible. Depuis le perchoir, on voit aussi le vide après le seuil, le ciel sans contour, les distances inconnues. Mon ouverture est réelle ; elle ne raconte pas à elle seule ce que signifie sortir.',
    paradox: 'Un abri peut protéger et réduire l’horizon. Une issue peut donner de l’air et exposer au vertige. Rester ne révèle pas une intention cachée ; partir ne garantit pas un sentiment de liberté. Entre dedans et dehors, il existe des positions de seuil qui résistent aux lectures rapides. Mes barreaux et ma porte appartiennent à la même construction.',
    counterpoint: 'Et si notre regard se déplaçait de l’oiseau vers ceux qui observent l’ouverture ? L’attente d’un départ, la crainte d’une chute, le besoin de vérifier peuvent transformer l’atmosphère autour du seuil. Rien ici ne désigne un patient ni une famille. L’image nous prête simplement un espace où regarder ce que nous éprouvons lorsqu’une possibilité offerte n’est pas saisie.',
    questions: [
      'Que nous fait vivre cette porte ouverte devant laquelle le mouvement attendu ne vient pas ?',
      'Comment nos façons de protéger, d’encourager ou d’attendre se répondent-elles autour de ce seuil ?',
      'Si nous regardions depuis le perchoir, quel élément de l’extérieur prendrait une importance nouvelle ?',
    ],
    invitation: 'Le seuil a peut-être une épaisseur que nous découvrons seulement.',
  },
  {
    id: 'phare', number: 7, name: 'Le Phare', symbol: 'phare',
    dynamic: 'Présence et orientation',
    subtitle: 'Éclairer quelque chose, laisser autre chose dans la nuit.',
    animationDescription: 'Un faisceau traverse lentement la brume. Il révèle tour à tour un rocher, une voile et une côte, jamais tous ensemble.',
    voice: 'Je suis le Phare. Je reste sur mon rocher et ma lumière tourne. Pendant quelques secondes, une voile apparaît ; puis c’est une côte, puis une eau sans trace. Je ne déplace aucun bateau. Mon repère intermittent vient d’un autre lieu que la traversée.',
    paradox: 'Ma constance rassure peut-être. Elle peut aussi faire attendre de moi une visibilité que je ne possède pas. Éclairer une zone en laisse d’autres dans l’ombre. Augmenter la lumière ne dissipe pas toujours la brume ; parfois elle la rend plus blanche et le regard plus incertain. Mes limites font partie de ce que je peux offrir.',
    counterpoint: 'Dans une équipe, nous pouvons chercher la personne qui verra enfin toute la scène. Et si nous regardions plutôt comment nos éclairages se relaient ? Un détail aperçu par l’un manque à l’autre ; une conviction vive peut masquer un relief. Il ne s’agit pas de rendre tous les points de vue équivalents, mais de laisser une place à ce qui demeure hors de notre faisceau commun.',
    questions: [
      'Qu’éprouvons-nous lorsque l’on attend de nous un cap clair alors que nous distinguons mal les contours ?',
      'À qui demandons-nous de tenir le rôle du repère, et quelle place reste-t-il à ses hésitations ?',
      'Quelle partie de la scène nos éclairages habituels laissent-ils dans la pénombre, et depuis où pourrait-elle apparaître ?',
    ],
    invitation: 'Le faisceau passe ; la nuit garde encore des reliefs.',
  },
  {
    id: 'riviere', number: 8, name: 'La Rivière', symbol: 'riviere',
    dynamic: 'Détour et adaptation',
    subtitle: 'Deux courants se rencontrent sans devenir un seul.',
    animationDescription: 'Deux courants se rencontrent autour d’un petit tourbillon puis poursuivent des trajectoires distinctes.',
    voice: 'Je suis la Rivière. Deux courants se rencontrent en moi. Leur eau tourne un moment, dessine un creux, puis repart par des chemins distincts. Depuis le pont, ce tourbillon ressemble à un arrêt. À sa surface, rien n’est immobile. Même les rives participent à la forme du mouvement.',
    paradox: 'Contourner un obstacle peut ouvrir un passage ou éloigner d’un lieu important. Rester dans le courant commun peut soutenir l’élan ou effacer une différence. La fluidité n’est pas une vertu en soi, pas plus que le détour n’est un échec. Il arrive qu’un méandre rende visible une rive que le trajet direct n’aurait jamais rencontrée.',
    counterpoint: 'Lorsque notre discussion revient au même point, nous pouvons l’entendre comme une répétition stérile. Pourrions-nous aussi y voir la rencontre de deux directions qui n’ont pas encore trouvé comment coexister ? Ce regard ne promet aucune issue. Il permet d’observer les berges de l’échange : le temps disponible, les mots autorisés, les décisions déjà prises, tout ce qui façonne la circulation entre nous.',
    questions: [
      'Quand la conversation semble tourner en rond, quel mouvement intérieur nous traverse, et lequel devient difficile à supporter ?',
      'Quelles directions différentes se rencontrent dans nos échanges, et comment le cadre accentue-t-il leur frottement ?',
      'Quel détour dans notre manière de raconter la situation laisserait exister les deux courants sans les confondre ?',
    ],
    invitation: 'Au bord du méandre, la carte pourrait changer d’échelle.',
  },
  {
    id: 'cercles', number: 9, name: 'Les Deux Cercles', symbol: 'cercles',
    dynamic: 'Proximité et différenciation',
    subtitle: 'Un espace partagé, deux contours encore vivants.',
    animationDescription: 'Deux cercles se rapprochent, se recouvrent partiellement puis s’éloignent. Leur espace commun change sans effacer leurs contours.',
    voice: 'Nous sommes les Deux Cercles. Quand nous nous rapprochons, un troisième espace apparaît sans qu’un troisième contour soit tracé. Il appartient à notre rencontre. Si nous nous éloignons, il change ou disparaît. Nous restons pourtant deux formes, avec des parties que l’autre ne recouvre pas, même dans la plus grande proximité.',
    paradox: 'Partager peut rendre possible une expérience commune et rendre plus difficile la perception des différences. Garder un contour peut préserver une parole singulière ou laisser l’autre dehors. La bonne distance n’est pas inscrite dans notre dessin. Elle varie selon ce qui se passe, selon les places et selon le moment où l’on regarde.',
    counterpoint: 'Nous parlons volontiers des frontières entre personnes. Qu’en est-il de celles qui organisent notre équipe : métiers, services, horaires, récits ? Un désaccord peut signaler un écart ; un accord très rapide peut aussi laisser une voix sans place. Notre dessin n’explique aucune relation. Il propose de regarder la forme changeante de notre espace commun et ce que nous imaginons devoir y partager.',
    questions: [
      'Dans cette situation, à quels moments nous sentons-nous trop proches, trop loin, ou à une distance difficile à nommer ?',
      'Quelles différences peuvent s’exprimer dans notre collectif, et lesquelles se perdent lorsque nous cherchons à parler d’une seule voix ?',
      'Si l’espace commun n’avait pas besoin de tout contenir, quelle parole distincte pourrait trouver son contour ?',
    ],
    invitation: 'Entre nos contours, une forme provisoire attend peut-être un nom.',
  },
  {
    id: 'fissure', number: 10, name: 'La Fissure', symbol: 'fissure',
    dynamic: 'Fragilité et ouverture',
    subtitle: 'La lumière traverse ; la fragilité demeure.',
    animationDescription: 'Une forme d’argile s’écarte légèrement le long d’une fissure. Une lumière la traverse ; la forme demeure fragile.',
    voice: 'Je suis la Fissure. Un trait traverse la forme et modifie sa manière de tenir. La lumière passe maintenant par cet endroit. Cela ne rend pas la cassure souhaitable. Cela ne répare pas ce qui a cédé. Je suis à la fois une ouverture visible et une fragilité qui continue de compter.',
    paradox: 'On peut vouloir me combler pour retrouver une surface entière. On peut aussi me célébrer trop vite, comme si toute rupture devait révéler une richesse. Entre ces deux regards, quelque chose reste à éprouver : ce qui fait défaut, ce qui tient encore, ce qui apparaît sans avoir été demandé. La lumière ne rembourse pas la perte.',
    counterpoint: 'Un récit professionnel peut, lui aussi, se fissurer lorsqu’un détail ne rentre plus dans l’explication commune. Nous pouvons y sentir une menace pour notre cohérence ou la possibilité d’une question nouvelle. L’image ne transforme pas la souffrance en occasion. Elle invite seulement à regarder comment nous recevons ce qui dérange notre manière de comprendre, sans exiger que cette brèche devienne féconde.',
    questions: [
      'Que ressentons-nous quand une certitude commune se fend : inquiétude, soulagement, colère ou autre chose encore ?',
      'Comment accueillons-nous la parole qui signale une fragilité dans notre récit ou dans notre organisation ?',
      'Quel détail pourrait rester ouvert dans notre compréhension, sans être aussitôt réparé ni transformé en promesse ?',
    ],
    invitation: 'Un peu de lumière passe ; nous pouvons encore sentir le bord fragile.',
  },
  {
    id: 'plume', number: 11, name: 'La Plume', symbol: 'plume',
    dynamic: 'Légèreté et lâcher-prise',
    subtitle: 'Alléger sans laisser tomber.',
    animationDescription: 'Une plume flotte entre plusieurs souffles, hésite et trouve une trajectoire provisoire avant de revenir dans le courant.',
    voice: 'Je suis la Plume. Un souffle me soulève, un autre me fait tourner. Je parais libre parce qu’aucune main ne me retient. Pourtant, je dépends de l’air, des obstacles et de mon poids minuscule. Ma légèreté n’abolit pas les forces : elle les rend autrement visibles dans mon mouvement.',
    paradox: 'Desserrer une prise peut rendre de l’espace et peut donner le sentiment de lâcher quelqu’un. Tenir davantage peut rassurer et alourdir chaque geste. Entre l’emprise et l’abandon, il n’existe pas une position parfaite à trouver une fois pour toutes. Une main ouverte peut rester présente ; une main absente lui ressemble parfois depuis un certain angle.',
    counterpoint: 'Quand l’équipe porte une situation depuis longtemps, que se passe-t-il dans l’air autour d’elle ? Les soupirs, l’humour, les silences ont peut-être une place dans cette atmosphère. Nous pouvons les écouter sans les charger d’une signification cachée. La plume ne nous demande pas de « lâcher prise ». Elle rend sensible la question du poids que chacun porte et de ce qui circule entre nos mains.',
    questions: [
      'Quel poids cette situation nous fait-elle sentir, et à quels moments une sensation de légèreté apparaît-elle malgré tout ?',
      'Comment nos façons de prendre en charge, de nous relayer ou de nous retirer modifient-elles l’atmosphère du collectif ?',
      'Si la présence pouvait prendre une forme moins serrée, à quoi la reconnaîtrions-nous encore ?',
    ],
    invitation: 'La plume hésite ; l’air continue de la rencontrer.',
  },
  {
    id: 'pierres', number: 12, name: 'Les Pierres', symbol: 'pierres',
    dynamic: 'Équilibre et interdépendance',
    subtitle: 'Chaque appui transforme les autres.',
    animationDescription: 'Trois pierres en équilibre se déplacent légèrement. Le changement de l’une entraîne une réorganisation des appuis des deux autres.',
    voice: 'Nous sommes les Pierres. Trois formes différentes reposent les unes sur les autres. La plus large ne porte pas tout ; la plus petite change l’inclinaison de l’ensemble. Quand l’une bouge, les autres rencontrent un nouvel appui. Notre équilibre n’est pas une propriété de chacune, mais une relation qui travaille.',
    paradox: 'La stabilité permet de se reposer. Elle peut aussi coûter beaucoup à la pierre qui compense en silence. Un déplacement inquiète, tout en redistribuant parfois une charge. Ce qui semble déséquilibré depuis une face peut tenir depuis une autre. Et tenir aujourd’hui ne garantit pas que l’assemblage supportera indéfiniment les mêmes pressions.',
    counterpoint: 'Nous cherchons parfois quel élément devrait changer pour que tout aille mieux. L’image propose une autre question : comment nos places font-elles appui les unes sur les autres ? Cette interrogation ne répartit pas les responsabilités à parts égales. Elle laisse apparaître les asymétries, les contraintes institutionnelles et les compensations quotidiennes, sans réduire l’ensemble à une personne qui porterait le problème ou sa solution.',
    questions: [
      'Lorsque nous imaginons un changement, sentons-nous d’abord un soulagement, une menace de chute ou une tension dans le corps ?',
      'Quels appuis donnons-nous et recevons-nous entre collègues, et lesquels demeurent peu reconnus dans notre récit commun ?',
      'Si une seule place se déplaçait légèrement, quels autres appuis deviendraient visibles ou auraient besoin d’être rediscutés ?',
    ],
    invitation: 'L’équilibre respire peut-être dans l’espace entre les pierres.',
  },
];

export function spokenText(archetype: Archetype): string[] {
  return [archetype.voice, archetype.paradox, archetype.counterpoint,
    ...archetype.questions.map((q, i) => `${questionLabels[i]}. ${q}`), archetype.invitation];
}
