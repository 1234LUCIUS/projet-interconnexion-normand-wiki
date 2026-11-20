# Guide administrateur — publier un billet du Blog

Le Blog est une rubrique éditoriale distincte des Actualités. **Chaque billet doit être relu et validé par les administrateurs avant sa mise en ligne.** Le formulaire de Blog crée un brouillon public sous forme d’issue GitHub ; il ne publie jamais automatiquement.

## Traiter une proposition reçue

1. Ouvrir l’issue dont le titre commence par `[Blog à valider]`. Le brouillon et les échanges étant publics, ne recopier que des éléments destinés à être rendus publics.
2. Vérifier l’intérêt éditorial, l’exactitude des informations, les sources, les liens et les illustrations. Retirer ou faire retirer toute clé, QR code, adresse privée, position précise d’un domicile, identifiant d’appareil ou image sans autorisation.
3. Demander des précisions ou corrections dans l’issue si nécessaire. Ne pas copier le brouillon dans le site tant qu’un administrateur ne l’a pas explicitement approuvé.
4. Si le billet est retenu, créer ou réviser l’article comme indiqué ci-dessous et ne fusionner la mise à jour qu’après validation administrative. Si la proposition est refusée, expliquer la décision dans l’issue puis la fermer.
5. Après publication, répondre à l’issue avec le lien du billet, puis la fermer.

## Ajouter un billet approuvé

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

3. Après approbation, ajouter une carte avec le titre, le résumé et le lien vers le billet dans `docs/blog.html`.
4. Ajouter l’URL publique du billet dans `docs/sitemap.xml`.
5. Vérifier le billet, sa carte et ses liens sur GitHub Pages après le déploiement.

## Règles éditoriales

- Le billet reste un brouillon tant qu’un administrateur ne l’a pas validé.
- Une issue ou une pull request ne suffit pas à déclencher la publication : la fusion sur `main` doit intervenir après validation.
- Le formulaire de la rubrique Actualités reste réservé aux nouvelles ; le formulaire Blog ne doit pas servir à proposer une actualité.
- Les affirmations techniques doivent être sourcées et compatibles avec les documentations officielles et les règles du projet.
