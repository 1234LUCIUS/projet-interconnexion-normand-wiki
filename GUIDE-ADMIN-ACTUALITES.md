# Guide administrateur — publier une actualité

Cette rubrique est publique en lecture, mais la publication est réservée aux administrateurs du dépôt GitHub `1234LUCIUS/projet-interconnexion-normand-wiki`.

## Où rédiger un article ?

1. Ouvrir le dépôt GitHub.
2. Entrer dans le dossier [`docs/actualites/`](https://github.com/1234LUCIUS/projet-interconnexion-normand-wiki/tree/main/docs/actualites).
3. Créer un nouveau fichier HTML, par exemple `installation-repeater-calvados.html`.
4. Rédiger l’article en français en reprenant la structure HTML des autres pages du wiki : titre, description SEO, navigation, contenu et pied de page.
5. Ajouter la carte de l’article dans [`docs/actualites.html`](https://github.com/1234LUCIUS/projet-interconnexion-normand-wiki/blob/main/docs/actualites.html), avec son image, son titre, son résumé et le lien vers le nouveau fichier.
6. Ajouter l’URL de l’article dans [`docs/sitemap.xml`](https://github.com/1234LUCIUS/projet-interconnexion-normand-wiki/blob/main/docs/sitemap.xml).
7. Relire les liens, les textes alternatifs et les informations sensibles, puis valider la modification sur `main`.

Après le commit, GitHub Pages publie automatiquement la page sous :

`https://1234lucius.github.io/projet-interconnexion-normand-wiki/actualites/nom-du-fichier.html`

## Ajouter des photos à un article

1. Ajouter les images validées dans `docs/assets/actualites/` — ce dossier doit être créé si nécessaire.
2. Utiliser des noms simples, sans espace ni accent, par exemple `repeater-calvados-2026.jpg`.
3. Dans l’article situé dans `docs/actualites/`, utiliser un chemin relatif :

```html
<figure>
  <img src="../assets/actualites/repeater-calvados-2026.jpg"
       alt="Répéteur MeshCore installé dans le Calvados">
  <figcaption>Installation documentée par l’équipe du projet.</figcaption>
</figure>
```

Les photos doivent être validées par un administrateur. Ne jamais publier de clé, QR code, adresse privée, visage identifiable sans autorisation ou position précise d’un domicile.

## Règles de publication

- Les visiteurs peuvent lire les articles et voir les images, mais ne peuvent pas publier directement.
- Chaque article est relu et validé par un administrateur avant mise en ligne.
- Les informations techniques doivent rester cohérentes avec la documentation MeshCore et Meshtastic du wiki.
- Pour une proposition ou une correction, utiliser le [Discord officiel](https://discord.gg/HnAfYUSU82) ou l’adresse [projet.interconnection.normand@gmail.com](mailto:projet.interconnection.normand@gmail.com). La proposition ne devient pas automatiquement un article publié.
