import type { Archetype, ArchetypeId } from './archetypes';
import { makeInspiration, seededRandom } from './resonance';

export const emojiSymbols: Record<ArchetypeId, string> = {
  noeud: '🪢', barque: '⛵', roseau: '🌾', mycelium: '🍄', graine: '🌱', cage: '🕊️',
  phare: '🔦', riviere: '🌊', cercles: '🫧', fissure: '⚡', plume: '🪶', pierres: '🪨',
};

// Chaque motif intervient dans le même village et transforme la même recherche de passage.
const motifs: Record<ArchetypeId, { name: string; encounter: string; shift: string; question: string }> = {
  noeud: { name: 'le nœud', encounter: 'Une corde nouée retient la passerelle. Plus les habitants tirent ensemble, plus le nœud se serre.', shift: 'Une main cesse de tirer : entre les fils, une petite boucle redevient accessible.', question: 'Quels efforts se renforcent entre nous au point de resserrer ce que nous cherchons à ouvrir ?' },
  barque: { name: 'la barque', encounter: 'Une barque attend au bord. Ses passagers rament avec ardeur, mais chacun vise un autre point de la rive.', shift: 'Les rames se reposent un instant. Depuis la berge, quelqu’un montre un débarcadère que personne à bord ne voyait.', question: 'Quelles destinations différentes orientent nos efforts dans cette situation ?' },
  roseau: { name: 'le roseau', encounter: 'Un roseau s’incline au bord du passage. Les habitants le croient fragile parce qu’il ne reste jamais droit.', shift: 'En suivant sa courbe, ils découvrent la direction d’un vent qu’ils ne sentaient pas depuis leur abri.', question: 'Quel mouvement prenons-nous pour une faiblesse alors qu’il pourrait nous renseigner sur le contexte ?' },
  mycelium: { name: 'le mycélium', encounter: 'Sous les feuilles, un mycélium relie les arbres du chemin. Rien, à la surface, ne montre ces échanges.', shift: 'En écartant doucement les feuilles, les habitants repèrent des liens qui passent autour de l’obstacle.', question: 'Quels liens discrets soutiennent déjà cette situation sans apparaître dans notre récit ?' },
  graine: { name: 'la graine', encounter: 'Près du passage, une graine reste invisible sous terre. Chaque matin, quelqu’un veut la déterrer pour vérifier si elle avance.', shift: 'Une jardinière laisse un repère sur le sol. On peut désormais veiller sur cet endroit sans déplacer la terre.', question: 'Comment notre besoin de voir un résultat modifie-t-il les conditions de ce qui se prépare ?' },
  cage: { name: 'la cage ouverte', encounter: 'Une cage ouverte est posée près du chemin. L’oiseau reste sur son perchoir, malgré les encouragements à sortir.', shift: 'Un enfant rapproche une branche de la porte. L’ouverture possède maintenant un premier appui, mais l’oiseau choisira son moment.', question: 'Quel premier appui manque peut-être derrière une possibilité que nous disons déjà ouverte ?' },
  phare: { name: 'le phare', encounter: 'Le phare du village éclaire toujours le même rocher. Les habitants finissent par ne plus raconter que ce rocher.', shift: 'La gardienne tourne légèrement la lampe. Un petit quai apparaît au bord du faisceau ; le rocher est toujours là.', question: 'Qu’est-ce qui reste hors de notre champ lorsque nous éclairons toujours la même difficulté ?' },
  riviere: { name: 'la rivière', encounter: 'La rivière longe le chemin. On voudrait la rendre droite, mais chaque pierre déplacée crée un remous ailleurs.', shift: 'Les habitants remontent quelques pas vers la source et découvrent deux courants qui se rencontrent avant l’obstacle.', question: 'Quel enchaînement en amont devient invisible quand nous nous concentrons sur le seul remous ?' },
  cercles: { name: 'les deux cercles', encounter: 'Deux cercles sont tracés dans le sable : celui du village et celui des voyageurs. Chacun garde ses provisions de son côté.', shift: 'La pluie efface un peu les bords. Dans leur espace commun, on pose une première planche sans fusionner les deux cercles.', question: 'Quel espace commun pourrions-nous imaginer sans demander à chacun d’abandonner sa place ?' },
  fissure: { name: 'la fissure', encounter: 'Une fissure traverse le mur qui borde le chemin. Les habitants passent leur temps à la recouvrir, mais l’enduit tombe.', shift: 'En regardant à travers la fente, ils aperçoivent un jardin dont ils avaient oublié l’entrée.', question: 'Qu’est-ce qui pourrait apparaître si nous regardions aussi à travers la rupture, sans nier ce qu’elle fragilise ?' },
  plume: { name: 'la plume', encounter: 'Une plume repose sur le chemin. Chaque voix qui dit où aller la déplace, et chacun accuse le souffle du voisin.', shift: 'Les voix baissent un instant. La plume révèle alors un courant d’air qui passe sous la porte fermée.', question: 'Quels effets de nos propres échanges n’entendons-nous plus dans cette situation ?' },
  pierres: { name: 'les pierres', encounter: 'Trois pierres soutiennent une planche du passage. Une main les retient depuis si longtemps qu’on la confond avec le paysage.', shift: 'Les habitants regardent enfin cette main. Ils cherchent un appui supplémentaire avant de lui demander de se retirer.', question: 'Quel soutien devenu invisible risquons-nous d’oublier lorsque nous parlons d’autonomie ?' },
};

export interface TaleInspiration {
  id: string;
  lensKey: string;
  archetypes: Archetype[];
  title: string;
  alternativeTitle: string;
  paragraphs: string[];
  sideStep: string;
  questions: string[];
  invitation: string;
}

export function makeTale(selected: Archetype[], recent: string[], seed: number): TaleInspiration {
  if (selected.length < 1 || selected.length > 3 || new Set(selected.map(item => item.id)).size !== selected.length || selected.some(item => !motifs[item.id])) {
    throw new Error('Choisissez de 1 à 3 émojis différents.');
  }
  const source = makeInspiration(selected[0], recent, seed);
  const random = seededRandom(seed);
  const images = selected.map(item => motifs[item.id]);
  const names = images.map(item => item.name).join(', ');
  const openings = [
    'Dans un village au bord d’un fleuve, les habitants cherchent comment rejoindre l’autre rive. Leur ancien passage ne ressemble plus au dessin qu’ils en avaient gardé.',
    'Un soir de brume, des voyageurs arrivent dans un village au bord d’un fleuve. Ils demandent le bon chemin. Plusieurs habitants répondent à la fois, en montrant des directions différentes.',
    'Après la pluie, les habitants d’un village au bord d’un fleuve veulent rouvrir leur passage. Ils ont apporté leur ancien plan, mais le paysage a changé pendant la nuit.',
    'Au bord d’un fleuve, un village prépare un départ. Tout le monde pense avoir compris ce qui manque au passage, mais personne n’a encore fait le tour du paysage.',
  ];
  const endings = [
    'Le passage n’est pas achevé. Pourtant, la carte a changé : on y dessine désormais aussi les appuis, les attentes et les places de ceux qui regardent. Qui racontera la suite depuis l’autre rive ?',
    'Personne ne déclare le chemin trouvé. On pose le plan sur le sol et l’on invite la personne restée en retrait à y ajouter ce qu’elle voyait depuis sa place. Que dessine-t-elle ?',
    'Le soir venu, les habitants laissent une place vide sur leur carte. Elle attend le récit de quelqu’un qui n’a pas encore parlé. Quelle rencontre pourrait déplacer leur prochain geste ?',
    'Les habitants ne savent pas encore comment traverser. Ils savent seulement que le passage ne se raconte plus depuis un seul endroit. Où commence maintenant leur histoire ?',
  ];
  // L’historique du premier motif fournit huit variantes avant de recommencer.
  const variant = Number(source.lensKey.split('-').at(-1));
  const frame = variant % openings.length;
  const actions = images.map((image, index) => `${index === 0 ? '' : 'Plus loin dans ce même paysage, '}${index === 0 ? image.encounter : image.encounter[0].toLocaleLowerCase('fr') + image.encounter.slice(1)} ${image.shift}`);
  const question = images.length === 1 ? images[0].question : `Si ${names} appartenaient au même paysage, comment le mouvement de l’un changerait-il la place des autres dans notre récit de cette situation ?`;
  return {
    id: `${seed}-${selected.map(item => item.id).join('-')}-${variant}`, lensKey: source.lensKey, archetypes: [...selected],
    title: `${['Le passage oublié', 'La carte inachevée', 'Le village après la pluie', 'L’autre rive'][frame]} : ${names}`,
    alternativeTitle: `${['Ce que le plan ne disait pas', 'La place de celui qui regarde', 'Un chemin qui attend son histoire', 'Avant de traverser'][variant >= 4 ? (frame + 1) % 4 : frame]} — ${names}`,
    paragraphs: [openings[frame], ...actions, endings[(frame + (variant >= 4 ? 1 : 0)) % endings.length]],
    sideStep: `Et si nous racontions la situation comme un paysage de relations plutôt que depuis la seule difficulté qui attire notre regard ? ${images.length > 1 ? 'Les images choisies se rencontrent dans un même conte : aucune ne reçoit un rôle fixé à l’avance.' : 'L’image choisie ouvre une hypothèse que l’équipe peut prolonger, déplacer ou écarter.'}`,
    questions: [question, images[Math.floor(random() * images.length)].question],
    invitation: 'Pour prolonger le conte : changez la place du narrateur, faites entrer une voix absente et laissez la fin ouverte. Qu’est-ce que cela déplace dans notre regard clinique ?',
  };
}
