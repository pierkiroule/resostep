# Animations des douze archétypes

Les douze scènes d’encre et d’aquarelle sont générées en SVG dans
`src/components/InkScenes.tsx`, animées par `src/styles/scenes.css`.
Leurs palettes sont définies dans `src/data/artDirection.ts`. Le grain reste fixe ;
les gestes, les courants, les pigments et les appuis bougent en boucles de huit secondes.
Ces scènes procédurales sont remplaçables par des médias artistiques.

Pour remplacer une scène, déposer ici sa vidéo puis renseigner `media` dans
`src/data/archetypes.ts`. Exemple :

```ts
media: {
  type: 'video',
  src: './archetypes/01-noeud.webm',
  poster: './archetypes/01-noeud.jpg',
},
```

MP4 H.264 ou WebM, sans son, boucle de 5 à 8 secondes dont la dernière image
rejoint la première. Le lecteur utilise autoplay, loop, muted et playsInline.
Un poster fixe est conseillé pour la réduction des mouvements. Si le média
échoue ou si son poster manque en mode fixe, la scène SVG prend le relais.
Pour une image animée, utiliser `type: 'image'` ; en réduction des mouvements,
la scène SVG fixe remplace l’image animée.

Noms recommandés :

| N° | Base du nom de fichier |
| --- | --- |
| 01 | 01-noeud |
| 02 | 02-barque |
| 03 | 03-roseau |
| 04 | 04-mycelium |
| 05 | 05-graine |
| 06 | 06-cage-ouverte |
| 07 | 07-phare |
| 08 | 08-riviere |
| 09 | 09-deux-cercles |
| 10 | 10-fissure |
| 11 | 11-plume |
| 12 | 12-pierres |

Relancer `npm run build` après chaque changement : les fichiers seront inclus
automatiquement dans le cache hors ligne. Éviter les vidéos lourdes : le
précache échoue si le quota du navigateur est dépassé.
