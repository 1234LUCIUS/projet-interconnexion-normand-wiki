# Historique du Projet d’Interconnexion Normand

Cette page rassemble les éléments publics disponibles sur l’évolution du projet. Elle décrit une trajectoire, et non un inventaire complet de tous les nœuds ou de toutes les réunions. Les dates et informations opérationnelles doivent être corrigées par l’équipe lorsqu’une source plus précise est disponible.

## Origine et intention

Le projet est présenté publiquement comme une initiative visant à développer un réseau de communication hors réseau en Normandie, indépendant des infrastructures classiques et basé sur des radios LoRa. Son objectif est de créer du lien entre les habitants, de favoriser l’entraide et d’expérimenter des communications résilientes dans les zones où les réseaux habituels sont moins disponibles.

Un article de **Ouest-France**, publié le 19 mars 2026, présente Thomas Van Nieuwenberg, originaire de Vassy près de Vire dans le Calvados, comme le porteur d’une initiative de réseau Meshtastic collaboratif en Normandie. L’article mentionne son intérêt pour la radio et son souhait de réunir des personnes afin d’étendre le réseau. La version accessible publiquement de l’article est partielle ; les éléments au-delà de cet extrait ne sont pas repris ici comme des faits vérifiés.

## Première phase : Meshtastic

La première phase publique du projet s’est structurée autour de Meshtastic. Une publication LinkedIn consacrée à la présentation du projet invitait les membres à rejoindre le réseau avec une configuration Meshtastic en **869,525 MHz avec le preset LongFast**. Elle orientait également les personnes intéressées vers les réseaux sociaux du projet et son serveur communautaire.

Cette configuration historique doit être distinguée de la configuration MeshCore actuelle des répéteurs normands. Un ancien réglage Meshtastic ne doit pas être copié sur un appareil MeshCore et une configuration locale doit toujours être vérifiée avant émission.

## Structuration de la communauté

La présence publique du projet s’est développée autour de plusieurs espaces : page LinkedIn, compte Instagram, serveur Discord et échanges de type Visio Mesh. Le compte Instagram public du projet décrit un réseau de communication hors réseau en Normandie utilisant Meshtastic et MeshCore, et référence notamment des espaces consacrés aux nœuds et aux Visio Mesh.

La communauté utilise aujourd’hui le [serveur Discord du projet](https://discord.gg/HnAfYUSU82) et l’adresse [projet.interconnection.normand@gmail.com](mailto:projet.interconnection.normand@gmail.com) pour les échanges et les demandes de configuration.

## Les Visio Mesh et la réflexion sur MeshCore

Dans un compte rendu public de la **3e édition de la Visio Mesh**, la question de l’avenir du réseau et de sa croissance est présentée comme un sujet central. Les échanges ont conduit à examiner MeshCore à partir de retours d’expérience extérieurs :

- Erwan a présenté le développement rapide du réseau breton **Projet Maillage Radio Secours**, ainsi que son intégration avec les SDIS selon le compte rendu publié.
- Pierre-Antoine, du Radio Club du Havre, a expliqué qu’une bascule de Meshtastic vers MeshCore avait été réalisée au Havre et qu’elle avait produit des résultats jugés intéressants, notamment avec des contacts vers l’Angleterre.
- Ces retours ont conduit la communauté normande à réfléchir à une bascule progressive vers MeshCore, sans abandonner Meshtastic pendant la transition.

Le compte rendu insiste sur le fait qu’il s’agit d’une réflexion collective et d’une évolution progressive. Le wiki reprend cette orientation : Meshtastic reste documenté pour les appareils et usages existants, tandis que MeshCore devient le choix privilégié pour les répéteurs permanents et l’infrastructure régionale.

## Situation documentée dans le wiki

La trajectoire actuelle du projet peut être résumée ainsi :

1. **Expérimentation et mobilisation avec Meshtastic**, notamment pour les appareils individuels, les sorties et les réseaux locaux.
2. **Organisation communautaire**, avec un Discord, des Visio Mesh, des publications publiques et un recensement des nœuds.
3. **Évaluation de MeshCore**, à partir de retours d’expérience du Havre et du réseau breton.
4. **Migration progressive vers MeshCore**, avec des profils normands pour les Companions, les Repeaters et les scopes départementaux.
5. **Coexistence temporaire**, car Meshtastic et MeshCore ne communiquent pas directement simplement parce qu’ils utilisent tous les deux LoRa.

La configuration de référence actuellement documentée pour les répéteurs normands est disponible dans [Profils MeshCore France / Normandie](meshcore/03-profils-france-normandie.md). Elle doit être considérée comme la configuration opérationnelle du projet et non comme une reconstitution de la configuration historique Meshtastic.

## Sources publiques

- [Publication LinkedIn — présentation du Projet d’Interconnexion Normand et configuration Meshtastic initiale](https://www.linkedin.com/posts/thomas-van-nieuwenberg-b029a7253_meshtastic-iot-lorawan-ugcPost-7445891288597426176-nn9c)
- [Publication LinkedIn — compte rendu de la 3e Visio Mesh et réflexion MeshCore](https://www.linkedin.com/posts/activity-7520866474383622145-B0p9)
- [Ouest-France — présentation du projet et de son origine](https://www.ouest-france.fr/high-tech/telephonie/ce-normand-de-20-ans-veut-creer-un-reseau-collaboratif-qui-pourrait-ameliorer-les-communications-en-zone-blanche-c9cb9188-22a9-11f1-8171-c156e9f33f15)
- [Instagram public du Projet d’Interconnexion Normand](https://www.instagram.com/projet.interconnexion.normand/)
- [MeshAtlas — réseaux communautaires documentés en France](https://blog.meshatlas.org/networks/community-networks-in-europe/community-networks-in-france/)
