# La minute d’Intervision Résonante •°

**Version flash métaphorique — Le pas de côté résonant !**

Une équipe évoque une situation complexe de pédopsychiatrie. Un professionnel
choisit **un seul symbole** sur le disque. Des bulles frémissent, l’image émerge
et sa musique commence. Un texte bref relie une scène sensible à une expérience
de l’équipe, puis propose une question pour déplacer le regard.

La consigne : **« Pour cette situation, quel symbole vous parle ? »**

Le symbole n’explique pas le jeune ou sa famille. L’application n’analyse aucun
récit clinique, ne pose pas de diagnostic et ne recommande aucune conduite
thérapeutique. Les associations peuvent être discutées ou écartées.

## Installation

Node.js **24.x** et npm. Aucun secret, backend ou service d’IA.

```bash
npm ci
npm run dev
```

Pour vérifier et construire la version de production :

```bash
npm run check
npm run build
npm run check:pwa
npm run preview
```

`dist/` est un site statique autonome, à servir en HTTPS ou sur localhost.
Les fichiers ne se lancent pas directement en `file://`. Les chemins relatifs
permettent un hébergement à la racine ou dans un sous-répertoire.

## Déploiement Vercel

1. Ouvrir [Vercel → New Project](https://vercel.com/new).
2. Importer **pierkiroule/resostep**, branche de production **main**.
3. Garder la racine du dépôt comme Root Directory et cliquer sur **Deploy**.

| Paramètre | Valeur |
| --- | --- |
| Framework | Vite |
| Node.js | 24.x |
| Installation | `npm ci` |
| Construction | `npm run check && npm run build && npm run check:pwa` |
| Sortie | `dist` |
| Variables d’environnement | Aucune |

`vercel.json` fixe ces paramètres et les règles de cache. Les fichiers HTML et
le service worker sont revérifiés ; les assets dont le nom contient un hash
peuvent être conservés longtemps. La navigation utilise `#disque` et `#lecture` ;
aucune réécriture de route n’est nécessaire. L’intégration GitHub de Vercel peut
redéployer les prochains commits sur `main`.

## Un seul choix, à votre rythme

- Toucher un symbole lance son image, sa musique et son inspiration.
- Un autre symbole **remplace** le choix précédent.
- Retoucher le symbole choisi ou **Un autre pas de côté** propose un nouvel angle.
- La flèche circulaire renouvelle également le tirage ; aucun compte à rebours.
- La pause visuelle fige la scène et son halo. Le bouton **Musique** coupe ou
  reprend l’ambiance sonore indépendamment de l’animation.

L’aide propose un rituel bref : déposer la situation, partager ses résonances,
choisir une image, la rencontrer, laisser une question ouvrir l’échange, puis
revenir à la situation. Ces étapes ne constituent pas un parcours obligatoire.

## Textes : une scène, un éclairage clinique, une question

`src/data/resonance.ts` contient **96 perspectives réécrites**, huit par symbole.
Chaque perspective comporte :

1. Une scène sensorielle simple : matière, poids, mouvement, lumière, souffle.
2. Un lien avec une expérience professionnelle concrète : attentes, appuis,
   responsabilités, désaccords, rythme du suivi, récit partagé ou fatigue.
3. Deux questions possibles, dont une est présentée au tirage.

Les textes affichés font environ **86 à 111 mots**, invitation et question
comprises. Ils visent une lecture brève, poétique et accessible. Les huit angles
d’un symbole sont proposés avant le début d’un nouveau cycle ; le cycle suivant
évite les derniers angles. Les identifiants récents restent en mémoire pendant
la visite seulement. La variété est écrite et finie, puis renouvelée par les
questions et les variantes visuelles et musicales.

Le moteur prend désormais **un objet `Archetype`**, et non une liste : aucun
croisement automatique de plusieurs symboles. Les anciens textes longs restent
dans `src/data/archetypes.ts` comme ressources éditoriales de référence.

## Douze animations d’encre et d’aquarelle

Les scènes ont chacune leur palette de pigments, des contours d’encre et un
grain fixe. Le grain ne change pas d’une image à l’autre pour éviter le bruit
visuel. Les gestes et les flux suivent des boucles de huit secondes :

| Symbole | Mouvement |
| --- | --- |
| Le Nœud | Les fils changent réellement de courbe et dévoilent ce qu’ils tiennent. |
| La Barque | La coque répond à deux courants, sur un paysage d’eau et de brume. |
| Le Roseau | Deux tiges et leurs feuilles répondent différemment au même vent. |
| Le Mycélium | Des chemins courbes se dessinent, s’atténuent et en rejoignent d’autres. |
| La Graine | L’eau et la terre changent ; une racine fine apparaît. |
| La Cage ouverte | La porte pivote, la lumière varie et l’oiseau reste sur son perchoir. |
| Le Phare | Un faisceau tournant découvre des présences dans la brume. |
| La Rivière | Deux flux colorés gardent leur mouvement autour d’un remous. |
| Les Deux Cercles | Deux cercles d’encre se rapprochent et transforment leur espace commun. |
| La Fissure | Les deux bords d’argile bougent légèrement autour d’une lumière. |
| La Plume | Les barbes fines et le pigment flottent entre plusieurs souffles. |
| Les Pierres | Trois formes minérales réorganisent doucement leurs appuis. |

Les variations de détail sont déterministes à graine identique. Les deux
filaments du Nœud utilisent l’interpolation CSS de chemins SVG ; les navigateurs
plus anciens conservent des déplacements de repli. La cadence réelle dépend du
matériel et n’est pas garantie à 60 images/s.

Un MP4 ou WebM peut toujours remplacer une scène : placer le fichier dans
`public/archetypes/` et renseigner `media` dans `archetypes.ts` avec un poster.
En cas d’erreur, la scène SVG prend le relais. Voir les noms normalisés dans
`public/archetypes/README.md`. Reconstruire après chaque changement.

## Musique procédurale

La musique commence **dans le geste de choix du symbole**, ce qui permet
l’activation d’AudioContext sur mobile. Rien ne joue au chargement de la page.
Si l’utilisateur a explicitement coupé le son, les choix suivants respectent
cette préférence jusqu’à la reprise avec le bouton Musique.

Le moteur utilise Web Audio, sans fichier musical, téléchargement, micro ou API.
Chaque symbole possède un motif, un registre, une densité, un timbre, des
silences et une profondeur de réverbération. Une collection pentatonique
commune rend les passages entre symboles compatibles harmoniquement.
Les phrases évoluent par inversions, réponses, déplacements et silences :
ce n’est pas une courte boucle audio répétée.

Les voix sont synthétisées avec des oscillateurs, des enveloppes et des filtres.
Une réverbération stéréo est calculée localement. Un compresseur et une marge
de niveau limitent les crêtes ; un fondu accompagne chaque changement.
Les anciennes voix sont arrêtées après leur disparition et les nœuds sont
libérés. La musique se suspend lorsque l’onglet est masqué, puis reprend.
Elle s’arrête lorsqu’on quitte la page.

**Aide → Ambiance sonore** permet d’ajuster le volume. Pendant la lecture
vocale, la musique s’abaisse puis revient. Le niveau et le rendu final dépendent
aussi du volume système et des haut-parleurs ou du casque utilisés.

## Architecture

```text
src/
  audio/score.ts              Synthèse, partitions, fondus et ressources audio
  hooks/useAmbientMusic.ts    Activation au choix, coupure, volume, voix et visibilité
  components/
    ResonanceDisk.tsx         Choix unique et navigation clavier
    ArchetypeSymbol.tsx       Douze glyphes dessinés
    ResonanceEmergence.tsx    Bulles et apparition de la scène
    ArchetypeAnimation.tsx    Scène SVG ou média externe
    InkScenes.tsx             Douze scènes d’encre et de pigments
    ArchetypeReading.tsx      Image sensible, éclairage clinique, question
    VoicePlayer.tsx           Lecture vocale du texte affiché
  data/
    archetypes.ts             Identités, médias et textes longs de référence
    artDirection.ts           Palettes des douze scènes et du halo
    resonance.ts              96 perspectives et renouvellement
  styles/
    theme.css                 Interface et accessibilité
    scenes.css                Gestes et boucles des douze scènes
    emergence.css             Apparition, halo, lecture et commandes musicales
```

## Accessibilité et données

- Tab entre les contrôles ; flèches, Début et Fin pour changer le symbole.
- Le disque est un groupe radio : un seul choix est actif.
- **Aide → Affichage → Grands caractères** pour la projection.
- **Sans animation** et le réglage système de réduction des mouvements
  affichent directement une scène fixe et le texte. Le son conserve sa commande.
- Focus visible, descriptions textuelles, aide native refermable avec Échap.
- Lecture vocale volontaire, utilisant si possible une voix française locale.
  L’écoute hors ligne nécessite une voix installée sur l’appareil.

Pas de formulaire clinique, compte applicatif, historique de situations,
localStorage, cookies applicatifs ou analyse d’audience. Les choix et les
graines de tirage restent en mémoire pendant la visite. La voix distante du
système, lorsqu’elle est utilisée, ne reçoit que le texte public affiché.

## PWA et hors ligne

Le build génère le service worker et précache les ressources livrées. L’aide
indique **Disponible hors ligne** une fois le cache installé. Attendre cette
indication avant de fermer la première visite. La musique est synthétisée
localement et ne demande aucune ressource musicale en ligne.

Sur Android compatible : ouvrir l’URL HTTPS puis utiliser **Installer
l’application** ou **Ajouter à l’écran d’accueil**. Les caches peuvent être
supprimés par le navigateur ; un média manquant ou trop lourd peut empêcher le
précache complet. La version de développement n’enregistre pas de service worker.

## Vérifications

- TypeScript strict et construction de production.
- Douze premiers cycles de huit angles sans répétition et contrôle de la longueur
  des 96 textes ; une seule identité d’archétype par tirage.
- Douze partitions distinctes, fréquences compatibles, niveaux et événements
  valides, phrases déterministes et évolutives.
- Chrome desktop : douze choix uniques et scènes, démarrage musical au choix,
  coupure, reprise et maintien du silence après coupure.
- Rendu Web Audio hors ligne des douze ambiances : signal non nul, absence
  de saturation et extinction en fin de rendu.
- Formats mobiles simulés et contrôle des cibles tactiles.
- Service worker : précache, navigation et ressources hors ligne en simulation.

**Restent à vérifier sur matériel réel :** installation et mode avion Android,
écoute subjective au casque et sur téléphone, cadence des animations et lecteur
d’écran. Le navigateur distant ne produit pas de voix de synthèse audible ;
le cas d’indisponibilité est géré. Aucune validation clinique du dispositif
n’est revendiquée.
