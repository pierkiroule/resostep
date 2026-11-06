import type { ArchetypeId } from './archetypes';

export interface Narrative {
  title: string;
  otherTitle: string;
  opening: string;
  tension: string;
  endings: [string, string, string, string];
}

/** Des noyaux de contes écrits comme des scènes, sans attribuer les rôles cliniques. */
export const narratives: Record<ArchetypeId, [Narrative, Narrative]> = {
  noeud: [
    {
      title: 'La corde qui avait gardé la tempête', otherTitle: 'Les mains de la veille',
      opening: 'La gardienne du passage retrouve la corde nouée pendant la crue. L’eau a baissé ; l’amarre tire maintenant la petite passerelle de travers. Le nœud, lui, a exactement la forme du soir où il avait empêché le bois de partir.',
      tension: 'Elle demande de l’aide. Trois mains saisissent les brins, chacune pour soulager la précédente. Le bois gémit davantage. Personne ne tire contre les autres ; pourtant, leurs efforts se contrarient. La gardienne reconnaît dans ses paumes la peur de la veille, restée là après le retrait de l’eau.',
      endings: ['Elle ne défait pas le nœud. Elle marque sur la corde le niveau qu’atteignait la crue. Entre cette marque et l’eau d’aujourd’hui, un morceau d’histoire attend encore d’être raconté.', 'Une main relâche quelques millimètres. La passerelle ne tombe pas ; une boucle jusque-là invisible apparaît. Personne ne sait encore si elle retient le passage ou si elle lui rend du jeu.', 'La gardienne demande à la personne qui tient l’autre extrémité ce qu’elle sent. La réponse tarde. Pour une fois, les mains attendent avant de reprendre leur traction.', 'On laisse près du nœud la corde de secours utilisée pendant la crue. Elle rappelle ce qui a tenu, sans dire encore comment tenir aujourd’hui. Le bois continue de bouger doucement.'],
    },
    {
      title: 'Le fil qui passait ailleurs', otherTitle: 'La couture entre les reprises',
      opening: 'Sous l’auvent du passage, la gardienne répare une toile déchirée. Les anciennes coutures sont si serrées que l’aiguille ne traverse plus. Chaque reprise devait rendre la toile plus solide ; ensemble, elles ont formé une petite plaque dure.',
      tension: 'Elle cherche d’abord un fil plus résistant. Puis son doigt rencontre, à côté des reprises, une bande de tissu restée souple. Commencer là lui semble presque déloyal envers les longues heures déjà passées sur la déchirure.',
      endings: ['Elle pose un fil d’une autre couleur sur la toile, sans le nouer. Ce nouveau trajet ne cache aucune reprise. Quelqu’un d’autre pourrait encore en déplacer le départ.', 'La gardienne retourne la toile. De l’autre côté, les coutures racontent une histoire différente. Elle laisse l’aiguille entre les deux faces, le temps de regarder encore.', 'Une personne venue s’abriter lui demande à quoi servira la toile. La gardienne ouvre la bouche, puis regarde la forme qu’elle s’efforçait de lui rendre depuis le matin.', 'Elle desserre une seule reprise. Une poche d’air se forme sous le tissu. Ce n’est pas encore une réparation ; c’est une place où les doigts peuvent à nouveau sentir.'],
    },
  ],
  barque: [
    {
      title: 'Le quai qu’on ne voyait pas du bord', otherTitle: 'Deux rames, plusieurs rives',
      opening: 'La gardienne monte dans une barque pour rejoindre le passage. Sa voisine rame vers la lumière d’une maison ; elle-même vise le grand arbre. Elles n’ont jamais parlé de la rive : toutes deux étaient certaines d’avoir entendu « de l’autre côté ».',
      tension: 'La barque tourne lentement. Chacune redouble d’effort pour compenser ce qu’elle prend pour l’hésitation de l’autre. Le bruit des rames couvre maintenant leurs paroles. Depuis le quai, un enfant voit très bien le cercle qu’elles dessinent.',
      endings: ['La gardienne pose sa rame sur ses genoux. La barque dérive un peu, sans choisir leur destination. Dans ce silence nouveau, sa voisine peut enfin nommer la maison qu’elle cherchait.', 'Elles demandent à l’enfant de décrire leur trajet. Il ne parle ni d’erreur ni de lenteur : il montre une eau peu profonde qu’aucune des deux ne voyait depuis son siège.', 'La maison et l’arbre restent sur la rive. Entre eux apparaît un petit quai. S’y arrêter serait-il un détour, une rencontre, ou simplement un endroit où parler du voyage ?', 'Elles retournent ensemble vers la berge de départ. La traversée n’a pas eu lieu. Pourtant, quelque chose a changé dans ce que chacune pensait que l’autre savait.'],
    },
    {
      title: 'Ce qu’on emporte dans la barque', otherTitle: 'Le poids sous le banc',
      opening: 'Avant le départ, la gardienne trouve sous le banc de la barque des paquets que personne ne réclame. Une couverture mouillée, une boîte fermée, des outils prêtés. Sur le quai, chacun lui assure que la barque est presque vide.',
      tension: 'Elle pourrait jeter les paquets pour alléger la traversée. Mais un vieux nom est brodé sur la couverture, et la boîte produit un petit bruit quand la coque bouge. Elle comprend qu’elle porte des choses dont l’histoire n’est pas montée à bord.',
      endings: ['Elle aligne les paquets sur le quai. Une personne revient en chercher un, puis reste pour en raconter le poids. L’heure du départ passe sans que personne ne la rappelle.', 'La gardienne laisse une place sur le banc à côté des paquets. Peut-être faut-il aussi quelqu’un pour dire ce qu’ils protègent, avant de décider ce qui peut rester à terre.', 'Elle écrit sur le registre : « Chargement à reconnaître. » Le chiffre attendu demeure vide. La barque flotte, mais son inventaire demande maintenant plusieurs voix.', 'Sous la couverture, le bois a gardé une empreinte sèche. La gardienne la touche : quelque chose était déjà là avant ce voyage. Elle attend de savoir qui pourrait le reconnaître.'],
    },
  ],
  roseau: [
    {
      title: 'Le vent de l’autre rive', otherTitle: 'Ce qui plie indique aussi',
      opening: 'La gardienne veut attacher les roseaux qui bordent le passage pour qu’ils cessent de se coucher. Depuis son abri, leur agitation lui paraît désordonnée. Elle choisit le plus souple et lui prépare un tuteur bien droit.',
      tension: 'Dehors, elle reçoit le vent de plein fouet. Le roseau se courbe là où son propre corps cherche un appui. En le redressant, elle ne ferait pas disparaître ce vent ; elle lui retirerait peut-être une manière de le traverser.',
      endings: ['Elle plante le tuteur à côté, sans y lier la tige. Entre les deux, le vent continue d’écrire une distance que l’on ne voyait pas depuis l’abri.', 'La gardienne passe de l’autre côté de la haie. Le même roseau lui paraît presque immobile. Elle revient lentement vers la place d’où elle l’avait jugé si agité.', 'Elle rapporte la corde inutilisée. Quelqu’un lui demande si le roseau tient enfin droit. Elle cherche comment raconter le vent sans faire disparaître la fragilité de la tige.', 'Elle s’assied près des roseaux. Certains se relèvent vite, d’autres gardent une courbe. Elle ne sait pas encore lesquels ont rencontré le souffle le plus fort.'],
    },
    {
      title: 'La haie aux deux souffles', otherTitle: 'Un abri qui déplace le vent',
      opening: 'Deux roseaux poussent de chaque côté d’un panneau posé près du passage. Celui de gauche se couche ; celui de droite reste presque droit. La gardienne décide de prolonger le panneau pour protéger le plus exposé.',
      tension: 'À peine le nouvel abri posé, un tourbillon atteint le second roseau. Le premier bouge moins, mais l’autre commence à s’effilocher. Le panneau a changé la distribution du vent, pas seulement la force reçue par une tige.',
      endings: ['Elle entrouvre le panneau. Les deux tiges bougent autrement. Aucun angle ne protège tout le monde de la même façon ; elle appelle ceux qui vivent de chaque côté de la haie.', 'La gardienne marque les directions du souffle sur une feuille. Il lui manque encore ce qui se passe derrière le panneau, à l’endroit où elle ne s’est jamais tenue.', 'Elle laisse le panneau mobile. Chaque personne qui passe peut lui dire ce qu’elle sent à cette place. La haie attend une carte faite de plusieurs souffles.', 'Elle retrouve dans sa poche le dessin de l’abri parfait. Sur le papier, les deux roseaux étaient droits et le vent n’avait pas de place. Elle déplie une autre feuille.'],
    },
  ],
  mycelium: [
    {
      title: 'La carte sous les feuilles', otherTitle: 'Les chemins qui ne se signent pas',
      opening: 'La gardienne reçoit une carte du passage où figurent la maison, le quai et le grand chemin. Chaque trait porte un nom. Sous ses pas, pourtant, l’eau rejoint les racines par des fils pâles que personne n’a dessinés.',
      tension: 'Elle soulève quelques feuilles et découvre le mycélium. Un fil abîmé est contourné par plusieurs autres. Pour rendre le réseau plus lisible, elle voudrait dégager toute la terre ; ses doigts sentent déjà combien ces liens sèchent à l’air.',
      endings: ['Elle rabat doucement les feuilles. La carte gardera une zone sans traits, avec cette note : « Ici, des liens travaillent que nous ne savons pas tous nommer. »', 'Un voisin lui parle de celle qui arrose quand le village dort. La gardienne lui fait une place sur la carte, puis laisse de la marge pour les autres présences inconnues.', 'Elle suit un seul fil, jusqu’à la limite où regarder risquerait d’abîmer. Au-delà, le réseau continue sans son regard. La carte restera volontairement inachevée.', 'La gardienne dessine un chemin qui sort du bord de la feuille. Elle ne sait pas où il va. Pour la première fois, cette ignorance fait partie du dessin.'],
    },
    {
      title: 'Le fil coupé au bord du chemin', otherTitle: 'Une continuité sous la terre',
      opening: 'Après des travaux sur la berge, la gardienne retrouve un carré de terre sèche. La tranchée a été rebouchée, le chemin paraît réparé. Sous la surface, les fils du mycélium s’arrêtent de chaque côté de la coupure.',
      tension: 'Elle rapproche la terre avec ses mains, comme si le simple contact devait rétablir les échanges. Le lendemain, rien de visible n’a changé. Plus loin, une racine reçoit encore de l’humidité par un détour que les travaux avaient épargné.',
      endings: ['Elle pose un repère au-dessus de la coupure. Le chemin est ouvert aux pas ; la continuité sous les pas a son propre temps. Qui gardera mémoire des deux ?', 'La gardienne suit le détour humide au lieu de creuser encore la tranchée. Quelqu’un devra veiller sur ce trajet pendant que la terre retrouve d’autres liens.', 'Elle revient avec la personne qui connaissait le sol avant les travaux. Elles ne voient pas la même chose. Leurs deux descriptions tiennent difficilement dans la case « réparé ».', 'Elle laisse le carré de terre sans y planter de panneau de fin de chantier. Le passage est utilisable, mais une histoire continue dessous.'],
    },
  ],
  graine: [
    {
      title: 'Le jardin qu’on déterrait chaque matin', otherTitle: 'Une racine sans témoin',
      opening: 'Près du passage, la gardienne a semé une graine. Chaque matin, on lui demande si elle pousse. Chaque matin, elle écarte un peu la terre pour pouvoir répondre. La graine retrouve la lumière, puis l’obscurité, puis la lumière.',
      tension: 'Un jour, une racine fine reste collée à son doigt. La gardienne ne sait plus si elle observe la lenteur de la pousse ou si ses vérifications la font recommencer. Elle remet la terre en place et demeure devant le carré silencieux.',
      endings: ['Elle pose un petit piquet pour que personne ne marche là. Ce repère ne montre aucun résultat. Il indique seulement un endroit dont on prend soin sans le rendre visible à chaque visite.', 'Au registre, elle écrit la pluie, la chaleur et les passages autour du carré. La case « hauteur de la pousse » reste vide. Cette autre façon de raconter sera-t-elle entendue ?', 'Elle demande à quelqu’un de venir regarder avec elle sans creuser. À deux, l’attente n’a pas exactement le même poids, même si la terre n’a rien montré de plus.', 'Le lendemain, sa main s’arrête au-dessus du sol. Elle ne sait pas ce qui se passe dessous. Elle sait seulement qu’aujourd’hui, elle n’y a pas ajouté de déplacement.'],
    },
    {
      title: 'Les graines du même sachet', otherTitle: 'Le calendrier et la terre',
      opening: 'La gardienne a semé deux graines du même sachet près du passage. L’une reçoit le soleil du matin ; l’autre reste dans l’ombre du mur. Sur le calendrier, elles ont pourtant le même jour de naissance.',
      tension: 'Quand la première lève, la seconde devient « celle qui tarde ». La gardienne approche une lampe de la terre. La chaleur dessèche la surface. Elle regarde alors, pour la première fois, le trajet de l’ombre pendant une journée entière.',
      endings: ['Elle dessine deux calendriers où figurent aussi la lumière et l’eau. Les dates se ressemblent encore ; les journées qu’elles contiennent ne sont plus tout à fait les mêmes.', 'Elle éloigne la lampe et touche la terre sèche. Ce qui devait hâter la pousse demandera peut-être maintenant un peu de réparation. La graine demeure hors de vue.', 'Le mur ne peut pas être déplacé aujourd’hui. La gardienne cherche qui pourrait raconter ce qu’il protège autant que l’ombre qu’il porte.', 'Elle laisse le sachet vide près des deux carrés. Il rappelle une origine commune, sans suffire à dire ce que chacune des graines rencontre maintenant.'],
    },
  ],
  cage: [
    {
      title: 'La branche devant la porte', otherTitle: 'Une ouverture sans premier appui',
      opening: 'Une cage est ouverte sous l’auvent du passage. La gardienne a écarté la porte jusqu’au bout. L’oiseau reste sur son perchoir. À chaque visite, quelqu’un lui explique que rien ne l’empêche plus de partir.',
      tension: 'En se baissant à hauteur du perchoir, la gardienne découvre le vide entre la porte et la première branche. Depuis l’extérieur, ce vide paraissait petit. Depuis la cage, il n’a ni rebord ni endroit où reprendre souffle.',
      endings: ['Elle approche une branche, puis recule. L’oiseau ne bouge pas. L’ouverture n’est plus exactement la même ; le moment de la franchir n’appartient pourtant pas à la gardienne.', 'La porte reste ouverte, la branche reste proche. La gardienne demande à ceux qui passent de ne plus compter chaque mouvement de l’oiseau. L’attente commence à changer de forme.', 'Un souffle fait osciller la branche. La gardienne voit qu’un appui peut être accessible sans être encore assez sûr. Elle s’assied pour regarder ce qu’elle n’avait pas mesuré.', 'L’oiseau avance d’un pas, puis revient. Sur le registre du passage, la gardienne hésite entre « sorti » et « resté ». Aucune des deux cases ne raconte ce petit aller-retour.'],
    },
    {
      title: 'Le perchoir qu’on ne devait pas emporter', otherTitle: 'Ce qui accompagne le départ',
      opening: 'Pour préparer un départ, la gardienne retire de la cage tout ce qui lui paraît retenir l’oiseau. Le vieux perchoir disparaît, puis le linge qui coupait le vent. La porte est ouverte sur un espace enfin dégagé.',
      tension: 'L’oiseau se tasse au fond. La gardienne tient encore le perchoir dans sa main. Les petites marques sur le bois lui montrent qu’il servait aussi à se retourner, à s’élancer et à reconnaître la distance jusqu’à la porte.',
      endings: ['Elle replace le perchoir un peu plus près de l’ouverture. Elle ne sait pas encore s’il aide à rester ou s’il rend un départ imaginable. Peut-être ne faut-il pas trancher trop vite.', 'La gardienne pose le perchoir entre la cage et l’arbre. L’objet change de place sans perdre son histoire. L’oiseau l’observe de loin.', 'Elle demande à quelqu’un qui connaît l’oiseau ce qu’il avait remarqué avant elle. Une rayure jusque-là insignifiante devient le début d’un autre récit du perchoir.', 'Elle garde le linge à portée de main. Le départ n’a pas encore de date. Le vent, lui, varie déjà entre le matin et le soir.'],
    },
  ],
  phare: [
    {
      title: 'La maison au bord du faisceau', otherTitle: 'Le rocher avait toute la lumière',
      opening: 'Chaque soir, la gardienne braque le phare sur un rocher dangereux. Elle le connaît si bien qu’elle pourrait en décrire chaque arête les yeux fermés. Les voyageurs aussi ne parlent plus que de lui.',
      tension: 'Un soir, la lampe glisse légèrement. Au bord du faisceau apparaît une maison basse, puis une fenêtre éclairée. La gardienne s’aperçoit qu’elle n’a jamais demandé qui y veillait. Le rocher n’est pas devenu moins réel ; il a cessé d’occuper tout le paysage.',
      endings: ['Elle garde une partie de la lumière sur le rocher et frappe à la porte de la maison. Elle ignore encore quelle histoire commencera derrière cette fenêtre.', 'Sur sa carte, elle ajoute la maison sans effacer le rocher. Entre les deux, elle laisse un espace pour les trajets qu’elle n’a jamais vus de sa tour.', 'La gardienne demande à une voyageuse ce que sa lampe laisse dans l’ombre. La réponse vient d’un endroit qu’elle ne pouvait pas voir en restant près du mécanisme.', 'Elle ralentit le balayage du faisceau. Quelqu’un pourra peut-être faire signe. Ce soir-là, éclairer signifie aussi attendre une réponse.'],
    },
    {
      title: 'La lampe et la brume', otherTitle: 'Quand éclairer éblouit',
      opening: 'La brume a fermé le passage. La gardienne augmente la puissance du phare pour retrouver la rive. La lumière lui revient en un mur blanc. Elle tourne encore la molette ; le mur devient plus brillant.',
      tension: 'Elle entend une cloche au ras de l’eau, mais ne distingue aucune barque. Pour écouter, elle s’éloigne du moteur. Là, dans une lumière moins forte, une petite lueur répond à chaque son de cloche.',
      endings: ['La gardienne baisse un peu sa lampe. La brume reste épaisse, mais elle distingue maintenant deux signaux qui ne venaient pas de sa tour. Le passage demandera plusieurs repères.', 'Elle note les silences entre les coups de cloche. Ce qu’elle cherchait à rendre visible arrive pour l’instant par une autre voie.', 'Elle ouvre une fenêtre du phare. L’air humide entre avec des voix qu’elle n’entendait pas près du moteur. Elle laisse la molette où elle est.', 'Au matin, elle ne peut pas raconter une rive retrouvée. Elle peut raconter une cloche, une lueur et l’endroit précis d’où elles devenaient perceptibles.'],
    },
  ],
  riviere: [
    {
      title: 'Le remous et les deux sources', otherTitle: 'Ce qui arrivait avant le tournant',
      opening: 'La gardienne tente de calmer un remous devant le passage. Elle déplace une pierre, puis une autre. L’eau se lisse à ses pieds et recommence à tourner un peu plus loin. Le remous semble la suivre.',
      tension: 'Elle remonte la berge. Avant le tournant, deux bras de rivière se rejoignent : l’un rapide et froid, l’autre chargé de feuilles. Depuis son premier poste, elle ne voyait que leur rencontre, jamais ce que chacun apportait.',
      endings: ['Elle revient au remous avec deux couleurs sur sa carte. L’eau ne s’est pas calmée. Pourtant, sa main ne cherche plus immédiatement quelle pierre déplacer.', 'La gardienne laisse quelqu’un regarder depuis le tournant pendant qu’elle reste en amont. Elles conviennent d’un signe pour se raconter ce que l’autre ne voit pas.', 'Elle suit un des bras jusqu’à un moulin arrêté. Le second continue hors du chemin. Elle ne pourra pas comprendre leurs rencontres en une seule promenade.', 'Une feuille traverse le remous et poursuit sa route. La gardienne remarque ce qui passe encore là où son regard ne voyait plus que de l’eau bloquée.'],
    },
    {
      title: 'Le canal trop droit', otherTitle: 'Les rives qui n’avaient plus de repos',
      opening: 'Pour accélérer la traversée, on a redressé la rivière près du passage. L’eau file désormais entre deux murs lisses. La gardienne admire le trajet raccourci, jusqu’au jour où elle ne trouve plus aucun endroit pour accoster.',
      tension: 'La barque atteint vite le village, mais ses passagers doivent sauter en marche. Les petites anses ont disparu du plan avec les détours. En gagnant du temps sur l’eau, on a déplacé la difficulté vers les bords.',
      endings: ['Elle dessine une anse dans la marge du plan. Personne ne sait encore comment lui rendre une place. La ligne droite demeure, accompagnée d’une question sur ceux qui doivent la quitter.', 'La gardienne demande aux voyageurs où ils reprenaient souffle avant les travaux. Leurs réponses ne se situent pas aux mêmes endroits sur la carte.', 'Elle laisse la barque amarrée pour écouter le bruit de l’eau contre le mur. La vitesse ne raconte pas tout ce qu’un passage doit permettre.', 'Un enfant lance une brindille. Elle atteint le village sans jamais toucher la rive. La gardienne la suit du regard bien après l’heure prévue pour son arrivée.'],
    },
  ],
  cercles: [
    {
      title: 'La place entre les deux cercles', otherTitle: 'Une table sur la frontière',
      opening: 'Dans le sable près du passage, les habitants et les voyageurs ont chacun tracé leur cercle. On y garde ses outils, ses histoires et ce qu’on ne veut pas perdre. La gardienne est chargée de les faire tenir ensemble.',
      tension: 'Elle voudrait effacer la ligne qui les sépare. Une voyageuse pose sa main sur le sable : cette limite l’aide aussi à savoir où elle peut déposer ses affaires. La gardienne découvre qu’un rapprochement peut se vivre comme une disparition.',
      endings: ['Elle pose une petite table à cheval sur les lignes. Personne n’a quitté son cercle. Une tasse attend de chaque côté ; on ne sait pas encore qui viendra s’asseoir.', 'La gardienne laisse les lignes en place et demande où dessiner une ouverture. Les doigts ne désignent pas tous le même endroit.', 'La pluie efface une partie des cercles. Certaines personnes les retracent, d’autres non. La gardienne recueille leurs récits avant de décider ce que signifie cette différence.', 'Elle marque l’espace qui appartient aux deux cercles sans les confondre. Il est petit. Il suffit pour y poser une première question.'],
    },
    {
      title: 'Les deux cartes de la même place', otherTitle: 'Le seuil vu des deux côtés',
      opening: 'La gardienne reçoit deux dessins du passage. Sur l’un, le cercle des habitants protège un foyer. Sur l’autre, le même cercle ferme la route. Les traits sont presque identiques ; les légendes ne racontent pas le même lieu.',
      tension: 'Elle superpose les feuilles contre la lumière. Elle espérait qu’une seule carte apparaîtrait. Les mots deviennent illisibles. Elle sépare les dessins et remarque, sur chacun, un petit espace blanc près du seuil.',
      endings: ['Elle invite les deux dessinateurs à raconter ce blanc. Ils ne lui donnent pas le même nom. La conversation trouve pourtant là un endroit où commencer.', 'La gardienne laisse deux cartes sur la table. Pour préparer le passage, il faudra peut-être savoir les lire ensemble sans les réduire à une seule.', 'Elle dessine un troisième cercle, non pour départager les premiers, mais pour y noter ce qu’elle ne comprend pas encore de leur rencontre.', 'Elle retourne les feuilles vers ceux qui les ont dessinées. La place change de sens selon le côté de la table ; le seuil reste à explorer.'],
    },
  ],
  fissure: [
    {
      title: 'Le mur qui ne séchait jamais', otherTitle: 'Derrière la dernière couche',
      opening: 'Chaque matin, la gardienne recouvre la fissure du mur qui borde le passage. Chaque nuit, une ligne sombre revient. Elle connaît maintenant le mélange d’enduit par cœur, mais pas ce qui se passe derrière le mur.',
      tension: 'En retirant une écaille, elle sent de l’air humide. Une gouttière déverse l’eau contre l’autre face. Depuis des semaines, elle réparait un côté d’une histoire dont elle ne regardait jamais l’envers.',
      endings: ['Elle pose le seau et cherche l’entrée qui mène derrière le mur. La fissure reste visible. Elle indique désormais aussi l’endroit où commence ce qu’elle ne connaît pas.', 'La gardienne appelle la personne qui entretient la gouttière. Chacune croyait travailler loin de l’autre. Leurs deux échelles se retrouvent de part et d’autre de la même ligne.', 'Elle laisse une partie du mur sans enduit pour suivre la trace de l’eau. Ce morceau exposé n’est pas oublié ; quelqu’un devra pouvoir en prendre soin.', 'Le soir, la lumière passe par la fente. Elle éclaire une petite plante au pied du mur. La gardienne la regarde sans décider que la rupture devait arriver pour la faire pousser.'],
    },
    {
      title: 'Le bol aux deux bords', otherTitle: 'Ce que la réparation laisse voir',
      opening: 'Au poste du passage, la gardienne retrouve un bol fendu. Quelqu’un a rapproché les bords et posé une bande de tissu autour. Le bol tient sur la table, mais une goutte apparaît lorsqu’on le remplit.',
      tension: 'Elle cherche à serrer davantage. Le bord commence à s’ébrécher. La personne qui avait fait la première réparation lui raconte qu’il fallait alors simplement transporter le bol sans perdre les morceaux.',
      endings: ['La gardienne pose le bol dans une coupelle. Cette nouvelle forme ne supprime pas la fissure ; elle permet d’en regarder autrement les usages et les limites.', 'Elle laisse le tissu près du bol. Il a servi à un moment précis. Reste à savoir ce qu’on demande maintenant à cet assemblage.', 'Avant de chercher une nouvelle colle, elle demande à quoi le bol doit encore servir. Les réponses ouvrent plusieurs histoires possibles, dont aucune ne le rend neuf.', 'Elle remplit le bol à moitié. La goutte tarde. Ce seuil provisoire ne dit ni que tout tient, ni que rien ne peut plus être contenu.'],
    },
  ],
  plume: [
    {
      title: 'La plume au milieu des voix', otherTitle: 'Le souffle qu’on ajoutait',
      opening: 'Une plume est posée sur la table du passage. Autour, les habitants débattent de la direction à prendre. Chaque fois qu’une voix se lève, la plume tourne. Chacun est certain que le mouvement vient du voisin.',
      tension: 'La gardienne veut rappeler le calme. Son propre souffle pousse la plume jusqu’au bord. Elle s’arrête avant de parler davantage. Dans ce silence, un filet d’air continue pourtant de passer sous la porte.',
      endings: ['Elle laisse la plume où elle est et entrouvre la porte. Le souffle de la pièce et celui du dehors se mêlent. Leur part respective reste à sentir.', 'La gardienne change de chaise. La plume bouge encore, mais elle ne voit plus les mêmes visages derrière elle. Le récit de la réunion change avec sa place.', 'Quelqu’un parle à voix basse. On se rapproche pour l’entendre ; la plume demeure presque immobile. Personne ne sait encore ce que cette voix allait ajouter.', 'Elle dessine sur la table la place où reposait la plume avant leur arrivée. Il devient possible de parler aussi des mouvements que la conversation a produits.'],
    },
    {
      title: 'La plume dans le registre', otherTitle: 'Une phrase qui change de poids',
      opening: 'La gardienne glisse une plume entre deux pages du registre. Une phrase y est recopiée à chaque relève : « Le passage reste impossible. » Elle ne sait plus qui l’a écrite la première fois, ni sous quel vent.',
      tension: 'Une voyageuse s’arrête sur le mot « reste ». Elle se souvient d’un matin où quelqu’un avait traversé jusqu’à la moitié. Ce petit trajet n’était entré dans aucune page : il n’atteignait pas l’autre rive.',
      endings: ['La gardienne ouvre une ligne sous la phrase habituelle. Elle y inscrit le milieu de la traversée. La plume marque maintenant une page où deux récits peuvent se rencontrer.', 'Elle ne barre pas la phrase. Elle demande qu’on lui rende une date, un lieu et une voix. Le mot « impossible » commence à peser autrement.', 'Le registre reste ouvert sur la table. La prochaine relève pourra poursuivre le récit ou le déplacer. Une marge attend les passages trop petits pour les anciennes cases.', 'Elle retire la plume du livre et la pose dehors. Le vent d’aujourd’hui ne vient pas du même côté. La phrase attend encore d’être relue à cette lumière.'],
    },
  ],
  pierres: [
    {
      title: 'La main dans le paysage', otherTitle: 'L’équilibre avait quelqu’un dessous',
      opening: 'Trois pierres soutiennent une planche du passage. La gardienne admire leur équilibre, jusqu’à ce qu’un frisson lui fasse remarquer une main posée contre la plus petite. Cette main est là depuis l’aube.',
      tension: 'Pour vérifier si l’ensemble tient seul, elle voudrait demander qu’on la retire. Mais le poignet tremble déjà. Dans son dessin du passage, elle avait noté les pierres et la planche ; aucune place n’était prévue pour la fatigue de celui qui soutient.',
      endings: ['Elle cherche une cale pendant que la main reste en place. Le passage n’est pas devenu autonome. Il commence à raconter ses appuis.', 'La gardienne demande au poignet ce qu’il sent avant de déplacer une pierre. La réponse change l’endroit où elle pensait poser sa propre main.', 'Quelqu’un vient prendre le relais sans changer l’assemblage. La forme paraît identique ; pour celui qui peut enfin s’asseoir, le paysage a pourtant changé.', 'Elle ajoute la main à son dessin, puis laisse une case pour le moment où elle pourra se retirer. Cette case ne porte pas encore de date.'],
    },
    {
      title: 'Les pierres après la chute', otherTitle: 'Une forme qui n’avait pas de modèle',
      opening: 'La crue a dispersé les pierres du passage. La gardienne les rassemble selon un vieux dessin. Elle reconnaît chaque bloc, mais une face s’est émoussée et la petite cale a disparu. L’ancienne forme ne tient plus.',
      tension: 'Elle recommence jusqu’à ne plus sentir ses doigts. Une voisine pose une pierre à plat, hors du dessin. Ce geste lui paraît d’abord renoncer au passage ; puis elle y voit un endroit où déposer ce qu’elle porte.',
      endings: ['Elles s’assoient un instant sur les pierres qui devaient servir à traverser. Une autre forme commence peut-être ici, sans effacer ce que la crue a emporté.', 'La gardienne laisse le vieux dessin à côté des pierres. Il garde la mémoire d’un appui, mais ne décide plus seul de la place des surfaces abîmées.', 'Elle demande qui se souvient de la cale disparue. Une histoire de prêt et de retour oublié entre dans celle de l’équilibre.', 'La première pierre reste à plat. On peut y attendre quelqu’un avant de poursuivre. Le passage n’a pas encore retrouvé de forme ; il possède déjà un lieu de rencontre.'],
    },
  ],
};
