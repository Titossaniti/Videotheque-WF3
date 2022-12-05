# Exercice à réaliser
## sur plusieurs jours

### JOUR 1 :

Je veux créer une vidéothèque, à terme, elle sera en mesure d'accueillir plusisurs centaines, voire milliers d'oeuvres. Pour le moment, je n'ai que 6 films mais je ne veux pas créer d'objet manuellement.

J'ai besoin, d'un titre, d'un réalisateur, d'une durée en minutes, d'une durée visionnée en minutes et d'une courte description.

Je dois afficher toutes ces oeuvres dans la console (pour le moment).

### JOUR 2 :

Afficher le contenu dans le HTML.

### JOUR 3 :

mise en page

### JOUR 4 :

Calculer le % visionnage de temps regardé

Pour chaque film, j'ai besoin d'un ID (unique donc). Grâce à la propriété [URLSearchParams][https://developer.mozilla.org/fr/docs/Web/API/URLSearchParams], je veux récupérer cet ID sur une page (vue produit) qui affichera la fiche complète de mon film.

/!\ Pensez à définir le lien vers la vue au moyen de l'id, par exemple :

mon lien xxxxxxx étant l'id

const monFilm = new URLSearchParams(window.location.search).get("id");