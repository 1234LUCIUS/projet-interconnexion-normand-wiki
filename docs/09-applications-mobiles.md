---
layout: wiki
title: "Applications mobiles"
description: "Choisir et télécharger les applications MeshCore, MeshMapper, Meshtastic et Nelos, avec leurs fonctions et leurs limites."
---

# Applications mobiles pour les réseaux LoRa

Une application mobile sert d’interface à une radio LoRa compatible : elle ne transmet pas elle-même sur LoRa et ne remplace pas le firmware installé dans le matériel. **MeshCore et Meshtastic sont deux écosystèmes distincts et ne communiquent pas directement entre eux.** Le téléphone et la radio doivent utiliser le bon couple application–firmware, avec une variante radio et des réglages adaptés à la région.

## MeshCore : application compagnon et diagnostics du maillage

L’application officielle **MeshCore** se connecte en général par Bluetooth à une radio compatible qui exécute le firmware **MeshCore Companion**. La radio effectue les transmissions LoRa; l’application permet de configurer le compagnon, d’annoncer sa présence sur le réseau, de découvrir des contacts et d’échanger des messages privés ou de canal. Elle propose aussi la gestion à distance, par radio, de certains répéteurs et serveurs de salon. Certaines opérations avancées de gestion distante peuvent nécessiter un déverrouillage payant. Voir la [FAQ MeshCore](https://docs.meshcore.io/faq/) et le [site officiel MeshCore](https://meshcore.io/).

### Outils de diagnostic, mesure et planification

L’application regroupe des outils différents : certains **estiment** une couverture à partir d’une carte et de paramètres, d’autres affichent des **observations radio réellement reçues**. Ils ne donnent pas une portée garantie.

- **Antenna Coverage / Couverture d’antenne** : outil cartographique pour préparer ou comparer des zones estimées. Le client permet d’afficher plusieurs couches, d’ajouter la couche des répéteurs et d’importer ou d’exporter des couches JSON; des paramètres tels que la hauteur d’antenne interviennent dans les calculs. C’est une estimation dépendante du modèle de terrain et des hypothèses saisies, pas une mesure du signal en direct. Les cartes de relief peuvent ne pas représenter fidèlement les bâtiments et autres obstacles. Le [changelog officiel de l’application](https://app.meshcore.nz/assets/CHANGELOG.md) documente cet outil et ses couches; une [discussion du projet sur les hypothèses de hauteur et de relief](https://github.com/meshcore-dev/MeshCore/issues/2374) en rappelle les limites.
- **Line of Sight / Ligne de visée** : examine le profil entre deux points et aide à repérer une obstruction du trajet radio. On peut ouvrir cet outil depuis Couverture d’antenne; la version de l’application permet aussi de placer les points sur la carte ou de saisir leurs coordonnées. Il complète l’explication de la [ligne de visée et de la zone de Fresnel](terrain/03-simulateurs-couverture.html), mais ne remplace pas un essai radio réel.
- **Trace de chemin** (*Trace path*, carte de trace et trace manuelle) : sonde le trajet à travers des répéteurs et présente les sauts du chemin; une trace réussie peut afficher des valeurs de signal en dBm par étape. Le mode manuel permet de choisir les répéteurs du chemin. Ces valeurs décrivent les réponses observées pendant la trace et ne sont pas conservées après sa fermeture selon le [suivi du projet sur la trace](https://github.com/meshcore-dev/MeshCore/issues/1360). Elles ne représentent ni une distance géographique ni une portée maximale.
- **Discover Nearby Nodes / Découverte des nœuds proches** : recherche des répéteurs et capteurs joignables directement, à zéro saut; l’interface peut afficher le signal observé. Cela aide à repérer les voisins radio, mais ne découvre pas les appareils compagnons. Voir le [ticket MeshCore consacré à cette fonction](https://github.com/meshcore-dev/MeshCore/issues/1027).
- **Voisins d’un répéteur** : après connexion avec les droits nécessaires, une carte peut montrer les répéteurs entendus directement et le niveau de signal par lien. L’accès et les données dépendent du firmware et des droits de gestion du nœud. Voir le [guide illustré de gestion MeshCore](https://nodakmesh.org/blog/meshcore-app-guide).
- **État et télémétrie** : lors d’une session de gestion autorisée, l’écran de statut d’un répéteur peut exposer batterie, durée de fonctionnement, temps d’émission/réception, dernier RSSI/SNR, niveau de bruit et compteurs de paquets. L’application peut aussi consulter la télémétrie publiée par un appareil; les notes Google Play mentionnent une puissance calculée à partir de la tension et du courant. Ces informations varient selon le matériel, le firmware et les données disponibles; une puissance calculée n’est pas une mesure de portée.
- **RX Log / journal de réception** : permet d’inspecter les paquets reçus et certains détails de messages quand ils sont décodables. C’est un outil de diagnostic du trafic, pas une carte de couverture. La fonction et ses évolutions sont listées dans le [changelog officiel MeshCore](https://app.meshcore.nz/assets/CHANGELOG.md).

Les commandes CLI du firmware peuvent exposer d’autres statistiques (bruit, RSSI/SNR, temps d’antenne, compteurs et erreurs de paquets), mais la documentation du [CLI MeshCore](https://docs.meshcore.io/cli_commands/) indique que certaines sont réservées au port série. Ne supposez pas que toutes sont disponibles dans l’application mobile.

**À distinguer des outils intégrés :** [mapme.sh](https://mapme.sh/) est une carte communautaire qui agrège des relevés de terrain associés au GPS du téléphone et à la force des signaux MeshCore reçus. [MeshMapper](https://meshmapper.net/) propose aussi des essais de terrain et du wardriving. Ce ne sont pas l’outil prédictif Antenna Coverage de l’application MeshCore; consultez le [guide de tests radio terrain](terrain/01-test-radio.html) avant de cartographier ou téléverser des parcours.

Les préréglages radio proposés sont des suggestions : vérifiez qu’ils respectent la réglementation et correspondent au profil de votre réseau avant d’émettre. Les mesures d’un trajet dépendent du terrain, des antennes, des réglages et des répéteurs réellement accessibles; elles ne garantissent pas la réception d’un futur message.

**Télécharger MeshCore :** [Android — Google Play](https://play.google.com/store/apps/details?id=com.liamcottle.meshcore.android) · [iPhone/iPad — App Store](https://apps.apple.com/nz/app/meshcore/id6742354151). Le [client MeshCore sur le Web](https://app.meshcore.nz/) est une autre interface, distincte de l’application mobile. La [carte publique MeshCore](https://map.meshcore.io/) et le [Web Flasher](https://flasher.meshcore.io/) sont eux aussi des outils séparés.

## MeshMapper : mesurer et cartographier le réseau MeshCore

**MeshMapper** est une application de wardriving dédiée à **MeshCore** : ce n’est ni un client de messagerie généraliste, ni une application Meshtastic. Elle se connecte à un Companion MeshCore par Bluetooth ou TCP; la connexion USB est aussi disponible sur Android. Le GPS vient du téléphone. Les observations réelles — répéteurs entendus et niveaux **RSSI** (puissance reçue) ou **SNR** (rapport signal/bruit) — alimentent la carte communautaire MeshMapper. L’application propose une carte en direct, un journal des essais, l’historique des parcours et des graphiques de bruit radio. Voir le [guide officiel](https://wiki.meshmapper.net/app_getting_started/) et la page [comment fonctionne la collecte](https://wiki.meshmapper.net/app_how_it_works/).

Le choix du mode change ce que la radio transmet :

- **Passive** écoute le trafic reçu et envoie périodiquement une requête de découverte à zéro saut. Elle n’inonde pas le réseau par des messages de canal, mais ce n’est pas un mode totalement silencieux.
- **Trace** interroge un répéteur choisi pour observer la qualité de la liaison vers ce nœud, notamment RSSI/SNR. C’est utile pour comparer un emplacement ou l’orientation d’une antenne; la requête de trace est bien une émission radio.
- **Hybrid**, recommandé par l’équipe MeshMapper pour le wardriving général, alterne découverte et messages de canal `#wardriving`. Ces messages peuvent être relayés ou limités par un scope et consomment du temps d’antenne. Utilisez ce mode seulement si la région l’autorise.
- **Active**, conservé pour compatibilité, envoie surtout des messages de canal répétitifs. Un **Send Ping** manuel émet également un message. Dans les deux cas, vérifiez les règles locales avant d’émettre.

En **mode hors ligne**, les observations sont conservées sur le téléphone et peuvent être envoyées plus tard. Les modes Passive et Trace restent disponibles; Hybrid, Active et les pings de canal nécessitent une session en ligne et une région autorisée. Les essais décrivent ce que votre appareil a effectivement entendu à l’endroit et au moment du parcours; une cellule vide ou colorée ne garantit pas la couverture d’un autre appareil.

**Vie privée :** par défaut, les pings radio ne contiennent pas les coordonnées GPS, mais l’application transmet la position au service MeshMapper pour rattacher les observations aux cartes communautaires. Le mode « Anonymous » masque le nom dans certains affichages, mais ne rend pas la position cartographiée privée. Le mode hors ligne évite le téléversement tant que vous ne choisissez pas de le faire. Consultez la [politique de confidentialité MeshMapper](https://wiki.meshmapper.net/privacy/) et le [guide des tests radio terrain](terrain/01-test-radio.html); en voiture, laissez la manipulation à un passager.

**Télécharger MeshMapper :** [Android — Google Play](https://play.google.com/store/apps/details?id=net.meshmapper.app) · [iPhone/iPad — App Store](https://apps.apple.com/us/app/meshmapper/id6758073991). Voir aussi le guide des [modes de wardriving](https://wiki.meshmapper.net/app_wardriving_modes/) et le [dépôt source](https://github.com/MeshMapper/MeshMapper_Flutter_App).

## Meshtastic : messages, positions et configuration

L’application officielle **Meshtastic** sert à configurer et utiliser une radio prise en charge exécutant le firmware Meshtastic. Elle permet d’échanger des messages directs ou sur des canaux, de régler le nœud connecté, de consulter la liste des appareils reçus et d’afficher les positions transmises sur une carte. Selon le matériel et les données disponibles, on peut également consulter des waypoints, des informations de signal et la télémétrie des nœuds. Les guides officiels couvrent les [messages et canaux](https://meshtastic.org/docs/software/android/user/messages-and-channels/), la [carte et les waypoints](https://meshtastic.org/docs/software/android/user/map-and-waypoints/) et les [métriques des nœuds](https://meshtastic.org/docs/software/android/user/node-metrics/).

Pour les diagnostics, l’application Android fournit notamment un indicateur de signal SNR/RSSI et un traceroute; des outils de découverte locale permettent d’examiner les nœuds et l’activité radio reçue. Ces résultats décrivent les paquets observés et le chemin de routage, pas une portée garantie. Le module **Range Test** est, lui, une fonction du firmware Meshtastic : deux radios doivent être configurées pour échanger les paquets de test. Il consomme du temps d’antenne et peut encombrer le maillage; désactivez-le après les essais. [Indicateur de signal](https://meshtastic.org/docs/software/android/user/signal-meter/) · [Découverte locale](https://meshtastic.org/docs/software/android/user/discovery/) · [Module Range Test](https://meshtastic.org/docs/configuration/module/range-test/).

**Télécharger Meshtastic :** [Android — Google Play](https://play.google.com/store/apps/details?id=com.geeksville.mesh) · [iPhone/iPad — App Store](https://apps.apple.com/us/app/meshtastic/id1586432531). L’application doit se connecter à une radio compatible; la documentation décrit notamment Bluetooth LE et, selon le matériel, d’autres modes de connexion. Voir la liste des [matériels pris en charge](https://meshtastic.org/docs/hardware/devices/).

## Nelos : un véritable couteau suisse pour communiquer en randonnée

**Nelos** est une application mobile pensée pour les groupes et les activités de plein air. Elle s’appuie sur une radio LoRa compatible exécutant le firmware **MeshCore**, reliée au téléphone par Bluetooth. La radio transporte les messages et les positions; Nelos fournit une interface de groupe qui réunit communication, carte et suivi. Le nom du protocole et le firmware de la radio restent importants : une radio exécutant Meshtastic ne devient pas compatible avec Nelos par le simple fait d’être un appareil LoRa.

### Ce qu’on peut faire avant et pendant une sortie

- **Préparer la sortie sans réseau mobile** : télécharger les cartes à l’avance, enregistrer des waypoints — parking, bivouac, point de rendez-vous ou source d’eau — et ouvrir un itinéraire GPX selon les fonctions disponibles dans l’offre utilisée. Les cartes hors ligne sont particulièrement utiles lorsque le téléphone n’a plus Internet.
- **Garder le groupe en contact** : envoyer des messages de groupe et des messages directs par le réseau MeshCore, sans SIM ni serveur central de messagerie. Nelos peut aussi afficher les canaux MeshCore déjà configurés sur la radio et permettre d’y échanger des messages après activation de l’option correspondante.
- **Se situer et retrouver les autres** : partager périodiquement les positions reçues et voir les membres sur une carte commune. L’historique permet de revenir sur les positions effectivement reçues; il peut donc comporter des lacunes si le chemin radio est interrompu. Ce n’est pas un suivi continu seconde par seconde.
- **Suivre un équipement ou une personne avec un tracker compatible** : demander sa position, utiliser le mode *Find* pour solliciter des mises à jour plus fréquentes, consulter l’état de batterie et créer des zones de sécurité avec alertes. Les trackers MeshCore compatibles peuvent transmettre leur position sans téléphone attaché.
- **Vérifier les échanges** : Nelos affiche des confirmations de livraison et, pour MeshCore, une visualisation du chemin emprunté par certains messages. L’éditeur fait évoluer régulièrement l’application; les [notes de version](https://nelos.app/updates/) décrivent notamment ces fonctions ainsi que les réglages radio proposés dans l’app.
- **Demander de l’aide au groupe** : le bouton *Need Help* envoie une alerte et une position aux membres choisis. Il ne contacte pas les secours et ne garantit pas que le message ou la position sera reçu.

C’est en réunissant ces usages — **carte hors ligne, messages, positions, waypoints, itinéraires et trackers** — que Nelos peut être un véritable « couteau suisse » de communication pour la randonnée. Pour les fonctions réseau, chaque personne doit toutefois disposer d’un matériel MeshCore compatible; la couverture dépend des radios, des antennes, du relief et des relais. Les communications par radio ne nécessitent pas Internet, mais les cartes doivent être téléchargées avant le départ. Gardez aussi un moyen de navigation et de secours adapté à l’itinéraire.

### Compatibilité : MeshCore oui, Meshtastic non

Nelos a pris en charge **MeshCore et Meshtastic dans des versions antérieures**, mais **fonctionne actuellement avec MeshCore seulement**. L’éditeur indique dans ses [notes de version](https://nelos.app/updates/) que le support Meshtastic a été retiré à partir de la version 2.3.1, publiée en août 2026, afin de concentrer le développement sur MeshCore. La même source décrit des mises à jour ultérieures; la version 2.7.6 y est datée du 16 novembre 2026. Nelos n’est donc plus un pont entre les deux réseaux. Pour consulter les radios prises en charge et vérifier si un flash est nécessaire, voir le [guide officiel des appareils Nelos](https://nelos.app/devices/).

Nelos n’est pas un analyseur radio : les sources de l’éditeur ne documentent pas de test de portée, d’indicateur RSSI/SNR ou de mesure du bruit radio dans l’application. Le mode *Find* sollicite plus souvent une position de tracker; ce n’est pas une mesure de portée. Les statistiques du firmware MeshCore et les outils de l’application MeshCore ne doivent pas être attribués à Nelos.

L’application propose une offre gratuite et une option Pro pour étendre certaines limites, comme le nombre de cartes hors ligne, de trackers, d’équipes actives et la durée d’historique. Les conditions peuvent évoluer; consulter la [FAQ Nelos](https://nelos.app/faq/) avant de choisir.

**Télécharger Nelos :** [Android — Google Play](https://play.google.com/store/apps/details?id=app.nelos) · [iPhone/iPad — App Store](https://apps.apple.com/app/id6777224613). Pour les détails de fonctionnement, voir le [guide MeshCore de Nelos](https://nelos.app/guides/what-is-meshcore/), le guide [randonnée et activités de plein air](https://nelos.app/use-cases/hiking/) et la page [suivi GPS](https://nelos.app/tracking/).

## Avant d’émettre ou de partir

Vérifiez la bande régionale de la radio, le firmware, le profil partagé par votre groupe et les limites réglementaires applicables. Les fonctions GPS, de position et de télémétrie dépendent du matériel, des autorisations accordées au téléphone et des données réellement reçues. Une liaison LoRa ne garantit ni la couverture, ni la livraison d’un message, ni la précision d’une position; aucune des applications décrites ne remplace un dispositif professionnel de secours.
