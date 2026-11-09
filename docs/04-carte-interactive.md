# Carte interactive et recensement des nœuds

La carte est le fichier [docs/map.html](map.html). Elle lit les entrées publiques de [docs/data/nodes.json](data/nodes.json) et utilise Leaflet avec des fonds OpenStreetMap.

## Activer GitHub Pages

Le dépôt est déjà structuré pour une publication depuis la branche `main` et le dossier `/docs`.

1. Ouvrez **Settings → Pages** dans le dépôt GitHub.
2. Dans **Build and deployment**, choisissez **Deploy from a branch**.
3. Choisissez la branche `main` et le dossier `/docs`.
4. Cliquez sur **Save**.
5. Après la publication, ouvrez l’URL affichée par GitHub, puis ajoutez `/map.html` si nécessaire.

L’URL attendue aura la forme :

```text
https://1234LUCIUS.github.io/projet-interconnexion-normand-wiki/map.html
```

GitHub peut mettre quelques minutes à publier le premier déploiement.

## Ajouter un nœud

Utilisez [l’issue form de recensement](https://github.com/1234LUCIUS/projet-interconnexion-normand-wiki/issues/new?template=node.yml). Un mainteneur vérifie le logiciel, le type, le profil radio et la confidentialité de la position, puis ajoute une entrée validée dans `docs/data/nodes.json`.

Exemple d’entrée volontairement approximative :

```json
{
  "name": "Relais secteur de Caen",
  "software": "MeshCore",
  "type": "Repeater",
  "profile": "EU/UK Narrow",
  "lat": 49.182,
  "lon": -0.370,
  "updated_at": "2026-11-09"
}
```

Les coordonnées d’exemple doivent représenter une zone et non une adresse. Ne publiez pas le mot de passe, la clé privée, un QR code, l’emplacement précis d’un domicile ou la position exacte d’un site sensible.

## Mise à jour manuelle

Après modification de `docs/data/nodes.json`, faites une pull request ou un commit sur `main`. Vérifiez que le JSON est valide avant publication :

```bash
python3 -m json.tool docs/data/nodes.json >/dev/null
```

La carte n’est pas une preuve de couverture. Pour une décision d’installation, complétez-la avec une simulation dans [MeshLab-RF](https://github.com/1234LUCIUS/meshlab-rf/) et un test radio réel.

## Une question ?

Vous pouvez à tout moment rejoindre le [serveur Discord officiel du Projet d’Interconnexion Normand](https://discord.gg/HnAfYUSU82) ou nous contacter par e-mail à [projet.interconnection.normand@gmail.com](mailto:projet.interconnection.normand@gmail.com).
