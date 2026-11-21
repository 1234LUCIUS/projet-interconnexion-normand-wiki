# Guide rapide — créer une actualité

La rubrique Actualités est publique en lecture. Seuls les administrateurs du dépôt GitHub peuvent publier ou modifier un article.

## Pour proposer une actualité

Un visiteur ou un membre du projet peut utiliser le [formulaire de proposition d’actualité](https://github.com/1234LUCIUS/projet-interconnexion-normand-wiki/issues/new?template=proposer-une-actualite.yml). La proposition devient une issue publique, mais elle ne publie rien automatiquement.

Les administrateurs doivent relire la proposition, vérifier les informations et les photos, supprimer toute donnée sensible, puis décider si elle doit être publiée.

## La méthode simple pour publier

Après relecture, l’administrateur n’a plus besoin de créer manuellement le fichier Markdown : il suffit d’ajouter le label GitHub **`publication-validée`** à l’issue. L’action GitHub vérifie les droits de l’administrateur, transforme automatiquement le formulaire en article Markdown et le pousse dans `main`.

1. Pour une publication automatique, ouvrir l’issue proposée et ajouter le label **`publication-validée`**. Les étapes ci-dessous restent disponibles pour une publication manuelle ou une correction.
2. Ouvrir le dossier [`docs/actualites/`](https://github.com/1234LUCIUS/projet-interconnexion-normand-wiki/tree/main/docs/actualites).
3. Copier le fichier [`_modele-article.md`](https://github.com/1234LUCIUS/projet-interconnexion-normand-wiki/blob/main/docs/actualites/_modele-article.md).
4. Le renommer avec des mots simples, par exemple `installation-repeater-calvados.md`.
5. Remplacer le titre, la date, le résumé et le texte d’exemple.
6. Ajouter les photos dans [`docs/assets/actualites/`](https://github.com/1234LUCIUS/projet-interconnexion-normand-wiki/tree/main/docs/assets/actualites), puis modifier le chemin de la photo dans l’article.
7. Enregistrer le fichier et valider la modification sur la branche `main`.

La page [Actualités](https://1234lucius.github.io/projet-interconnexion-normand-wiki/actualites.html) et le sitemap détectent automatiquement les articles Markdown placés dans ce dossier. Il n’est plus nécessaire de modifier une page HTML ou le sitemap.

## Ajouter des photos

Déposer chaque photo validée dans `docs/assets/actualites/`, puis utiliser ce format dans le fichier Markdown :

```markdown
![Répéteur MeshCore installé dans le Calvados](../assets/actualites/repeater-calvados.jpg)
```

Plusieurs photos peuvent être ajoutées dans le même article. Utiliser des noms sans espaces ni accents et renseigner un texte alternatif décrivant chaque image.

Pour illustrer précisément le texte, placer l’image Markdown directement après le paragraphe concerné dans le brouillon. Le workflow conserve cet emplacement lors de la génération automatique. Le champ « Photos à publier » sert uniquement aux photos supplémentaires qui n’ont pas été placées dans le texte. Deux photos consécutives sont affichées côte à côte sur ordinateur, sans recadrage, puis l’une sous l’autre sur mobile.

## Avant de publier

- Relire l’article et vérifier les liens.
- Vérifier que les photos sont validées par un administrateur.
- Ne jamais publier de clé, QR code, adresse privée, visage identifiable sans autorisation ou position précise d’un domicile.
- Ne pas publier automatiquement une proposition reçue d’un visiteur : elle doit être relue et validée par l’équipe.
- Après publication, répondre à l’issue avec le lien public vers l’article, puis la fermer.

Pour une proposition ou une correction, utiliser le [Discord officiel](https://discord.gg/HnAfYUSU82) ou l’adresse [projet.interconnection.normand@gmail.com](mailto:projet.interconnection.normand@gmail.com).

## Publier un billet du Blog

Le Blog suit exactement le même principe de modération que les Actualités. Utiliser le [formulaire de proposition de billet](https://github.com/1234LUCIUS/projet-interconnexion-normand-wiki/issues/new?template=proposer-un-billet-blog.yml). Le visiteur peut proposer un brouillon, des sources et des photos, mais rien n’est publié à l’envoi.

Après relecture, vérification des liens et contrôle des photos, ajouter uniquement le label **`blog-publication-validée`** à l’issue. Le workflow vérifie que le labeler dispose des droits `admin`, `maintain` ou `write`, crée automatiquement un fichier dans [`docs/blog/`](https://github.com/1234LUCIUS/projet-interconnexion-normand-wiki/tree/main/docs/blog), puis le pousse dans `main`. La page [Blog](https://1234lucius.github.io/projet-interconnexion-normand-wiki/blog.html) et le sitemap le détectent automatiquement.

Les photos du billet peuvent être déposées dans [`docs/assets/blog/`](https://github.com/1234LUCIUS/projet-interconnexion-normand-wiki/tree/main/docs/assets/blog). Pour un billet nécessitant une correction, modifier le fichier publié dans `docs/blog/` comme administrateur ; ne pas republier l’issue avec le même label.

Le suivi de l’exécution se fait dans l’onglet **Actions**, avec le workflow **Publier une actualité ou un billet Blog validé**. En cas d’échec, ne pas ajouter le label en boucle : consulter le journal, corriger l’issue ou le workflow, puis relancer l’exécution depuis Actions. Après réussite, répondre à l’issue avec le lien public et la fermer.
