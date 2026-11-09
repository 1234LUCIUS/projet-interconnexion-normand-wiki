# Meshtastic — configuration du Projet d’Interconnexion Normand

Cette page distingue les réglages génériques des décisions propres au projet. Les champs marqués **À valider localement** doivent être confirmés par les mainteneurs avant publication.

## Statut pendant la migration

Le projet a historiquement annoncé une configuration Meshtastic en `869.525 MHz` avec le preset `LongFast`. Cette configuration est conservée ici comme repère historique pour les appareils Meshtastic déjà déployés, mais la trajectoire du projet privilégie progressivement MeshCore pour les répéteurs permanents et l’infrastructure régionale. Ne transposez pas les paramètres Meshtastic dans un appareil MeshCore.

Si vous débutez aujourd’hui, lisez d’abord [l’état actuel du projet](../06-etat-actuel.md) et [le guide de choix Meshtastic ou MeshCore](../01-choisir-son-reseau.md). Le bon réglage dépend de l’usage et du réseau que vous souhaitez rejoindre.

## Profil projet

- **Région :** France / région européenne appropriée au firmware.
- **Preset modem :** **À valider localement**.
- **Canal principal :** **À valider localement**.
- **Canaux secondaires :** **À valider localement**.
- **Limite de sauts :** conserver une valeur raisonnable et documentée ; **À valider localement**.
- **MQTT :** désactivé par défaut, sauf décision explicite du projet.

## Pourquoi ces réglages doivent être identiques

La région et le preset déterminent la façon dont la radio écoute et émet. Le canal détermine le groupe logique et la clé éventuelle. Deux appareils peuvent être proches et pourtant ne rien entendre s’ils ne partagent pas ces paramètres.

Le nom du canal principal peut aussi participer au choix du frequency slot lorsque celui-ci n’est pas fixé explicitement. Changer le nom principal d’un appareil déjà déployé peut donc le déplacer sur une autre fréquence logique.

## Procédure d’intégration

1. Demander le profil actuel à un mainteneur.
2. Configurer un appareil de test, pas un relais en production.
3. Vérifier la réception de plusieurs nœuds.
4. Envoyer un message de test non sensible.
5. Faire un test à distance et noter les résultats.
6. Enregistrer le nœud dans l’inventaire du projet.

## Journal de configuration

Chaque changement important doit indiquer : date, auteur, version firmware, ancien réglage, nouveau réglage, raison, impact prévu et méthode de retour arrière. Ne stockez pas la PSK dans ce journal.

## À compléter par les mainteneurs

- Nom public du canal principal.
- Preset officiellement utilisé.
- Politique de position et de télémétrie.
- Politique MQTT et passerelles.
- Zones ou relais de référence.
- Contact de maintenance.

## Une question ?

Vous pouvez à tout moment rejoindre le [serveur Discord officiel du Projet d’Interconnexion Normand](https://discord.gg/HnAfYUSU82) ou nous contacter par e-mail à [projet.interconnection.normand@gmail.com](mailto:projet.interconnection.normand@gmail.com).
