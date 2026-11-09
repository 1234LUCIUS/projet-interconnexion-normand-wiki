# Bienvenue dans le Projet d’Interconnexion Normand

## Le projet en une phrase

Le Projet d’Interconnexion Normand fédère des personnes qui expérimentent et déploient des communications LoRa maillées en Normandie, sans dépendre en permanence d’un opérateur mobile ou d’un accès Internet.

Pour les nouveaux déploiements et les nouveaux membres qui souhaitent contribuer à l’infrastructure régionale, **MeshCore est le chemin recommandé**. Meshtastic reste disponible pour la transition, les appareils existants et les usages mobiles ou ponctuels.

Le réseau est communautaire : chaque nœud peut améliorer la couverture, mais chaque émission partage un spectre radio avec d’autres utilisateurs. La qualité dépend donc autant de la hauteur et de l’antenne que de la discipline collective.

## Migration progressive vers MeshCore

Le Projet d’Interconnexion Normand bascule petit à petit vers **MeshCore**. Cette transition est progressive afin de laisser le temps de tester les répéteurs, accompagner les utilisateurs et documenter les profils radio et les scopes départementaux. Meshtastic reste présent dans le projet pendant cette période et continue d’être documenté pour les appareils déjà déployés ou les usages qui en ont besoin.

Un appareil Meshtastic et un appareil MeshCore ne communiquent pas directement simplement parce qu’ils utilisent tous les deux LoRa. Pour participer à la partie MeshCore du projet, suivez le profil MeshCore France / Normandie et choisissez le firmware Companion ou Repeater adapté. Ne reflashez pas un appareil en production sans sauvegarde et sans vérifier le rôle prévu.

Pour connaître le choix recommandé aujourd’hui, consultez [l’état actuel du projet](06-etat-actuel.md). Pour comprendre l’origine de cette évolution, consultez [l’historique public](05-historique-du-projet.md).

## Vocabulaire minimal

- **Nœud / node :** appareil radio participant au réseau.
- **LoRa :** modulation radio longue portée et faible débit.
- **Mesh / maillage :** réseau dans lequel des nœuds relaient des paquets pour atteindre d’autres nœuds.
- **Companion :** appareil utilisé par une personne, généralement relié à un téléphone.
- **Repeater / relais :** nœud installé pour étendre la couverture.
- **Room Server :** service MeshCore pouvant héberger des échanges de type salon.
- **Preset modem :** ensemble de paramètres radio. Tous les nœuds qui doivent s’entendre doivent utiliser des paramètres compatibles.
- **Canal :** groupe logique de messages, avec un nom et éventuellement une clé.

## Code de conduite

Le projet est ouvert à tous. Nous privilégions la coopération, la documentation et les essais réversibles. On ne surveille pas les personnes, on ne diffuse pas de données personnelles et on ne présente pas le réseau comme un moyen garanti pour les secours, la sécurité des personnes ou les communications critiques.

Toute donnée de position doit être volontaire, minimisée et adaptée à l’usage. Une position précise peut révéler un domicile, un trajet ou un lieu sensible.

## Avant d’émettre

En France, les bandes dites libres ne nécessitent pas d’autorisation individuelle, mais elles ne garantissent pas l’absence de brouillage et restent soumises à des limites techniques. Le firmware ne remplace pas la vérification de la réglementation nationale. Utilisez le réglage régional prévu pour la France et ne forcez pas une puissance ou un taux d’occupation non autorisé.

## Organisation du wiki

Les pages marquées **À valider localement** décrivent une décision propre au Projet d’Interconnexion Normand. Elles ne doivent pas être inventées à partir de la documentation générique. Un mainteneur doit les compléter avec le nom du canal, le preset, les zones couvertes et la procédure d’adhésion réellement adoptés.

## Contacts du projet

La communauté se retrouve sur le [serveur Discord du Projet d’Interconnexion Normand](https://discord.gg/HnAfYUSU82). Pour une demande générale ou une question liée au projet, vous pouvez également écrire à [projet.interconnection.normand@gmail.com](mailto:projet.interconnection.normand@gmail.com).

## Références officielles

- [Documentation Meshtastic](https://meshtastic.org/docs/)
- [Configuration initiale Meshtastic](https://meshtastic.org/docs/getting-started/initial-config/)
- [Configuration LoRa Meshtastic](https://meshtastic.org/docs/configuration/radio/lora/)
- [Configuration des canaux Meshtastic](https://meshtastic.org/docs/configuration/radio/channels/)
- [Dépôt officiel MeshCore](https://github.com/meshcore-dev/MeshCore)
- [Site officiel MeshCore](https://meshcore.io/)
- [Portail bandes libres de l’Arcep](https://www.arcep.fr/la-regulation/grands-dossiers-reseaux-mobiles/le-guichet-start-up-et-innovation/le-portail-bandes-libres.html)
