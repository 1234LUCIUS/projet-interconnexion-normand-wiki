# Guide administrateur — publier un billet du Blog

Le Blog est une rubrique éditoriale distincte des Actualités. **Chaque billet doit être relu et validé par les administrateurs avant sa mise en ligne.** Aucun formulaire public ne publie de billet de Blog : le formulaire accessible depuis la page Actualités est réservé aux nouvelles du projet.

## Ajouter un billet

1. Créer un fichier Markdown dans `docs/blog/`, avec un nom simple et explicite, par exemple `retour-essai-meshcore.md`.
2. Ajouter les métadonnées Jekyll et rédiger le contenu en français :

   ```markdown
   ---
   layout: wiki
   title: "Titre du billet"
   description: "Résumé clair du billet."
   ---

   # Titre du billet

   Date de publication : AAAA-MM-JJ

   Texte, sections, liens vers les sources et illustrations autorisées…
   ```

3. Faire relire le texte, les sources, les liens et les illustrations par un administrateur. Vérifier qu’il ne contient aucune clé, QR code, adresse privée, position précise d’un domicile ou image publiée sans autorisation.
4. Après validation, ajouter une carte avec le titre, le résumé et le lien vers le billet dans `docs/blog.html`.
5. Ajouter l’URL publique du billet dans `docs/sitemap.xml`.
6. Publier uniquement la modification approuvée. Vérifier ensuite le billet, sa carte et ses liens sur GitHub Pages.

## Règles éditoriales

- Le billet reste un brouillon tant qu’un administrateur ne l’a pas validé.
- Une pull request ou une proposition ne suffit pas à déclencher la publication : la fusion sur `main` doit intervenir après validation.
- Le formulaire de la rubrique Actualités ne doit pas servir à proposer des billets pour le Blog.
- Les affirmations techniques doivent être sourcées et compatibles avec les documentations officielles et les règles du projet.
