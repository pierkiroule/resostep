import type { ArchetypeId } from './archetypes';

export type ExplorationTagId = 'emotions' | 'liens' | 'regards' | 'rythme' | 'appuis' | 'relais';
export type ExplorationChoice = ExplorationTagId | 'open';
export const explorationTags: Record<ExplorationTagId, { label: string; question: string; practice: string }> = {
  emotions: { label: 'Émotions', question: 'Que nous fait vivre cette situation ?', practice: 'Cet angle invite à accueillir les ressentis de l’équipe.' },
  liens: { label: 'Liens', question: 'Comment les réponses de chacun s’enchaînent-elles ?', practice: 'Cet angle invite à observer les échanges entre le jeune, ses proches et les professionnels.' },
  regards: { label: 'Regards', question: 'Quel point de vue connaissons-nous encore peu ?', practice: 'Cet angle fait place à plusieurs façons de comprendre la situation.' },
  rythme: { label: 'Rythme', question: 'Quel rythme attendons-nous dans cette situation ?', practice: 'Cet angle interroge les attentes et les temps de chacun.' },
  appuis: { label: 'Appuis', question: 'Sur qui repose le soutien au quotidien ?', practice: 'Cet angle rend visibles les soutiens du jeune et de son entourage.' },
  relais: { label: 'Relais', question: 'Comment ce changement est-il vécu par chacun ?', practice: 'Cet angle porte sur les transitions et la continuité des liens.' },
};
export const explorationLabel = (choice: ExplorationChoice) => choice === 'open' ? 'Ouvert' : explorationTags[choice].label;

interface EmojiExploration {
  tag: ExplorationTagId;
  angle: 0 | 1;
  extension: string;
  question: string;
}
const option = (tag: ExplorationTagId, angle: 0 | 1, extension: string, question: string): EmojiExploration => ({tag, angle, extension, question});

/** Trois pistes par image : des invitations à explorer, sans classer la situation ni le jeune. */
export const emojiExplorations: Record<ArchetypeId, [EmojiExploration, EmojiExploration, EmojiExploration]> = {
  noeud: [
    option('liens', 0, 'Chaque traction change ce que reçoit l’autre bout de la corde ; le nœud relie aussi les gestes entre eux.', 'Quand nous insistons, comment les autres répondent-ils ?'),
    option('emotions', 0, 'La peur de perdre l’attache peut faire serrer davantage, même lorsque la corde tient encore.', 'Quelle inquiétude nous pousse à serrer le lien ?'),
    option('appuis', 0, 'Avant de desserrer, regarder ce que l’attache soutient permet aussi de reconnaître le poids qu’elle porte.', 'Qu’est-ce que ce lien permet encore de tenir ?'),
  ],
  barque: [
    option('liens', 0, 'Le mouvement d’une rame appelle une réponse de l’autre ; l’écart se construit aussi entre les gestes.', 'Comment nos efforts se répondent-ils autour du jeune ?'),
    option('regards', 0, 'Depuis chaque siège, la rive ne se dessine pas tout à fait de la même façon.', 'Qu’est-ce qu’arriver voudrait dire pour chacun ?'),
    option('relais', 1, 'Au prochain quai, les paquets gardent leur poids même si les mains qui les accueillent changent.', 'Que savons-nous de ce que la famille porte pendant le relais ?'),
  ],
  roseau: [
    option('emotions', 0, 'La courbe peut inquiéter le regard avant qu’il ne sente le vent auquel elle répond.', 'Que ressentons-nous face aux mouvements de ce jeune ?'),
    option('regards', 0, 'Passer de l’abri à la berge transforme le paysage sans changer la tige observée.', 'Que voit-on de ce jeune dans un autre lieu ?'),
    option('appuis', 1, 'Un écran protège, mais ses bords redistribuent le souffle vers les autres tiges.', 'Qui reçoit davantage de poids depuis cet aménagement ?'),
  ],
  mycelium: [
    option('liens', 0, 'Les fils ne travaillent pas séparément : une coupure ou une arrivée d’eau peut modifier plusieurs échanges.', 'Quels liens se répondent autour du jeune ?'),
    option('appuis', 0, 'La plus petite zone humide peut nourrir loin de ce que laisse voir la surface.', 'Quel soutien discret compte pour ce jeune ?'),
    option('relais', 1, 'Deux bords rapprochés ne rétablissent pas à eux seuls les échanges qui circulaient entre les fils.', 'Qui fait le lien pendant cette transition ?'),
  ],
  graine: [
    option('rythme', 1, 'Les racines rencontrent leurs propres distances ; le calendrier commun n’en mesure pas tous les détours.', 'Quel rythme serait possible dans les conditions actuelles ?'),
    option('emotions', 0, 'L’absence de pousse visible peut rendre l’attente plus lourde et multiplier les gestes de vérification.', 'Qu’est-ce que cette attente nous fait éprouver ?'),
    option('appuis', 1, 'La lumière, l’humidité et la place laissée aux racines font partie de la pousse avant qu’elle ne soit visible.', 'Quelles conditions soutiennent déjà le changement ?'),
  ],
  cage: [
    option('appuis', 1, 'Le perchoir peut soutenir un départ sans en choisir la direction ni la date.', 'Quel appui aide le jeune à essayer ?'),
    option('rythme', 0, 'Une porte ouverte ne donne pas à chaque premier mouvement le même temps pour se préparer.', 'Qui attend que le premier pas ait lieu ?'),
    option('relais', 0, 'Le vide entre deux appuis devient particulièrement présent au moment de quitter celui qui est familier.', 'Quel repère le jeune retrouvera-t-il après ce changement ?'),
  ],
  phare: [
    option('regards', 0, 'Élargir le faisceau rend au rocher ses voisins et les chemins qui le relient à la rive.', 'Quelle scène de vie reste hors de notre regard ?'),
    option('emotions', 0, 'L’inquiétude peut fixer la lumière sur un seul relief et rendre difficile le moindre déplacement du faisceau.', 'Quelle peur retient notre attention au même endroit ?'),
    option('liens', 1, 'Un repère ne se transmet pas seulement par sa force : il compte aussi un endroit depuis lequel le percevoir.', 'Comment nos messages sont-ils reçus par le jeune ?'),
  ],
  riviere: [
    option('liens', 0, 'Chaque courant modifie l’autre à leur rencontre ; le tourbillon ne vient pas d’une eau isolée.', 'Que fait chacun après la réponse de l’autre ?'),
    option('rythme', 1, 'La vitesse du courant et le temps nécessaire pour prendre pied sur la rive ne se mesurent pas ensemble.', 'Quel temps laissons-nous pour trouver des repères ?'),
    option('regards', 0, 'Depuis le remous, l’amont reste caché ; depuis la source, les mêmes vagues racontent un autre trajet.', 'Que découvrons-nous en reprenant le début de l’épisode ?'),
  ],
  cercles: [
    option('regards', 1, 'Une légende différente peut faire du même seuil un abri ou un obstacle.', 'Comment un proche décrirait-il cette même scène ?'),
    option('liens', 0, 'L’espace commun peut rester petit tout en permettant des échanges entre les deux côtés.', 'Quelle question pouvons-nous partager malgré nos différences ?'),
    option('emotions', 0, 'Une limite peut rassurer d’un côté et faire éprouver une distance de l’autre.', 'Que ressentons-nous quand les points de vue divergent ?'),
  ],
  fissure: [
    option('relais', 1, 'Ce qui a contenu les morceaux pendant un trajet ne répond pas forcément à ce qui est demandé à l’arrivée.', 'Qu’attend-on de différent depuis ce relais ?'),
    option('emotions', 0, 'Voir revenir la ligne peut épuiser les gestes de réparation avant que l’autre face du mur ait été regardée.', 'Que nous fait vivre la répétition de cette difficulté ?'),
    option('appuis', 1, 'L’assemblage peut tenir grâce à une bande presque oubliée ; ses limites ne disent pas qu’elle n’a servi à rien.', 'Quel appui reste utile malgré ses limites ?'),
  ],
  plume: [
    option('emotions', 0, 'Un souffle partagé peut rapprocher ou écarter la plume ; les émotions de la pièce participent aussi au mouvement.', 'Quelle émotion circule dans l’équipe autour de cette situation ?'),
    option('regards', 1, 'La marge garde une place pour une observation qui n’entre pas encore dans les mots habituels.', 'Quel détail récent nuancerait notre manière de décrire le jeune ?'),
    option('liens', 0, 'Une parole change l’air reçu de l’autre côté de la table, même lorsqu’elle voulait seulement calmer le mouvement.', 'Comment nos paroles modifient-elles la rencontre ?'),
  ],
  pierres: [
    option('appuis', 0, 'Une cale ou une main peu visible peut porter une grande part de ce qui paraît stable.', 'Quel soutien n’avons-nous pas encore assez regardé ?'),
    option('emotions', 0, 'Le tremblement du poignet appartient à l’équilibre : ce qui tient peut aussi fatiguer ceux qui soutiennent.', 'Qui se sent fatigué de devoir tenir ?'),
    option('relais', 1, 'Des contacts différents demandent parfois une autre répartition du poids, même si les pierres restent les mêmes.', 'Quels appuis faut-il retrouver après ce changement ?'),
  ],
};
