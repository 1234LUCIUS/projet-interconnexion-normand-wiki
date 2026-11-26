---
layout: wiki
title: "Sécurité, vie privée et bonnes pratiques radio"
description: "Règles de prudence pour utiliser le réseau communautaire, protéger les informations personnelles et vérifier les paramètres radio applicables."
theme: "Découvrir le projet"
theme_url: "/explorer-le-wiki.html#decouvrir"
---

# Sécurité, vie privée et bonnes pratiques radio

Le réseau est communautaire et les messages radio ne doivent pas être considérés comme un moyen garanti, confidentiel ou adapté aux communications critiques. Les nœuds partagent un spectre radio ; utilisez les paramètres prévus pour le matériel et la région où il est utilisé.

## Protéger les personnes et les informations

- Ne transmettez pas de données médicales, de mots de passe, de clés privées ni d’informations dont la divulgation pourrait mettre quelqu’un en danger.
- Ne publiez pas de clé de canal, QR code, identifiant d’appareil, adresse privée ou position précise d’un domicile.
- Ne partagez une position que si elle est volontaire et nécessaire à l’usage prévu. Préférez une commune ou un secteur à une adresse exacte.
- Avant d’envoyer une photo ou une capture, masquez les visages non autorisés, les coordonnées, les identifiants et les secrets.
- Respectez les personnes, documentez les essais et ne présentez pas le réseau comme un service officiel de secours.

## Installer et maintenir un équipement sans risque

N’installez jamais un nœud sur un toit, un terrain ou un bâtiment sans l’accord du propriétaire ou du gestionnaire. Une installation fixe doit avoir une personne responsable, un accès de maintenance et une procédure de récupération. N’effectuez pas de travail en hauteur sans compétences, autorisations et protections adaptées.

Les mesures de terrain servent à préparer un emplacement ; elles ne garantissent ni la portée ni la disponibilité. Les conditions d’installation d’un site durable sont décrites dans [Déployer un relais](terrain/02-deployer-un-relais.html) et, pour les partenaires publics, dans [Accueillir un répéteur permanent](collectivites-relais.html).

## Vérifier les règles radio

Les bandes sans licence individuelle restent soumises à des conditions techniques, notamment de fréquence, de puissance et d’occupation du spectre. Vérifiez les règles françaises en vigueur et les paramètres régionaux du firmware avant toute émission. Ne forcez pas une puissance ou un taux d’occupation au-delà des limites applicables.

La documentation et les réglages des protocoles sont disponibles dans les guides [MeshCore](meshcore/01-demarrage.html) et [Meshtastic](meshtastic/01-demarrage.html). Pour la réglementation, consultez le [portail des bandes libres de l’Arcep](https://www.arcep.fr/la-regulation/grands-dossiers-reseaux-mobiles/le-guichet-start-up-et-innovation/le-portail-bandes-libres.html).

## Documentation officielle

- [Documentation Meshtastic](https://meshtastic.org/docs/) et [configuration initiale](https://meshtastic.org/docs/getting-started/initial-config/).
- [Configuration radio LoRa Meshtastic](https://meshtastic.org/docs/configuration/radio/lora/) et [configuration des canaux](https://meshtastic.org/docs/configuration/radio/channels/).
- [Dépôt officiel MeshCore](https://github.com/meshcore-dev/MeshCore) et [site MeshCore](https://meshcore.io/).

En cas de doute sur un paramètre local, demandez confirmation à l’équipe avant de reflasher ou de modifier un nœud déjà déployé. Les recommandations de protection des données complètent, sans les remplacer, les règles de chaque service utilisé.
