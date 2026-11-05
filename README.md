# La minute d’Intervision Résonante •°

**Version flash métaphorique — Le pas de côté résonant !**

Quand l’équipe se sent bloquée dans une situation complexe de pédopsychiatrie,
un tirage d’un à trois symboles ouvre une autre façon de regarder. Les symboles
se relient ; des bulles frémissent, une composition d’encre émerge et le disque
se charge d’un halo aquarellé. Une inspiration et une question viennent soutenir
l’échange. Un nouveau tirage renouvelle l’angle avec les mêmes symboles.

L’application explore les résonances des professionnels. Elle n’interprète
ni le jeune ni sa famille, n’analyse aucun récit clinique et ne recommande
aucune conduite thérapeutique. Le texte est une proposition à associer, discuter
ou écarter, jamais une explication de la situation.

## Installation

Node.js **24.x** et npm. Aucun secret, serveur d’inférence ou
compte applicatif n’est nécessaire.

```bash
npm ci
npm run dev
```

Ouvrir l’URL affichée par Vite. Pour construire et vérifier la version de
production :

```bash
npm run check
npm run build
npm run check:pwa
npm run preview
```

`dist/` est un site statique autonome, à servir en HTTPS ou sur localhost.
L’ouverture directe en `file://` ne suffit pas. Les chemins relatifs autorisent
un hébergement à la racine ou dans un sous-répertoire.

## Déploiement Vercel

Le dépôt est prêt à être importé dans Vercel. Aucune variable d’environnement
ni base de données n’est nécessaire.

1. Ouvrir [Vercel → New Project](https://vercel.com/new).
2. Importer **pierkiroule/resostep** et garder la branche de production **main**.
3. Garder la racine du dépôt comme Root Directory, puis cliquer sur **Deploy**.

Les paramètres sont déjà définis dans `vercel.json` et `package.json` :

| Paramètre | Valeur |
| --- | --- |
| Framework | Vite |
| Node.js | 24.x |
| Installation | `npm ci` |
| Construction | `npm run check && npm run build && npm run check:pwa` |
| Sortie | `dist` |
| Variables d’environnement | Aucune |

La construction vérifie les contenus, le moteur de variations et le cache PWA
avant de livrer les fichiers statiques. Les en-têtes évitent de figer l’ancien
service worker et l’ancienne page HTML ; les assets dont le nom contient un
hash peuvent être conservés longtemps. L’application navigue par ancres
(`#disque`, `#lecture`) : aucune réécriture de routes n’est nécessaire.

Après la première publication, ouvrir l’URL HTTPS, attendre **Disponible hors
ligne** dans l’aide, puis vérifier la réouverture en mode avion sur l’appareil.
Les prochains commits sur `main` pourront être redéployés par l’intégration
GitHub de Vercel. Ce dépôt ne contient aucun identifiant Vercel de projet ou
d’équipe : ils seront créés lors de son import.

Références : [configuration Vercel](https://vercel.com/docs/project-configuration/vercel-json)
et [versions de Node.js](https://vercel.com/docs/functions/runtimes/node-js/node-js-versions).

## Le rituel flash

1. Un professionnel évoque oralement la situation. Aucune saisie dans l’application.
2. Chacun laisse venir ce que cela lui fait éprouver, imaginer et penser.
3. Choisir un, deux ou trois glyphes, sans obligation de consensus.
4. Après environ 2,2 secondes de frémissement, une composition et un angle émergent.
5. Une question ouvre l’échange. Des associations contradictoires peuvent coexister.
6. Revenir à la situation : qu’est-ce qui a changé dans notre manière de la regarder ?

Toucher un symbole choisi le retire. Un quatrième remplace le plus ancien.
La flèche circulaire et le bouton **Un autre pas de côté** renouvellent le tirage
sans changer les symboles. Le bouton en bas du texte ramène le regard et le
focus au disque. La durée du rituel reste libre : aucun compte à rebours.

## Le moteur de variété

`src/data/resonance.ts` contient :

- **96 perspectives rédigées** : huit angles par symbole, centrés sur le cadre,
  les temporalités, les mandats, les places, les appuis, les récits et les
  résonances de l’équipe. Chacune possède deux questions possibles.
- **66 rencontres spécifiques** : chaque paire de symboles possède un pont
  métaphorique et une question propres.
- Un moteur de composition pour les **298 sélections** possibles de un à trois
  symboles. Le choix du point de vue principal, les échos des autres symboles,
  la question et l’ouverture finale varient avec la graine du tirage.
- Une mémoire temporaire des angles rencontrés. Dans un premier cycle avec
  un seul symbole, ses huit angles sont proposés sans répétition. Quand le
  répertoire disponible a été parcouru, un nouveau cycle évite les angles
  les plus récents.

La variété est combinatoire, **pas infinie**. Les textes sont écrits et recomposés,
sans modèle d’IA ni API. Ils ne sont pas ajustés à une situation que l’application
ne connaît pas. Les 12 textes longs de la première version restent dans
`src/data/archetypes.ts` comme ressources éditoriales de référence ; la version
flash affiche les perspectives du nouveau moteur.

Pour enrichir le répertoire, ajouter des perspectives à un symbole, en gardant
le titre, le corps et les deux questions. Pour une rencontre, modifier sa clé
normalisée dans `crossings`. Privilégier des écarts de lecture concrets sur
l’expérience professionnelle, sans attribuer de motivations au patient ou à sa
famille. Adapter le contrôle du nombre de perspectives si le répertoire grandit.

## Visuels et personnalisation

L’interface est noire et blanche. Les douze glyphes SVG ont une écriture d’encre
commune. Seuls les pigments, certaines parties des scènes et le halo apportent
de la couleur. Les options d’affichage restent dans l’aide.

Chaque tirage génère des positions de bulles, de petites particules, des
inclinaisons, une palette de halo et une composition des scènes choisies.
Les mouvements reposent sur CSS et SVG ; aucun fichier GIF lourd ni dessin
bitmap n’est nécessaire.

```text
src/
  components/
    ResonanceDisk.tsx        Choix multiple, glyphes, liens et halo
    ArchetypeSymbol.tsx      Les douze glyphes dessinés
    ResonanceEmergence.tsx   Bulles et composition procédurale
    ArchetypeAnimation.tsx   Scène SVG ou média de remplacement
    InkScenes.tsx            Douze scènes d’encre animées
    ArchetypeReading.tsx     Inspiration flash, question, renouvellement
    VoicePlayer.tsx          Lecture du texte effectivement affiché
  data/
    archetypes.ts            Identités, médias, textes longs de référence
    resonance.ts             Perspectives, croisements, moteur et historique
  styles/
    theme.css                Interface, lecture et accessibilité
    scenes.css               Boucles des douze scènes
    emergence.css            Frémissement, halo, apparition et composition
  App.tsx                    États du tirage, aide et préférences
public/
  archetypes/                Futurs médias artistiques
  audio/                     Enregistrements facultatifs
  manifest.webmanifest
scripts/
  build-sw.mjs               Précache de toutes les ressources livrées
  check-content.mjs          Textes longs de référence
  check-resonance.mjs        Répertoire, 298 sélections et non-répétition
  check-pwa.mjs              Scénarios hors ligne en mémoire
```

Les scènes SVG sont procédurales. Pour les remplacer, ajouter un fichier dans
`public/archetypes/` et renseigner `media` dans `archetypes.ts` :

```ts
media: {
  type: 'video',
  src: './archetypes/01-noeud.webm',
  poster: './archetypes/01-noeud.jpg',
},
```

MP4 H.264 ou WebM muet, boucle de 5 à 8 secondes. Le poster sert d’alternative
fixe. En cas d’erreur, la scène SVG prend le relais. Les noms normalisés sont
indiqués dans `public/archetypes/README.md`. Reconstruire après chaque changement.

## Lecture et accessibilité

- **Aide → Affichage → Grands caractères** : lecture pour la projection.
- **Sans animation** : conserve les glyphes et les textes, sans frémissement,
  halo animé ou scène en mouvement ; le texte apparaît immédiatement.
- **Pause** : fige les scènes et le halo à leur position courante.
- **Clavier** : Tab pour les contrôles ; flèches, Début et Fin dans le disque ;
  Entrée ou Espace pour choisir ou retirer un symbole.
- **Réduction des mouvements** : respecte le réglage système, affiche une scène
  fixe et fait apparaître directement l’inspiration.
- Noms accessibles pour les glyphes, description des scènes, focus visible,
  états de sélection annoncés, aide native refermable avec Échap.

La lecture vocale utilise SpeechSynthesis sur **le texte du tirage affiché**.
Elle reste volontaire, s’arrête au changement de tirage et ne démarre jamais
avec l’animation. Les énoncés sont découpés pour limiter les interruptions sur
mobile. Une voix française locale est privilégiée ; son timbre dépend du système.
L’écoute hors ligne demande une voix installée sur l’appareil. Si une voix
distante est utilisée, elle ne reçoit que le texte public de la métaphore.
Le composant `VoicePlayer` accepte aussi `audioSrc` pour un enregistrement
correspondant exactement au texte d’un tirage.

## PWA et hors ligne

Le build précache le code, les contenus, le style, les icônes et tous les médias
livrés. Après installation du cache, l’aide indique **Disponible hors ligne**.
Attendre ce message avant de fermer la première visite.

Sur Android compatible : ouvrir l’URL HTTPS puis utiliser **Installer
l’application** ou **Ajouter à l’écran d’accueil** dans le navigateur.
L’accès au lien hébergé peut dépendre des droits de l’hébergeur ; aucun compte
n’est géré dans le code de l’application.

Une mise à jour change la version du cache et ne supprime que les anciens
caches de cette application. Une page déjà ouverte peut rester sur son ancienne
version jusqu’à l’actualisation. Les navigateurs peuvent effacer leurs caches ;
un média introuvable, lourd ou un quota insuffisant peut empêcher le précache.
Le mode développement n’enregistre pas de service worker.

## Données

Pas de formulaire, historique clinique, localStorage, cookies applicatifs,
analyse d’audience, backend d’inférence ou appel à une API d’IA.
Les choix, les graines de tirage et les identifiants des angles récents restent
uniquement en mémoire pendant la visite. Le cache PWA contient les ressources
techniques et éditoriales livrées, jamais de données de patients.

## Vérifications et limites

- TypeScript strict et build de production.
- Contrôle du répertoire : 96 perspectives et 66 ponts métaphoriques.
- Test des 298 sélections possibles ; génération déterministe à graine identique ;
  premier cycle sans répétition et évitement des derniers angles.
- Chrome desktop : choix simple et multiple, glyphes, frémissement, scène fusionnée,
  halo, changement de texte, aide et modes de lecture contrôlés dans le navigateur.
- Cadres de 320, 360, 390 et 768 pixels : cibles d’au moins 44 × 44 pixels et
  absence de débordement contrôlées.
- Service worker : précache, navigation et ressources hors ligne en simulation.

**Non vérifié sur matériel réel :** Android, installation depuis son menu,
mode avion, cadence de 30–60 images/s et lecteur d’écran. La voix du navigateur
distant n’a pas produit de son ; l’indisponibilité est gérée. La qualité des voix
reste à vérifier sur les appareils utilisés. Aucune validation clinique ou
promesse d’efficacité du dispositif n’est revendiquée.
