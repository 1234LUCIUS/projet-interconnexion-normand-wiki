# Guide débutant : mon premier nœud

Ce guide est volontairement simple. Si vous ne connaissez pas encore LoRa, MeshCore ou Meshtastic, commencez ici.

## Le choix recommandé

Pour rejoindre durablement le Projet d’Interconnexion Normand, choisissez **MeshCore**. Prenez un **Companion** si vous voulez communiquer avec votre téléphone. Choisissez un **Repeater** uniquement pour installer un relais fixe, avec un emplacement autorisé et une personne chargée de la maintenance.

Meshtastic reste utile pour les randonnées, les sorties, les événements et les appareils déjà installés. Pour comprendre la différence, lisez [Choisir entre Meshtastic et MeshCore](01-choisir-son-reseau.md).

## Ce qu’il vous faut

Il vous faut une carte LoRa compatible 868 MHz, une antenne 868 MHz, un câble USB de données et un téléphone ou un ordinateur. N’achetez pas une carte uniquement parce qu’elle ressemble à une autre : vérifiez le modèle exact dans le [Web Flasher MeshCore](https://flasher.meshcore.io/).

Pour un Companion, privilégiez une carte compacte avec Bluetooth et batterie. Pour un Repeater, utilisez une carte dédiée qui pourra rester alimentée et être installée avec une antenne extérieure adaptée.

## Les cinq premières étapes

1. **Branchez l’antenne**, puis le câble USB.
2. **Ouvrez le Web Flasher MeshCore** et sélectionnez le modèle exact.
3. **Choisissez Companion** si vous débutez avec un téléphone. Ne choisissez Repeater que si vous avez un vrai projet de relais.
4. **Réglez le profil normand** : `869.618,62.5,8,8`.
5. **Connectez l’application MeshCore**, choisissez le scope `fr`, puis envoyez un message de test non sensible.

Le profil complet des répéteurs et les scopes départementaux sont expliqués dans [Profils MeshCore France / Normandie](meshcore/03-profils-france-normandie.md).

## Où commencer ?

Faites votre premier test dans un endroit dégagé, à quelques mètres d’un autre appareil connu. Ensuite, déplacez-vous dans votre quartier ou votre commune. Notez ce qui fonctionne et ce qui ne fonctionne pas. Ne concluez pas qu’un réseau est “absent” après un seul essai.

Pour choisir un point haut, consultez [le guide de couverture](terrain/03-simulateurs-couverture.md) et testez votre idée avec [MeshLab-RF](https://github.com/1234LUCIUS/meshlab-rf/).

## Si vous êtes bloqué

Ne changez qu’un réglage à la fois. Vérifiez d’abord l’antenne, la batterie, le modèle, le firmware, la fréquence, le preset, le scope et le canal. Rejoignez le [Discord du projet](https://discord.gg/HnAfYUSU82) ou écrivez à [projet.interconnection.normand@gmail.com](mailto:projet.interconnection.normand@gmail.com).

Ne publiez jamais votre clé privée, votre mot de passe, votre QR code ou l’adresse exacte de votre domicile.
