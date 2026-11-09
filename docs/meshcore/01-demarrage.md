# MeshCore — démarrage rapide

## Comprendre MeshCore

MeshCore est un firmware et un ensemble d’outils open source pour créer des réseaux LoRa à routage multi-sauts. Son approche utilise des rôles explicites et des clients dédiés. Il ne faut pas supposer qu’un nœud MeshCore rejoint directement un réseau Meshtastic.

## 1. Vérifier la compatibilité

Consultez le [Web Flasher officiel MeshCore](https://flasher.meshcore.io/) et identifiez le modèle exact de votre carte. Une variante proche n’est pas forcément compatible. Préparez un câble USB de données et branchez l’antenne avant d’alimenter la radio.

## 2. Flasher

Utilisez le [Web Flasher officiel MeshCore](https://flasher.meshcore.io/). Choisissez le matériel puis le rôle : **Companion**, **Repeater** ou **Room Server**. N’utilisez pas un binaire trouvé dans une conversation sans vérifier sa provenance.

## 3. Connecter un Companion

Après le flash, reliez le nœud à l’application MeshCore par BLE, USB ou Wi-Fi selon le matériel. Les clients officiels et les liens à jour sont référencés dans le [dépôt MeshCore](https://github.com/meshcore-dev/MeshCore).

Un Companion est le meilleur point d’entrée pour apprendre : il permet de découvrir des nœuds, tester les messages et observer la qualité du lien sans transformer votre appareil en relais permanent.

## 4. Première conversation

Commencez par un message non sensible sur le canal public de test. Vérifiez l’identité affichée du correspondant et la présence éventuelle d’un chemin via relais. Passez aux canaux privés seulement après avoir compris la procédure de gestion des clés.

## 5. Sauvegarde et mise à jour

Notez le modèle, le rôle, la version et la date du flash. Conservez les informations d’administration hors du dépôt public. Avant une mise à jour, lisez les notes de version et prévoyez un accès physique si le nœud ne redémarre pas.

## Différence importante avec Meshtastic

Les applications, formats de configuration et rôles ne sont pas interchangeables. Pour un projet mixte, documentez séparément les canaux, les appareils et les procédures de dépannage. Une passerelle entre systèmes doit être traitée comme un composant de sécurité et de fiabilité, pas comme un simple réglage.
