# Voix enregistrées, facultatives

La version flash lit le texte de son tirage avec SpeechSynthesis. Un
ancien enregistrement par archétype ne correspond pas automatiquement à une
nouvelle combinaison.

Le composant `VoicePlayer` accepte `audioSrc` avec un fichier placé ici, à
condition qu’il corresponde exactement au texte affiché. Sans ce paramètre,
la synthèse lit les paragraphes et la question du tirage. Si un enregistrement
échoue, une nouvelle action sur le bouton peut utiliser la voix du navigateur.
Reconstruire pour inclure les fichiers livrés dans le cache hors ligne.
