# La minute de l’Intervision Résonante :

**Le pas de côté métaphorique !**

Une équipe évoque oralement une situation clinique, puis choisit **un seul émoji**.
L’application propose une métaphore filée courte, un lien possible avec la pratique
et **deux questions simples** pour l’intervision en pédopsychiatrie.

L’image se prolonge sans conte, personnage ni dénouement. Elle n’attribue aucun rôle
au jeune, à ses proches ou aux professionnels. Les liens proposés se discutent,
se déplacent ou s’écartent ; ils ne constituent ni diagnostic ni prescription.

## Installation

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
48 métaphores : un seul choix, cycles sans répétition, liens cliniques et questions
associés au bon angle. Les deux questions restent limitées à 14 mots chacune.
`check:pwa` teste le service worker généré et les ressources hors ligne en simulation.

## Parcours

1. Choisir un émoji autour du disque. Le choix actif est coché et repris sous le
   disque. Toucher un autre émoji le remplace ; le bouton × le retire.
2. **Inspirer un pas de côté** affiche une métaphore, un lien possible avec la
   clinique et deux questions. Le focus clavier rejoint le titre.
3. **Un autre angle avec cet émoji** renouvelle la métaphore.
   **Choisir un autre émoji** ramène au disque.

Un changement de choix ne modifie pas silencieusement le texte affiché : un message
invite à proposer une nouvelle métaphore. Les flèches, Début et Fin permettent de
parcourir les émojis au clavier. Échap ferme le guide.

## Répertoire et composition

`src/data/metaphors.ts` contient **48 métaphores filées**, quatre par émoji.
Chaque image est développée en un paragraphe court. Les quatre variantes sont
rencontrées avant un nouveau cycle ; la dernière n’est pas répétée au début du
cycle suivant. Chaque émoji conserve son cycle quand on change de choix.

`src/data/clinicalLinks.ts` et `src/data/clinicalLenses.ts` relient ces images à
la pratique : liens, éprouvés de l’équipe, temporalités, soutiens, transmissions,
points de vue et continuité des soins. Deux variantes d’image partagent un même
angle clinique. Le générateur ne lit ni n’analyse la situation évoquée.
La variété des textes écrits est finie.

Les anciens contes et leur moteur ont été retirés. Les textes de référence de
`src/data/resonance.ts` et `src/data/archetypes.ts` restent des ressources
éditoriales distinctes du répertoire affiché.

## Disque, son et accessibilité

La sélection déclenche une éclosion de pigments, des ondes lumineuses et des
particules dans le disque. Les couleurs suivent l’émoji choisi. Les bulles et un
ruban de lumière évoluent doucement ensuite. Ces effets sont en CSS, sans scène
SVG ni média distant. La réduction des mouvements du système garde une composition
fixe et masque les ondes et particules de sélection.

Une ambiance Web Audio commence lors de la génération selon l’émoji choisi.
**Musique** coupe ou reprend le son. Le guide permet de régler le volume.
**Écouter** lit la métaphore, son lien clinique et les deux questions avec la voix
du navigateur ; la musique s’abaisse pendant cette lecture. La qualité dépend des
voix installées. Une voix locale est nécessaire pour une lecture vocale hors ligne.

Aucun formulaire clinique, compte, historique de situations, cookie applicatif,
localStorage ou analyse d’audience. Les choix restent en mémoire pendant la visite.
La synthèse vocale distante du système, si utilisée, ne reçoit que le texte public.

## PWA et déploiement

Le build précache les ressources. La version de développement n’enregistre pas de
service worker. Les caches peuvent être supprimés par le navigateur.

`dist/` est un site statique autonome à servir en HTTPS ou sur localhost, à la
racine ou dans un sous-répertoire. Il ne se lance pas en `file://`.

Vercel : importer `pierkiroule/resostep`, racine du dépôt, Node.js 24.x,
installation `npm ci`, construction `npm run check && npm run build && npm run check:pwa`,
sortie `dist`, aucune variable d’environnement.

Restent des essais sur matériel réel : installation et mode avion, lecteur d’écran,
voix française, écoute et fluidité des animations. Aucune validation clinique n’est
revendiquée.
