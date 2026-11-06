# La minute d’Intervision Résonante

**Le pas de côté métaphorique qui inspire•°**

Un générateur local de métaphores filées et de pistes de conte pour l’intervision
résonante. Une équipe évoque oralement une situation clinique, choisit **un seul émoji**, puis découvre deux propositions :

- **Le pas de côté** : une hypothèse de regard et des questions pour déplacer le récit.
- **Le pas conté** : deux titres possibles, une trame de conte et une invitation à inventer la suite.

Une seule image porte le conte : une scène de départ, une tension et une fin
écrite pour cette même scène. Aucun souvenir d’un autre émoji n’est ajouté.
La fin reste ouverte.
Aucun émoji ne reçoit automatiquement le rôle d’un jeune, d’un proche ou d’un soignant.
Les métaphores se discutent, se prolongent ou s’écartent. Elles ne posent pas de
diagnostic et ne recommandent aucune conduite thérapeutique.

## Installation et vérifications

Node.js **24.x** et npm. Aucun backend, secret ou service d’IA.

```bash
npm ci
npm run dev
```

```bash
npm run check
npm run build
npm run check:pwa
npm run preview
```

`check` vérifie TypeScript, les ressources éditoriales, les partitions et les
**12 choix d’émoji**, chacun avec huit variantes. Les tests contrôlent le lien
entre titre, scène, fin, exemple clinique et questions. Ils refusent les anciens
mélanges de plusieurs émojis. `check:pwa` teste le service worker généré,
la navigation et les ressources hors ligne en simulation.

`dist/` est un site statique autonome, à servir en HTTPS ou sur localhost,
à la racine ou dans un sous-répertoire. Les fichiers ne se lancent pas en `file://`.

## Parcours

1. Choisir **un seul émoji** autour du disque de bulles. Le choix actif est
   coloré, coché et repris sous le disque. Toucher un autre émoji le remplace.
2. **Inspirer un pas de côté et un pas conté** compose la proposition et place le
   focus clavier sur le titre du récit. La génération est indisponible sans choix.
3. Le conte vient d’abord, puis son lien avec la pratique, un exemple fictif,
   deux questions courtes et un retour à la situation. **Prolonger ou renommer
   le conte** ouvre une invitation narrative et un autre titre.
4. **Une autre piste avec cet émoji** renouvelle le récit affiché.
   **Choisir un autre émoji** ramène au disque. Les flèches du clavier changent
   le choix ; Début et Fin rejoignent le premier et le dernier émoji.

Changer de choix ne modifie pas silencieusement le texte déjà affiché : un
message invite à générer un nouveau conte. Le récit garde son émoji d’origine.
Le bouton × de la pastille retire le choix.

Les bulles sont animées en CSS, sans scène SVG dans le disque. La préférence
système de réduction des mouvements affiche une composition fixe.
Le guide détaille le rituel et permet de régler le volume musical. Échap ferme
le guide. Les préférences et sélections restent en mémoire pendant la visite.

## Composition et personnalisation

`src/data/narratives.ts` contient **24 noyaux narratifs**, 48 titres et 96 fins
liées à leur scène. Chaque récit contient exactement trois paragraphes liés. La durée affichée est une estimation de lecture, sans compte à rebours.

`src/data/clinicalLenses.ts` contient **12 regards d’intervision** : éprouvés de
l’équipe, relations, temporalités, soutiens, transmissions, continuité famille–école–soins.
Chaque regard fournit une hypothèse, une question sur les éprouvés, une question
relationnelle et une invitation à revenir à un épisode concret. Ces textes
n’assignent aucun rôle clinique aux images et ne constituent pas une validation clinique.

`src/data/clinicalBridges.ts` relie chacune des **24 scènes** à la pratique :
ce qui se joue dans le conte, ce que cela peut évoquer dans le soin, et un exemple
fictif en pédopsychiatrie. Ce lien suit la scène réellement tirée, même lorsque
le titre change. Il s’agit de lectures possibles, sans correspondance
fixe entre un personnage et une personne de la situation. Les deux questions et
le retour à la situation suivent aussi la variante affichée. Les questions restent
courtes (14 mots au maximum).

`src/data/tales.ts` accepte un objet `Archetype` unique et refuse les listes.
Il compose exclusivement l’ouverture, la tension et l’une des fins de la même
scène. Chaque émoji a son propre cycle de huit variantes ; un nouveau cycle évite
les trois dernières lectures de cet émoji, même après un changement de choix.

Le générateur utilise des textes écrits ; sa variété est finie. Il ne lit ni
n’analyse la situation clinique évoquée par l’équipe. Les 96 métaphores de
`src/data/resonance.ts` et les textes longs de `src/data/archetypes.ts` restent
disponibles comme ressources éditoriales, séparées du corpus de contes affiché.
Les anciennes scènes SVG restent disponibles dans les composants ; le disque
actuel ne les utilise pas.

## Son, accessibilité et données

Une ambiance Web Audio commence à la génération, selon l’émoji choisi.
Le bouton **Musique** coupe ou reprend le son et respecte la coupure pendant la
visite. Le volume diminue pendant la lecture vocale et la musique se suspend
lorsque l’onglet est masqué. Aucun téléchargement musical ni micro.

**Écouter** lit volontairement le conte avec la synthèse du navigateur. Le rendu
dépend des voix installées ; une voix française locale permet l’écoute hors ligne.
Les noms et états des émojis sont accessibles au clavier et aux lecteurs d’écran.
Leur apparence varie selon le système.

Aucun formulaire clinique, compte, historique de situations, cookie applicatif,
localStorage ou analyse d’audience. Les textes sont composés localement.
La synthèse vocale distante du système, si utilisée, ne reçoit que le texte public.

## PWA et déploiement

Le build précache les ressources. Le guide indique **Disponible hors ligne**
après installation du cache. La version de développement n’enregistre pas de
service worker. Les caches peuvent être supprimés par le navigateur.

Vercel : importer `pierkiroule/resostep`, racine du dépôt, Node.js 24.x,
installation `npm ci`, construction `npm run check && npm run build && npm run check:pwa`,
sortie `dist`, aucune variable d’environnement. `vercel.json` conserve les règles
et paramètres de déploiement.

Restent des essais manuels sur matériel réel : installation Android et mode avion,
lecteur d’écran, voix française et écoute subjective. Aucune validation clinique
n’est revendiquée.
