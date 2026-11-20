# Guide administrateur — publier une actualité

La rubrique Actualités est publique en lecture. Les nouvelles y sont publiées uniquement après relecture et validation par les administrateurs du dépôt GitHub `1234LUCIUS/projet-interconnexion-normand-wiki`.

## Traiter une proposition reçue

1. Ouvrir l’issue créée par le formulaire de la page [Actualités](https://1234lucius.github.io/projet-interconnexion-normand-wiki/actualites.html). Les issues commencent par `[Actualité à valider]` et leur contenu est public.
2. Vérifier la pertinence, les dates, les sources et les affirmations techniques. Retirer ou faire retirer tout contenu sensible : clé, QR code, adresse privée, position précise d’un domicile, identifiant d’appareil ou image sans autorisation.
3. Demander des précisions ou corrections dans l’issue si nécessaire. Ne pas recopier le brouillon sur le site tant qu’un administrateur ne l’a pas explicitement validé.
4. Si la proposition est retenue, créer l’article et effectuer sa mise en ligne selon les étapes ci-dessous. Sinon, expliquer la décision dans l’issue puis la fermer.
5. Après publication, répondre à l’issue avec le lien public vers l’actualité, puis la fermer.

Le formulaire crée seulement un brouillon public : il ne déclenche aucune publication automatique et ne garantit pas que la proposition sera retenue.

## Ajouter l’actualité validée

1. Ouvrir le dépôt GitHub et entrer dans `docs/actualites/`.
2. Créer un nouveau fichier HTML, par exemple `installation-repeater-calvados.html`.
3. Rédiger l’article en français en reprenant la structure HTML des autres pages du wiki : titre, description SEO, navigation, contenu et pied de page.
4. Ajouter la carte de l’article dans [`docs/actualites.html`](https://github.com/1234LUCIUS/projet-interconnexion-normand-wiki/blob/main/docs/actualites.html), avec son image, son titre, son résumé et le lien vers le nouveau fichier.
5. Ajouter l’URL de l’article dans [`docs/sitemap.xml`](https://github.com/1234LUCIUS/projet-interconnexion-normand-wiki/blob/main/docs/sitemap.xml).
6. Relire les liens, les textes alternatifs et les informations sensibles. Ne fusionner sur `main` qu’après validation d’un administrateur.

Après publication, GitHub Pages sert la page sous :

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
