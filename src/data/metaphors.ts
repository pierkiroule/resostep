import type { Archetype, ArchetypeId } from './archetypes';
import { seededRandom } from './resonance';
import { clinicalLenses } from './clinicalLenses';
import { clinicalLinks } from './clinicalLinks';
import { emojiExplorations, explorationTags } from './explorationTags';
import type { ExplorationChoice } from './explorationTags';

export const emojiSymbols: Record<ArchetypeId, string> = {
  noeud: '🪢', barque: '⛵', roseau: '🌾', mycelium: '🍄', graine: '🌱', cage: '🕊️',
  phare: '🔦', riviere: '🌊', cercles: '🫧', fissure: '⚡', plume: '🪶', pierres: '🪨',
};

/** Une image qui se déploie, sans personnage, intrigue ou dénouement. */
export const metaphorTexts: Record<ArchetypeId, [string, string, string, string]> = {
  noeud: [
    'Et si cette situation ressemblait à une amarre nouée pendant la tempête ? Le nœud a protégé la barque. Quand le niveau de l’eau change, la même corde peut tirer autrement. Sa solidité reste précieuse ; la distance qu’elle laisse entre la barque et le quai mérite un autre regard.',
    'Et si cette situation ressemblait à une toile réparée au même endroit tant de fois qu’elle en devient rigide ? Chaque couture a rapproché les bords. Ensemble, les reprises laissent moins de jeu. Un fil passé un peu plus loin pourrait rejoindre la déchirure depuis une partie encore souple du tissu.',
    'Et si cette situation ressemblait à un filet dont une maille se resserre ? Tirer sur ce point déplace aussi les mailles voisines. La tension circule jusqu’aux attaches, parfois loin de l’endroit qu’on observe. Élargir le regard au filet entier peut faire apparaître un autre endroit où le lien travaille.',
    'Et si cette situation ressemblait à une couture dont le fil est devenu plus solide que le tissu ? La reprise tient, mais le bord s’effiloche juste à côté. Renforcer encore le même point risque de déplacer la déchirure. Une autre façon de répartir les points pourrait laisser la toile retrouver du mouvement.',
  ],
  barque: [
    'Et si cette situation ressemblait à une barque dont les rames visent des points différents sur la rive ? Les efforts sont réels, mais la coque tourne. Ramer plus fort amplifie parfois le cercle. Nommer les destinations permettrait de voir ce qui rassemble les passagers et ce qui les oriente autrement.',
    'Et si cette situation ressemblait à une barque chargée de paquets dont le poids n’apparaît pas sur le registre ? La coque s’enfonce malgré les efforts des rameurs. Regarder seulement la vitesse ferait oublier le chargement. Certains paquets protègent quelque chose ; d’autres attendent qu’on puisse enfin en parler.',
    'Et si cette situation ressemblait à une barque où chaque rame suit sa propre carte ? Sur l’une, le port désigne un abri ; sur l’autre, le départ d’un voyage. Les cartes ne sont pas fausses pour autant. Leur différence peut rendre visibles les attentes que le mot « arriver » semblait réunir.',
    'Et si cette situation ressemblait à une barque dont une partie du chargement reste sous le plancher ? Les rames avancent, mais la coque répond lourdement. Depuis la rive, on pourrait ne voir qu’un manque d’élan. À bord, les objets transportés et leur répartition racontent une autre part du mouvement.',
  ],
  roseau: [
    'Et si cette situation ressemblait à un roseau observé depuis un abri ? Sa courbe paraît excessive tant que le vent reste invisible. Depuis la berge, le même mouvement devient une réponse au souffle. La tige demeure fragile, mais sa forme ne se comprend plus sans ce qui la traverse.',
    'Et si cette situation ressemblait à deux roseaux séparés par un écran ? L’abri calme le vent d’un côté, mais crée un tourbillon de l’autre. Protéger une tige change aussi ce que reçoit sa voisine. Le paysage entier bouge lorsqu’on déplace un seul de ses appuis.',
    'Et si cette situation ressemblait à une roselière observée à plusieurs heures du jour ? Les mêmes tiges paraissent souples, agitées ou immobiles selon le vent. Une photographie isolée ne montre pas ces passages. La courbe d’un roseau garde aussi la trace du souffle et de l’endroit où il pousse.',
    'Et si cette situation ressemblait à un abri déplacé entre deux touffes de roseaux ? Le calme gagné devant l’écran peut devenir une rafale sur ses bords. Aucun roseau n’a changé de nature ; les courants se répartissent autrement. L’effet de la protection dépasse la seule tige qu’elle cherchait à couvrir.',
  ],
  mycelium: [
    'Et si cette situation ressemblait à un réseau de mycélium sous les feuilles ? À la surface, les arbres paraissent séparés. Sous la terre, des fils discrets font circuler l’eau et contournent les coupures. Une carte limitée aux troncs manquerait ces échanges. Certains liens soutiennent sans devenir visibles à chaque regard.',
    'Et si cette situation ressemblait à un chemin réparé au-dessus d’une terre encore coupée ? Les pas peuvent passer, alors que les fils du mycélium ne se rejoignent pas encore. Le passage paraît continu depuis la surface. En dessous, les échanges cherchent toujours leurs trajets et leur propre rythme.',
    'Et si cette situation ressemblait à un sous-bois où seuls les arbres portent un nom sur la carte ? Le mycélium, lui, relie aussi des racines éloignées. Une petite zone humide peut nourrir plus loin que ses limites visibles. Ce qui compte dans le réseau ne se mesure pas seulement à la taille des troncs.',
    'Et si cette situation ressemblait à deux mottes de terre rapprochées après une coupure du mycélium ? Leurs bords se touchent déjà. Les fils, eux, doivent encore trouver des contacts pour que les échanges circulent. La proximité sur une carte et la continuité d’un lien n’avancent pas forcément au même rythme.',
  ],
  graine: [
    'Et si cette situation ressemblait à une graine qu’on déterre pour vérifier sa pousse ? Chaque regard retrouve la graine, mais déplace aussi la terre et les premières racines. L’attente a besoin de repères. Ceux-ci pourraient raconter la lumière, l’eau et les soins autour de la pousse, sans devoir toujours la montrer.',
    'Et si cette situation ressemblait à deux graines du même sachet, semées au soleil et dans l’ombre ? Le calendrier leur donne le même âge, mais leurs journées ne se ressemblent pas. Comparer seulement leur hauteur laisserait hors champ la chaleur, l’humidité et la place disponible pour leurs racines.',
    'Et si cette situation ressemblait à une graine dont le premier travail se fait sous terre ? Avant la tige visible, une racine cherche sa direction entre les grains. Un sol apparemment immobile peut contenir ce mouvement. Les traces d’eau et de lumière racontent aussi les conditions de la pousse, sans en promettre l’issue.',
    'Et si cette situation ressemblait à des graines semées dans des pots identiques ? L’un garde l’eau, un autre la laisse filer, un troisième offre peu de place aux racines. Mesurer seulement les pousses ferait paraître semblables des conditions différentes. Le même calendrier ne suffit pas à décrire leur chemin.',
  ],
  cage: [
    'Et si cette situation ressemblait à une cage ouverte dont la première branche reste éloignée ? La porte laisse un passage, mais le vide n’offre aucun endroit où reprendre appui. Depuis l’extérieur, la distance paraît petite. Depuis le perchoir, elle peut occuper tout le paysage du départ.',
    'Et si cette situation ressemblait à un perchoir placé près d’une porte ouverte ? Il peut sembler retenir l’oiseau. Il lui permet aussi de se retourner, de mesurer une distance et de préparer un élan. Garder un appui et rendre un déplacement possible peuvent appartenir au même mouvement.',
    'Et si cette situation ressemblait à une porte de cage ouverte sur un seuil sans rebord ? L’espace est libre, mais aucun point proche ne permet d’essayer un déplacement puis de revenir. La possibilité existe dans le dessin de la porte. L’appui du premier mouvement reste encore à trouver dans le paysage.',
    'Et si cette situation ressemblait à un perchoir que l’on pourrait déplacer vers l’ouverture ? Le même bois accompagne alors plusieurs distances. Il garde une familiarité tout en changeant de place. Ce qui soutient à l’intérieur peut aussi aider à approcher le dehors, sans fixer à l’avance le moment du passage.',
  ],
  phare: [
    'Et si cette situation ressemblait à un phare tourné vers un seul rocher ? Le relief dangereux devient très précis, tandis que le reste de la rive disparaît dans l’ombre. Déplacer légèrement le faisceau ne supprime pas le rocher. Cela rend aussi visibles un quai, une maison ou un autre passage.',
    'Et si cette situation ressemblait à un faisceau puissant dans la brume ? Plus la lumière augmente, plus elle revient vers sa source en un mur blanc. Une lueur plus basse ou un son de cloche peuvent offrir d’autres repères. Tout rendre plus intense n’aide pas toujours à mieux percevoir.',
    'Et si cette situation ressemblait à une carte éclairée par un faisceau étroit ? Le point lumineux devient très détaillé ; les chemins qui le relient au reste s’effacent. Agrandir doucement le cercle de lumière ne retire rien à ce point. Cela lui rend des voisins, des distances et plusieurs voies d’accès.',
    'Et si cette situation ressemblait à une vitre couverte de reflets quand on braque une lampe dessus ? La lumière destinée à mieux voir revient vers le regard. À une autre inclinaison, un contour devient perceptible. La force du faisceau n’est qu’une des conditions de ce qui peut être aperçu.',
  ],
  riviere: [
    'Et si cette situation ressemblait à un remous où se rencontrent deux courants ? Déplacer une pierre change le tourbillon, qui peut se reformer un peu plus loin. En remontant la berge, les arrivées d’eau deviennent visibles. Le mouvement se comprend alors avec ce qui le précède et ce qui lui répond.',
    'Et si cette situation ressemblait à une rivière transformée en canal tout droit ? L’eau rejoint vite l’aval, mais les petites anses ont disparu. Il reste moins d’endroits pour accoster ou reprendre souffle. Un trajet peut gagner en vitesse tout en perdant les appuis qui permettent de le quitter.',
    'Et si cette situation ressemblait à une confluence dont on ne regarderait que l’écume ? Les vagues semblent naître au même endroit, alors que chaque bras apporte son débit et ses détours. Suivre l’eau un peu en amont déplie la rencontre. Ce qui revient ici peut être lié à plusieurs mouvements ailleurs.',
    'Et si cette situation ressemblait à un courant entre des berges trop lisses ? Tout favorise l’avancée, mais rien n’accroche doucement la coque pour permettre un arrêt. Une rive accessible fait aussi partie de la traversée. Le trajet ne se résume pas à la distance parcourue ou au temps gagné.',
  ],
  cercles: [
    'Et si cette situation ressemblait à deux cercles qui se recouvrent en partie ? Leurs limites protègent des espaces différents. Les effacer ne crée pas forcément une rencontre. La petite zone commune peut accueillir une première question, sans demander que tout ce qui reste de chaque côté devienne identique.',
    'Et si cette situation ressemblait à deux cartes d’un même lieu ? Les traits se ressemblent, mais les légendes donnent au seuil des sens différents : abri sur une feuille, obstacle sur l’autre. Les superposer brouille les mots. Les regarder côte à côte laisse apparaître ce que chaque place permet de voir.',
    'Et si cette situation ressemblait à deux cercles reliés par une petite passerelle ? Leur rencontre ne dépend pas de la disparition de leurs contours. Une ouverture permet de circuler, tandis que chaque espace garde des repères. Le lien peut prendre forme dans ce qui se partage, sans demander que tout se confonde.',
    'Et si cette situation ressemblait à deux cartes colorées du même quartier ? Une couleur indique les lieux familiers sur l’une, les lieux difficiles à atteindre sur l’autre. Le tracé commun ne donne donc pas le même paysage. Lire les légendes permet de découvrir ce que chaque carte rend sensible.',
  ],
  fissure: [
    'Et si cette situation ressemblait à une fissure qui revient sous l’enduit ? La surface est réparée, puis la trace réapparaît. Sur l’autre face du mur, de l’eau continue d’arriver. Faire le tour ne nie pas la fragilité du mur ; cela élargit ce que la fissure peut nous apprendre.',
    'Et si cette situation ressemblait à un bol fendu maintenu par un tissu ? La bande a permis de garder les morceaux ensemble. Remplir le bol lui demande maintenant autre chose. La première réparation conserve son histoire, sans suffire à dire ce que l’assemblage peut contenir aujourd’hui.',
    'Et si cette situation ressemblait à une fissure qui s’ouvre lorsque le mur chauffe ? La trace est ici, mais son mouvement dépend aussi du soleil, de l’ombre et des attaches du bâtiment. Regarder seulement la ligne ne montre pas toutes les forces. La surface indique un endroit où élargir l’observation.',
    'Et si cette situation ressemblait à un bol dont les morceaux sont tenus pour être transportés ? Cet assemblage protège les bords pendant le trajet. Lui demander ensuite de contenir de l’eau change l’épreuve. La valeur de ce qui a tenu peut rester entière, tandis que la question de son usage se renouvelle.',
  ],
  plume: [
    'Et si cette situation ressemblait à une plume au milieu d’une table où l’on parle ? Chaque voix ajoute un souffle qui la déplace. Le courant sous la porte continue aussi pendant les silences. Le mouvement de la plume appartient à la fois à la pièce, aux échanges et aux places autour d’elle.',
    'Et si cette situation ressemblait à une plume glissée dans un registre toujours ouvert à la même page ? Une phrase s’y recopie jusqu’à devenir le paysage entier. Dans la marge, un détail récent raconte pourtant autre chose. Changer de page pourrait donner du poids à ce qui n’entrait pas dans la formule.',
    'Et si cette situation ressemblait à une plume entre plusieurs souffles ? Le mouvement vient du courant de la pièce, mais aussi de chaque parole prononcée près d’elle. Même une tentative pour la stabiliser ajoute de l’air. Observer la plume peut alors inclure la place depuis laquelle on cherche à l’aider.',
    'Et si cette situation ressemblait à une plume qui repasse toujours sur les mêmes mots ? L’encre épaissit la formule jusqu’à masquer les petits détails autour. Une annotation récente pourrait modifier sa lecture sans effacer tout le texte. La marge garde une place pour ce qui n’a pas encore été formulé.',
  ],
  pierres: [
    'Et si cette situation ressemblait à des pierres empilées qu’une main soutient discrètement ? De loin, l’ensemble paraît tenir seul. De près, un poignet tremble et une petite cale porte beaucoup de poids. Regarder les appuis change le récit de l’équilibre, sans décider qu’il faut retirer la main.',
    'Et si cette situation ressemblait à un empilement qu’on reconstruit avec des pierres émoussées ? Le vieux dessin conserve une forme connue, mais les surfaces ne se touchent plus de la même manière. Les mêmes pierres pourraient trouver d’autres contacts. La continuité ne prendrait alors pas exactement la forme d’avant.',
    'Et si cette situation ressemblait à une pierre de passage qui paraît immobile ? Sous elle, une cale prend du poids à chaque pas, et une main corrige les petits écarts. La stabilité vue du dessus contient plusieurs efforts. Les rendre visibles change la façon de décrire ce qui tient et ce que cela coûte.',
    'Et si cette situation ressemblait à des pierres anciennes disposées sur un sol qui a bougé ? Chaque bloc est reconnaissable, mais les points de contact ont changé. Retrouver le dessin d’avant demande parfois une force qui n’était pas nécessaire hier. Une autre forme pourrait préserver le passage avec des appuis différents.',
  ],
};

export interface MetaphorInspiration {
  id: string;
  lensKey: string;
  archetype: Archetype;
  exploration: ExplorationChoice;
  title: string;
  metaphor: string;
  clinicalLink: string;
  questions: [string, string];
}

export function makeMetaphor(archetype: Archetype, recent: string[], seed: number, exploration: ExplorationChoice = 'open'): MetaphorInspiration {
  if (!archetype || Array.isArray(archetype) || !Object.hasOwn(metaphorTexts, archetype.id)) {
    throw new Error('Choisissez un seul émoji.');
  }
  if (!Number.isFinite(seed)) throw new Error('La graine du tirage doit être un nombre fini.');
  const option = exploration === 'open' ? null : emojiExplorations[archetype.id].find(item => item.tag === exploration);
  if (exploration !== 'open' && !option) throw new Error('Choisissez un angle proposé pour cet émoji.');
  const texts = metaphorTexts[archetype.id];
  const candidates = texts.map((_, index) => index).filter(index => !option || index % 2 === option.angle);
  const keys = candidates.map(index => `metaphore:${archetype.id}:${exploration}:${index}`);
  const history = recent.filter(key => keys.includes(key));
  const usedCount = history.length % keys.length;
  const used = new Set(usedCount ? history.slice(-usedCount) : []);
  const available = keys.filter(key => !used.has(key) && key !== history.at(-1));
  const random = seededRandom(seed);
  const lensKey = available[Math.floor(random() * available.length)];
  const index = candidates[keys.indexOf(lensKey)];
  const link = clinicalLinks[archetype.id][index % 2];
  const focus = link.focus ?? clinicalLenses[archetype.id];
  return {
    id: `${seed}-${lensKey}`, lensKey, archetype, exploration,
    title: focus.title,
    metaphor: texts[index] + (option ? ` ${option.extension}` : ''),
    clinicalLink: link.practice + (option ? ` ${explorationTags[option.tag].practice}` : ''),
    questions: option ? [explorationTags[option.tag].question, option.question] : [...focus.questions],
  };
}
