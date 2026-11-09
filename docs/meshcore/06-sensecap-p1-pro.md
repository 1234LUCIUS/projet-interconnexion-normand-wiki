# Seeed Studio SenseCAP Solar Node P1-Pro

## À quoi sert le P1-Pro ?

Le **SenseCAP Solar Node P1-Pro** est un nœud LoRa autonome conçu pour une installation extérieure. Il possède un panneau solaire, une batterie, un GPS et un boîtier prévu pour être fixé sur un support. C’est un matériel particulièrement intéressant pour un **Repeater MeshCore** installé sur un point haut.

La fiche officielle Seeed Studio du modèle **P1-Pro for MeshCore** indique qu’il est livré pré-flashé avec le firmware **MeshCore Repeater**. Si votre appareil est vendu comme modèle MeshCore et fonctionne déjà, **ne le reflashez pas sans raison** : commencez par le configurer, le tester sur table et vérifier sa version.

## Caractéristiques utiles

Le P1-Pro pour MeshCore utilise notamment :

- un contrôleur Seeed XIAO nRF52840 Plus ;
- un module LoRa Wio-SX1262 ;
- un GPS L76K intégré ;
- un panneau solaire de 5 W ;
- quatre batteries 18650 ;
- une antenne LoRa 868–915 MHz fournie ;
- un port USB-C de débogage et de configuration ;
- un boîtier et des supports pour une installation extérieure.

Pour remplacer une batterie, Seeed recommande une **18650 à téton positif (button-top)**. Ne remplacez pas les batteries par un modèle choisi au hasard et respectez la documentation du fabricant.

## Important : P1, P1-Pro et firmware

Le P1-Pro possède la batterie et le GPS intégrés. Le P1 standard peut nécessiter une installation séparée de ces éléments. Vérifiez l’étiquette, la fiche produit et le matériel réel avant toute opération.

Le Web Flasher MeshCore peut afficher la cible sous le nom de famille **Seeed Studio SenseCAP Solar Node P1** plutôt que « P1-Pro ». Ne sélectionnez cette cible que si elle correspond à votre matériel et à la documentation MeshCore/Seeed de votre version. Si aucune cible compatible n’est proposée, arrêtez-vous et demandez confirmation sur le Discord du projet.

## Si le P1-Pro est déjà livré avec MeshCore

1. Connectez l’antenne LoRa.
2. Placez l’interrupteur sur marche.
3. Branchez temporairement le câble USB-C pour activer ou réveiller l’appareil lors de la première utilisation.
4. Attendez que les voyants et le nœud soient stables.
5. Connectez-vous avec l’application MeshCore ou la console USB.
6. Vérifiez le rôle : il doit être **Repeater**.
7. Vérifiez la version du firmware, la fréquence, le profil radio et les scopes.
8. Faites un test sur table avant l’installation extérieure.

Évitez un chargeur rapide non adapté. Si le P1-Pro ne réagit pas au bouton, chargez-le avec une alimentation USB-C stable et consultez la documentation Seeed avant de forcer un redémarrage.

## Reflasher le P1-Pro en Repeater

Ne reflashez que si le firmware est absent, corrompu, incorrect ou si une migration est décidée par les mainteneurs.

1. Retirez le panneau solaire de toute situation dangereuse et travaillez sur table.
2. Connectez l’antenne avant d’alimenter la radio.
3. Utilisez un câble USB-C de données et un ordinateur avec Chrome ou Chromium.
4. Ouvrez le [Web Flasher officiel MeshCore](https://flasher.meshcore.io/).
5. Recherchez la cible Seeed Studio SenseCAP Solar Node P1 ou la désignation P1-Pro compatible affichée par le flasher.
6. Vérifiez que le modèle sélectionné correspond réellement à votre carte.
7. Choisissez le rôle **Repeater**.
8. Choisissez une version stable compatible avec les réglages du projet.
9. Lancez l’effacement seulement si vous acceptez de perdre la configuration existante.
10. Cliquez sur **Flash!** et ne débranchez pas le câble pendant toute l’opération.
11. Redémarrez lorsque le flasher le demande.
12. Ouvrez la console du flasher ou le [configurateur MeshCore](https://config.meshcore.io/).

Pour les captures et les explications générales, consultez [Flasher son appareil MeshCore](05-flasher-companion-repeater.md).

## Configuration du projet — exemple Calvados

Le bloc suivant est un **exemple pour un répéteur situé dans le Calvados**. Chaque équipe doit adapter les régions à son département et aux zones réellement couvertes :

```text
set radio 869.618,62.5,8,8
set advert.interval 240
set flood.advert.interval 24
set agc.reset.interval 4
set multi.acks 1
set dutycycle 10
set path.hash.mode 1
set loop.detect minimal
set flood.max.unscoped 5
set flood.max.advert 6
region def eu fr fr-nor fr-14 fr-50 fr-61
region default fr
region home fr
region save
reboot
clock sync
```

Les scopes départementaux sont `fr-14` pour le Calvados, `fr-50` pour la Manche, `fr-61` pour l’Orne, `fr-76` pour la Seine-Maritime et `fr-27` pour l’Eure. Un répéteur peut déclarer des départements voisins uniquement s’il les reçoit réellement ou s’il est relié à eux. Un scope supplémentaire ne crée pas de couverture radio.

## Installation extérieure

Avant de fixer le P1-Pro :

- obtenez l’autorisation du propriétaire du site ;
- testez le répéteur sur table avec un Companion ;
- choisissez un point haut, dégagé et accessible pour la maintenance ;
- installez le panneau avec une inclinaison, pas à plat, pour éviter l’accumulation d’eau ;
- serrez correctement les vis et contrôlez l’étanchéité du boîtier ;
- branchez correctement le câble RF et l’antenne ;
- éloignez l’antenne des masses métalliques et des sources de parasites ;
- ne publiez pas la position exacte d’un site sensible.

La hauteur, le dégagement et l’antenne comptent davantage que la seule puissance radio. Mesurez la couverture réelle et comparez-la à [MeshLab-RF](https://github.com/1234LUCIUS/meshlab-rf/).

## Dépannage rapide

- **Le P1-Pro ne s’allume pas :** vérifiez l’interrupteur, la charge USB-C, les batteries et le voyant d’activité.
- **Le flash échoue :** vérifiez le câble de données, le modèle P1/P1-Pro, le port USB et le mode de récupération demandé par le flasher.
- **Le GPS est absent :** placez le boîtier à ciel ouvert et laissez-lui le temps d’obtenir un fix ; ne concluez pas à une panne à l’intérieur d’un bâtiment.
- **Le répéteur ne relaie pas :** vérifiez le rôle Repeater, la fréquence, l’antenne, les scopes, l’alimentation et les annonces.
- **Le boîtier redémarre :** vérifiez l’alimentation solaire, les batteries, la température et les connexions.

Pour toute question, utilisez le [serveur Discord du Projet d’Interconnexion Normand](https://discord.gg/HnAfYUSU82) ou écrivez à [projet.interconnection.normand@gmail.com](mailto:projet.interconnection.normand@gmail.com).

## Documentation fabricant

- [SenseCAP Solar Node P1-Pro for MeshCore — Seeed Studio](https://www.seeedstudio.com/SenseCAP-Solar-Node-P1-Pro-for-Meshcore-p-6741.html)
- [Guide SenseCAP Solar Node — Seeed Studio Wiki](https://wiki.seeedstudio.com/get_started_with_meshtastic_solar_node/)
- [Web Flasher MeshCore](https://flasher.meshcore.io/)
