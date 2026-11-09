# État actuel du Projet d’Interconnexion Normand

## En une phrase

Le Projet d’Interconnexion Normand est une initiative communautaire de communication hors réseau en Normandie. Le projet a commencé avec Meshtastic et évolue progressivement vers MeshCore pour les infrastructures permanentes, tout en conservant Meshtastic pour les usages individuels, mobiles et ponctuels.

## Ce qui est historique

La première phase publique s’est construite autour de Meshtastic, avec une configuration annoncée en `869.525 MHz` et preset `LongFast`. Cette configuration appartient à l’histoire publique du projet. Elle ne doit pas être copiée automatiquement sur un appareil MeshCore ni considérée comme la configuration actuelle des répéteurs MeshCore normands.

L’évolution vers MeshCore vient des échanges communautaires et des retours présentés lors des Visio Mesh, notamment les expériences rapportées depuis le Havre et le réseau breton. La migration est progressive : elle doit permettre de tester les rôles, les répéteurs, les scopes départementaux et les procédures de maintenance sans abandonner les appareils déjà en service.

Pour le détail, consulter [l’historique du projet](05-historique-du-projet.md).

## Quelle technologie utiliser maintenant ?

### Meshtastic reste adapté pour

Meshtastic reste recommandé pour une randonnée, un voyage, une sortie en groupe, un club, une association locale ou un événement ponctuel. Il est aussi utile pour apprendre, tester un emplacement et utiliser un Companion avec une application mobile.

Les appareils Meshtastic existants ne doivent pas être reflashes simplement parce que le projet migre. Gardez-les fonctionnels, documentez leur configuration et vérifiez le réseau qu’ils doivent rejoindre.

### MeshCore devient la référence pour

MeshCore est le choix privilégié pour un répéteur permanent, un réseau régional, plusieurs points hauts ou une infrastructure que le projet doit maintenir et étendre dans la durée.

Les nouveaux répéteurs normands doivent suivre la [configuration MeshCore France / Normandie](meshcore/03-profils-france-normandie.md), qui utilise le profil EU/UK Narrow, les scopes `fr`, `fr-nor` et départementaux, ainsi que le réglage sur deux octets pour les chemins.

## Parcours recommandé pour un nouvel arrivant

1. Lire [l’historique du projet](05-historique-du-projet.md) et [le guide de choix du réseau](01-choisir-son-reseau.md).
2. Rejoindre le [Discord du projet](https://discord.gg/HnAfYUSU82) ou écrire à [projet.interconnection.normand@gmail.com](mailto:projet.interconnection.normand@gmail.com) pour vérifier le réseau local.
3. Choisir un matériel supporté et utiliser le flasher correspondant : [Meshtastic](https://flasher.meshtastic.org/) ou [MeshCore](https://flasher.meshcore.io/).
4. Pour MeshCore, choisir Companion pour commencer, ou Repeater uniquement pour un appareil dédié et un site autorisé.
5. Appliquer le profil radio et le scope annoncés par le projet ; ne pas mélanger la configuration Meshtastic historique et la configuration MeshCore.
6. Faire un test à courte distance, puis un test de terrain avant toute installation permanente.
7. Ajouter une position approximative dans la [carte des nœuds](map.html), sans publier d’adresse privée ni de secret.

## Règles de transition

Meshtastic et MeshCore utilisent tous les deux LoRa, mais ne sont pas directement interopérables. Un nœud visible dans un environnement n’est donc pas automatiquement joignable depuis l’autre. Les canaux, les clés, les rôles, les chemins, les scopes et les outils de maintenance doivent être documentés séparément.

Un changement de firmware est une opération de maintenance. Sauvegardez la configuration, vérifiez le modèle exact, branchez l’antenne, prévoyez un accès USB et ne reflashez pas un relais distant sans solution de récupération.

## Contacts et décisions

Les décisions relatives aux canaux, aux profils radio, aux scopes et aux répéteurs doivent être confirmées par l’équipe du projet. Les canaux publics ne sont pas des canaux confidentiels. Ne publiez jamais de clé privée, mot de passe, QR code, position exacte d’un domicile ou emplacement sensible.
