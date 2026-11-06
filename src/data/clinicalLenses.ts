import type { ArchetypeId } from './archetypes';

export interface ClinicalLens {
  title: string;
  opening: string;
  questions: [string, string];
  returnToSituation: string;
  echoes: [string, string];
  returns: [string, string];
}

/** Questions d’intervision adressées aux professionnels, jamais des conclusions sur l’enfant. */
export const clinicalLenses: Record<ArchetypeId, ClinicalLens> = {
  noeud: {
    title: 'Ce que nos efforts resserrent ou soutiennent',
    opening: 'Et si nous regardions aussi les tensions auxquelles nous participons ? Un cadre, un lien ou un accord peut protéger et serrer à la fois. L’image invite à distinguer les gestes de chacun, sans décider qui serait « le nœud ».',
    questions: ['Quand nous craignons de perdre le lien avec ce jeune ou ses proches, que sommes-nous tentés d’intensifier ?', 'Comment nos interventions se répondent-elles entre professionnels, famille et lieux de vie : où donnent-elles du jeu, où ajoutent-elles de la tension ?'],
    returnToSituation: 'Revenons à un échange récent : quel geste de notre équipe voyons-nous autrement, et quelle autre lecture reste possible ?',
    echoes: ['En cherchant un appui, elle rencontre une corde nouée à deux piquets. Elle tire sur un brin ; l’autre piquet penche. Elle essaie alors de sentir ce que chaque extrémité reçoit, avant de choisir où poser les mains.', 'Une passante lui confie une corde réparée. Un nœud la raccourcit, mais empêche aussi deux brins usés de se séparer. La gardienne la garde dans ses mains, partagée entre le besoin de longueur et celui de tenir.'],
    returns: ['Lorsqu’elle retrouve l’amarre, elle remarque la distance entre les mains autant que la forme du nœud.', 'De retour devant la toile, elle regarde les endroits encore souples autour des reprises.'],
  },
  barque: {
    title: 'Les caps que nous croyons partager',
    opening: 'Et si notre impression de tourner en rond contenait plusieurs destinations encore peu dites ? Le jeune, ses proches et les professionnels peuvent tenir au même voyage sans attendre la même chose de la prochaine étape.',
    questions: ['Quelle urgence ou quelle crainte nous donne envie de ramer plus fort dans cette situation ?', 'Quand nous parlons d’« avancer », qu’espérons-nous chacun, et que savons-nous de ce qu’en attendent le jeune et ses proches ?'],
    returnToSituation: 'Choisissons un mot de notre projet — avancer, aller mieux, revenir — et essayons d’en entendre plusieurs sens, sans les départager immédiatement.',
    echoes: ['Au bord de l’eau, une barque pivote autour de son amarre. Sa coque semble hésiter, mais les reflets montrent deux courants contraires. La gardienne la suit du regard assez longtemps pour distinguer son mouvement de celui de l’eau.', 'Une rame est posée sur le quai. Une voyageuse attend qu’on lui dise où accoster ; depuis la berge, on attend qu’elle parte. La gardienne entend deux attentes qui, jusque-là, s’étaient prises pour la même hésitation.'],
    returns: ['Dans la barque, elle écoute à nouveau le bruit des deux rames avant de nommer le trajet.', 'Devant les paquets, une question lui vient qui ne concerne plus seulement leur poids.'],
  },
  roseau: {
    title: 'Ce que le contexte fait éprouver à chacun',
    opening: 'Et si nous prenions le temps de décrire les conditions dans lesquelles un mouvement apparaît ? Ce qui nous semble souplesse, agitation ou retrait peut changer selon le lieu, le moment et la place depuis laquelle nous regardons.',
    questions: ['Qu’est-ce que cette situation nous fait éprouver : rigidité, débordement, besoin de protéger, envie de nous éloigner ?', 'À quels moments et dans quels lieux le jeune et ceux qui l’entourent rencontrent-ils des conditions différentes de celles que nous observons ici ?'],
    returnToSituation: 'Racontons une même scène depuis deux lieux du quotidien. Qu’est-ce que le changement de point de vue rend perceptible ?',
    echoes: ['À la lisière du chemin, un roseau ploie derrière une haie. Elle le voit se redresser lorsqu’elle déplace son panier, qui faisait écran au vent. Un objet aussi ordinaire avait changé ce que la tige recevait.', 'Un roseau garde une courbe alors que le vent est tombé. À côté, une tige plus courte ne bouge presque pas. La gardienne ne sait pas quelle histoire de souffle leurs formes conservent.'],
    returns: ['En revenant près du tuteur, elle prend le temps de sentir le vent sur sa propre joue.', 'Le panneau lui apparaît maintenant comme un morceau mobile du paysage des deux tiges.'],
  },
  mycelium: {
    title: 'Les liens discrets et les continuités fragiles',
    opening: 'Et si certains appuis échappaient à notre carte des soins ? Une présence ordinaire, un trajet, un lien avec l’école ou un relais informel peuvent compter sans être nommés dans nos transmissions. Leur discrétion ne dit pas leur importance.',
    questions: ['Que ressentons-nous quand une part de ce qui soutient la situation se construit hors de notre regard ou de notre service ?', 'Quels liens le jeune ou ses proches pourraient-ils nommer autrement que nous, et lesquels risquent de se perdre entre deux relais ?'],
    returnToSituation: 'Ajoutons à notre récit un appui extérieur aux soins ou une continuité dont nous savons peu de choses. Qui pourrait nous en parler ?',
    echoes: ['Sous une dalle soulevée, des filaments de mycélium rejoignent deux racines. L’une paraît isolée depuis le chemin. La gardienne rabat la feuille qui les protège : rendre ce lien visible trop longtemps risquerait aussi de le dessécher.', 'Un voisin lui montre une zone humide au pied d’un arbre. Le mycélium y reçoit de l’eau par un détour sous les pierres. Ce trajet n’apparaît sur aucun plan du passage ; quelqu’un en connaissait pourtant la présence.'],
    returns: ['La carte entre ses mains paraît soudain trop nette pour raconter tout ce qui circule sous les feuilles.', 'Revenue près de la tranchée, elle regarde aussi les petits détours qui restent vivants autour de la coupure.'],
  },
  graine: {
    title: 'Le temps du soin et le besoin de voir',
    opening: 'Et si notre attente de signes visibles faisait elle aussi partie de la situation ? Les temps du jeune, de sa famille, de l’école et de l’institution ne coïncident pas toujours. L’image permet d’interroger notre manière d’attendre, sans idéaliser l’inaction.',
    questions: ['Que nous fait vivre l’absence de changement visible, et comment cela se traduit-il dans nos rencontres ?', 'Quels signes modestes ou quelles conditions de rencontre risquons-nous de moins voir lorsque nous cherchons surtout un résultat attendu ?'],
    returnToSituation: 'Nommons un détail qui a bougé et un point qui reste incertain. Comment garder les deux dans notre récit de la situation ?',
    echoes: ['Sur le bord du chemin, une jardinière a posé un piquet au-dessus d’une graine. Elle connaît la pluie et la chaleur reçues, mais ne peut pas montrer la pousse. La gardienne remarque le soin visible autour de ce qui ne l’est pas encore.', 'Une graine attend dans une coupelle sèche. On l’a déplacée chaque jour pour lui trouver la meilleure place. La gardienne touche les petits tas de terre restés sur son trajet : chercher de bonnes conditions a aussi multiplié les recommencements.'],
    returns: ['Sa main retrouve le piquet avant de s’approcher de la terre.', 'Elle revient vers les deux carrés en regardant les ombres plutôt que les seules dates du calendrier.'],
  },
  cage: {
    title: 'Les appuis d’une possibilité réellement accessible',
    opening: 'Et si nous distinguions une possibilité annoncée et les conditions pour s’en saisir ? Une sortie, une séparation ou un relais peuvent être souhaités tout en restant difficiles à habiter. L’image ne dit pas pourquoi le jeune hésite ; elle questionne ce que nous rendons accessible.',
    questions: ['Quand une possibilité proposée n’est pas saisie, qu’éprouvons-nous et quelles explications viennent trop vite ?', 'Que savons-nous de la façon dont le jeune et ses proches vivent le premier pas, les retours possibles et les appuis de cette transition ?'],
    returnToSituation: 'Décrivons concrètement le premier pas envisagé, puis ce que nous ne savons pas encore de la manière dont il est vécu.',
    echoes: ['Sous un auvent, une cage est ouverte. Un oiseau avance vers la porte, puis revient sur son perchoir. La gardienne voit que ces deux mouvements n’effacent pas l’un l’autre ; ils lui racontent une distance qu’elle n’a pas parcourue.', 'Près d’une cage ouverte, une branche oscille au vent. Elle semble offrir un appui, mais son extrémité s’écarte à chaque souffle. La gardienne l’observe depuis la hauteur du perchoir plutôt que depuis le chemin.'],
    returns: ['La gardienne regarde à nouveau le vide entre la porte et la branche, depuis la place où l’oiseau attend.', 'Le perchoir dans sa main pèse autrement lorsqu’elle revient devant la cage.'],
  },
  phare: {
    title: 'Ce que notre attention éclaire et laisse dans l’ombre',
    opening: 'Et si nous élargissions la scène sans minimiser ce qui nous inquiète ? Un risque ou une difficulté peut mobiliser toute l’attention. Faire place à d’autres moments de vie ne l’annule pas ; cela peut rendre notre récit moins étroit.',
    questions: ['Quelle inquiétude attire presque tout notre regard, et que nous fait vivre le fait de regarder ailleurs un instant ?', 'Quels moments, liens ou capacités le jeune, ses proches ou un autre professionnel décriraient-ils et qui figurent peu dans nos échanges ?'],
    returnToSituation: 'Complétons notre dernière description par une scène ordinaire qui n’y figurait pas. Quelle question nouvelle apparaît ?',
    echoes: ['Depuis le chemin, elle voit le phare éclairer le même rocher à chaque tour. Entre deux passages du faisceau, une petite fenêtre répond. Pour l’apercevoir, il faut rester là aussi pendant la nuit qui sépare les éclats.', 'Dans la brume, le faisceau du phare revient vers sa propre lampe. Une cloche résonne plus bas, hors de la lumière. La gardienne s’arrête : tous les repères ne se présentent pas à l’endroit où elle les cherche.'],
    returns: ['Elle retrouve le mécanisme du phare en gardant à l’esprit la petite zone qui échappait au faisceau.', 'Près de la molette, elle essaie de retrouver aussi la place d’où les sons devenaient audibles.'],
  },
  riviere: {
    title: 'Les enchaînements plutôt qu’une cause isolée',
    opening: 'Et si nous racontions une séquence d’interactions plutôt qu’un problème situé chez une seule personne ? Avant et après un moment difficile, des réponses s’enchaînent entre le jeune, son entourage et les lieux qui l’accueillent. Plusieurs descriptions peuvent coexister.',
    questions: ['Dans la répétition de cette situation, à quel moment nous sentons-nous happés ou poussés à répondre toujours de la même manière ?', 'Si nous racontions un épisode du début à la fin, que fait chacun après le geste de l’autre, et qu’est-ce qui change selon le lieu ?'],
    returnToSituation: 'Reprenons un seul épisode, avec ce qui le précède et ce qui le suit, en séparant les faits observés de nos hypothèses.',
    echoes: ['La rivière tourne autour d’une pierre plate. Un remous retient les feuilles, tandis qu’un mince courant poursuit sa route au bord. La gardienne regarde à la fois ce qui revient et ce qui parvient à passer.', 'Une rigole rejoint la rivière derrière le poste. Son eau arrive par à-coups, après chaque ouverture d’une écluse invisible depuis la berge. La gardienne attend un cycle entier avant de reprendre son chemin.'],
    returns: ['Au bord du remous, la gardienne suit maintenant aussi ce qui arrive avant le tournant.', 'Le tracé du canal lui paraît moins simple lorsqu’elle y ajoute les endroits où l’on doit pouvoir s’arrêter.'],
  },
  cercles: {
    title: 'Se rencontrer sans confondre les places',
    opening: 'Et si nous faisions place à des perspectives différentes sans chercher trop vite une version commune ? Famille, jeune et professionnels peuvent partager une préoccupation et avoir besoin de frontières différentes. La rencontre n’exige pas que leurs récits deviennent identiques.',
    questions: ['Quand les points de vue divergent, où nous sentons-nous mis à l’écart, contestés ou entraînés à choisir un camp ?', 'Qu’est-ce que chacun cherche à préserver, et quelle question pourrions-nous réellement explorer ensemble sans effacer ces différences ?'],
    returnToSituation: 'Formulons deux versions possibles de la situation et un point que leurs auteurs pourraient souhaiter explorer ensemble.',
    echoes: ['Dans le sable, deux cercles se recouvrent sur une petite surface. Une tasse est posée là ; les sacs restent chacun de leur côté. La gardienne voit un lieu de rencontre qui n’exige pas d’emporter toutes les affaires dans le même cercle.', 'Deux personnes retracent les cercles effacés par la pluie. L’une laisse une entrée, l’autre commence par refermer le bord. Elles disent toutes deux préparer l’accueil. La gardienne prend le temps d’écouter ce que ce mot protège pour chacune.'],
    returns: ['Revenue devant les lignes, elle cherche une place pour la table plutôt qu’une manière de tout effacer.', 'Elle repose les deux cartes côte à côte, assez près pour qu’on puisse passer de l’une à l’autre.'],
  },
  fissure: {
    title: 'Ce qu’une rupture change dans les liens',
    opening: 'Et si nous regardions ce qu’une rupture a fragilisé, mais aussi ce qu’elle rend désormais perceptible ? Une crise, une absence ou un changement d’interlocuteur ne reçoit pas le même sens pour tous. L’image n’en fait ni une faute ni une chance obligatoire.',
    questions: ['Qu’a changé cette rupture dans notre confiance, notre disponibilité ou notre manière de raconter la suite ?', 'Quelles personnes ont vécu cette transition autrement que nous, et quelle part de leur expérience manque encore à notre récit ?'],
    returnToSituation: 'Distinguons ce qui ne tient plus comme avant, ce qui reste disponible et ce que nous ne savons pas encore des effets de la rupture.',
    echoes: ['Une fissure traverse le muret du chemin. Sur une face, elle est sèche ; sur l’autre, de l’eau a laissé une trace. La gardienne en fait le tour. La même ligne ne lui raconte plus une seule histoire.', 'Un bol fendu recueille la pluie sur le rebord d’une fenêtre. Une coupelle retient ce qu’il laisse passer. La gardienne regarde cet assemblage provisoire sans lui demander de redevenir un bol neuf.'],
    returns: ['Le mur attend toujours son enduit, mais elle voit maintenant qu’il possède deux faces.', 'Près du bol, elle laisse assez d’espace pour regarder aussi ce qui s’échappe entre les bords.'],
  },
  plume: {
    title: 'La place de nos mots et de nos éprouvés',
    opening: 'Et si notre façon de parler de la situation faisait aussi partie de ce qui se passe ? Les mots repris en transmission, les silences et les émotions d’équipe peuvent orienter les rencontres. Les mettre en discussion ne revient pas à désigner un responsable.',
    questions: ['Quels mots ou quelles émotions reviennent entre nous, et comment nous disposent-ils à rencontrer ce jeune et ses proches ?', 'Quelle autre voix, ou quel détail concret d’une rencontre, pourrait nuancer une formulation que nous répétons désormais comme une évidence ?'],
    returnToSituation: 'Reprenons une phrase habituelle de nos transmissions : que décrit-elle, qu’interprète-t-elle et quelle autre formulation devient possible ?',
    echoes: ['Une plume tombe sur le registre ouvert. Une phrase est recopiée depuis plusieurs semaines, sans date nouvelle. En tournant la page, la gardienne trouve un petit trajet raconté autrement dans la marge.', 'À la porte du poste, une plume se déplace lorsqu’on parle près d’elle. Puis elle continue de tourner pendant le silence. La gardienne reste assez longtemps pour sentir le souffle de la pièce et celui qui arrive du dehors.'],
    returns: ['Elle retrouve sa chaise en remarquant le souffle qu’elle apporte elle-même autour de la table.', 'Au registre, la marge lui paraît maintenant assez grande pour accueillir une autre façon de raconter le passage.'],
  },
  pierres: {
    title: 'Les appuis et la fatigue de ceux qui soutiennent',
    opening: 'Et si nous rendions visibles les appuis derrière ce qui paraît tenir ? Le jeune, ses proches et les professionnels peuvent porter des parts inégales de la continuité. Les reconnaître permet d’interroger notre récit de l’autonomie sans confondre soutien et dépendance.',
    questions: ['Qui, dans notre équipe, se sent tenir une place devenue difficile à quitter, et que lui ferait éprouver le fait de passer le relais ?', 'Quels soutiens concrets de la famille, de l’école, du quotidien ou des soins deviennent invisibles quand nous disons que la situation « tient » ?'],
    returnToSituation: 'Ajoutons à notre description ce qui soutient actuellement la situation, qui le porte et ce que nous ignorons de sa fatigue.',
    echoes: ['Trois pierres tiennent une planche près du chemin. Une petite cale, presque cachée, porte un des points de contact. La gardienne s’accroupit : ce qui semblait secondaire depuis sa hauteur reçoit une bonne part du poids.', 'Une personne garde la main contre un empilement de pierres. Elle répond que tout tient, mais sa manche tremble. La gardienne entend la phrase et voit le poignet sans savoir encore comment les raconter ensemble.'],
    returns: ['Devant la planche, elle regarde les points de contact autant que la forme des pierres.', 'Lorsqu’elle retrouve les blocs dispersés, elle cherche une place pour les mains avant de reprendre le dessin.'],
  },
};
