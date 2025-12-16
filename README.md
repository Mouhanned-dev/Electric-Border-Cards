# Electric Border Cards (HTML/CSS/JS)

Projet statique montrant trois cartes avec une bordure électrique animée (SVG turbulence), converti depuis une implémentation React vers du HTML/CSS/JS pur.

## Aperçu
- Effet de bordure animé via filtres SVG (`feTurbulence`, `feOffset`, `feDisplacementMap`).
- Couches de glow et overlays pour un rendu dramatique.
- Interactions au survol et au focus clavier (accessibilité).
- Sans dépendances ni build : double-cliquez sur `index.html`.

## Structure
- `index.html` — markup de la page et définition des filtres SVG.
- `styles.css` — styles, glow, overlays, responsivité, dimensions uniformes.
- `script.js` — activation des effets au focus clavier (`data-active`).

## Utilisation locale
1. Ouvrir `index.html` dans votre navigateur.
2. Survoler ou naviguer au clavier entre les cartes pour voir les effets.

## Personnalisation
- Couleurs par carte (sur l’élément `.card-wrapper`) :
  - `--color`, `--light`, `--color-80`, `--color-99`, `--gradient`
- Dimensions uniformes :
  - `--width: 350px; --height: 500px`
- Contenu :
  - Modifier le `label`, `title` et `description` dans `index.html`.

## Remarques
- Les animations SVG (SMIL) sont supportées par les navigateurs modernes. Aucun JavaScript n’est requis pour l’animation du filtre.

