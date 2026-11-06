# La minute d’Intervision Résonante

**Le pas de côté métaphorique qui inspire•°**

Un générateur local de métaphores filées et de pistes de conte pour l’intervision
résonante. Une équipe évoque oralement une situation clinique, choisit **de 1 à 3
émojis**, puis découvre deux propositions :

- **Le pas de côté** : une hypothèse de regard et des questions pour déplacer le récit.
- **Le pas conté** : deux titres possibles, une trame de conte et une invitation à inventer la suite.

Les images retenues se rencontrent dans un même village au bord d’un fleuve.
Chaque motif apporte un obstacle et un déplacement ; la fin reste ouverte.
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
**298 combinaisons** de 1 à 3 émojis avec huit variantes chacune. Les tests
contrôlent la contribution de chaque image, les titres, les questions, les bornes
de sélection et la reproductibilité. `check:pwa` teste le service worker généré,
la navigation et les ressources hors ligne en simulation.

`dist/` est un site statique autonome, à servir en HTTPS ou sur localhost,
à la racine ou dans un sous-répertoire. Les fichiers ne se lancent pas en `file://`.

## Parcours

1. Choisir entre un et trois émojis. Les émojis sont disposés en cercle autour d’un disque de bulles animées. Les boutons sélectionnés sont colorés,
   cochées et numérotées. La sélection est aussi affichée sous la grille.
2. Retoucher une carte ou sa pastille pour la retirer ; **Tout effacer** repart de zéro.
   Un quatrième choix ne remplace aucun choix existant.
3. **Inspirer un pas de côté et un pas conté** compose la proposition et place le
   focus clavier sur son titre. La génération est indisponible sans émoji.
4. **Une autre piste avec ces émojis** renouvelle les variantes avec les images
   du récit affiché. **Modifier mes émojis** ramène au sélecteur.

Une sélection modifiée ne change pas silencieusement le texte déjà affiché :
un message invite à générer une nouvelle piste. Le récit garde ses émojis d’origine.

Les bulles sont animées en CSS, sans scène SVG dans le disque. La préférence
système de réduction des mouvements affiche une composition fixe.
Le guide détaille le rituel et permet de régler le volume musical. Échap ferme
le guide. Les préférences et sélections restent en mémoire pendant la visite.

## Composition et personnalisation

`src/data/tales.ts` définit les émojis, les motifs narratifs, leurs déplacements
et leurs questions. Le générateur réunit ces motifs dans une trame commune et
varie les cadres, les titres et les fins. L’ordre des choix donne l’ordre de leurs
rencontres. Il compose à partir de textes écrits ; la variété est finie.
Il ne lit ni n’analyse la situation clinique évoquée par l’équipe.

`src/data/resonance.ts` conserve les 96 métaphores éditoriales et fournit le cycle
de huit variantes sans répétition, puis évite les trois dernières variantes au
cycle suivant. `src/data/archetypes.ts` conserve les identités des douze images
et leurs ressources longues de référence. Les anciennes scènes SVG restent
disponibles dans les composants pour de futurs usages ; les choix utilisent des émojis.

## Son, accessibilité et données

Une ambiance Web Audio commence à la génération, selon le premier émoji choisi.
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
