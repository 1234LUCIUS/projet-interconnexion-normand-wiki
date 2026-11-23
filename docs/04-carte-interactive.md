---
layout: wiki
title: "Cartes officielles des nœuds et de la couverture"
---

# Cartes officielles des nœuds et de la couverture

Le Projet d’Interconnexion Normand s’appuie désormais sur des cartes officielles et communautaires externes pour consulter les nœuds, les relais et les mesures de couverture. La carte locale GitHub du projet n’est plus la référence.

> **Priorité du projet : MeshCore.** Les nouveaux répéteurs permanents et les nouveaux déploiements durables doivent être étudiés en priorité avec MeshCore. Meshtastic reste documenté pour les appareils déjà en service, les usages mobiles, les randonnées et les essais ponctuels.

## Les cartes à consulter

### Carte MeshCore officielle

**[Ouvrir la carte MeshCore](https://map.meshcore.io/?lat=49.1086&lon=-0.1881&zoom=8.74)**

Cette carte permet d’explorer les nœuds MeshCore et de naviguer vers la zone qui vous intéresse. Utilisez le zoom et la recherche de position pour observer les nœuds visibles autour d’une commune ou d’un point haut.

#### Carte MeshCore intégrée

La carte ci-dessous s’ouvre sur la vue indiquée, autour des coordonnées et du niveau de zoom fournis par le projet. Vous pouvez déplacer la carte et zoomer directement dans cette page.

<div class="map-embed">
  <iframe src="https://map.meshcore.io/?lat=49.1086&amp;lon=-0.1881&amp;zoom=8.74" title="Carte MeshCore interactive centrée sur la vue du projet" loading="lazy" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

<p class="muted">Si la carte ne s’affiche pas dans votre navigateur, <a href="https://map.meshcore.io/?lat=49.1086&amp;lon=-0.1881&amp;zoom=8.74" target="_blank" rel="noopener noreferrer">ouvrez-la directement sur map.meshcore.io</a>.</p>

### Carte publique Meshtastic

**[Ouvrir MeshMap — carte publique Meshtastic](https://meshmap.net/)**

MeshMap est une carte communautaire quasi temps réel des nœuds Meshtastic entendus par le serveur MQTT public. Elle est proposée ici comme complément : pour les nouvelles infrastructures permanentes du projet, la référence prioritaire reste la carte MeshCore officielle.

### RelayLens — Companions

**[Ouvrir RelayLens Companions](https://relaylens.mesh.chaun14.fr/companions)**

RelayLens permet de consulter les Companions et les informations de relais associées lorsqu’elles sont disponibles. C’est une ressource utile pour comprendre les appareils actifs, les chemins observés et les zones où des essais ont été réalisés.

### RelayLens — Observers

**[Ouvrir RelayLens Observers](https://relaylens.mesh.chaun14.fr/observers)**

Cette vue permet de consulter les Observers qui alimentent les analyses RelayLens, leur présence et les informations disponibles sur leurs observations. Elle aide à comprendre depuis quels points du territoire les nœuds et paquets sont entendus.

### MeshQual

**[Ouvrir MeshQual](https://meshqual.pmrs.fr/)**

MeshQual complète les autres cartes avec des informations de qualité et de visibilité du réseau. Consultez les indications disponibles avant de conclure qu’une zone est couverte ou absente du réseau.

### MeshStats

**[Ouvrir MeshStats](https://meshstats.serveurperso.in/#/live)**

MeshStats propose des vues en direct et des outils d’analyse autour des paquets, nœuds, canaux, observateurs et statistiques MeshCore. Utilisez notamment les sections **Live**, **Map**, **Nodes**, **Observers** et **Analytics** pour comprendre ce qui est entendu et mesuré par le réseau.

## Comment les cartes obtiennent-elles leurs données ?

Les cartes MeshCore, RelayLens, MeshQual et les outils comme MeshStats ne voient pas automatiquement tous les appareils présents dans une région. Ils sont alimentés par des **Observers MeshCore** qui entendent localement des paquets radio et transmettent certaines informations à un service d’analyse ou à un broker MQTT par une connexion Internet.

Un Observer peut être :

- un Repeater MeshCore équipé ou configuré pour observer ;
- un Room Server ;
- un Companion ;
- un appareil dédié avec un firmware Observer ;
- un nœud relié en USB, BLE ou Wi-Fi à un ordinateur ou un Raspberry Pi qui assure le pont vers le service d’observation.

L’Observer écoute ce qui arrive à sa position : annonces de nœuds, paquets entendus, voisins, chemins ou mesures autorisées par sa configuration. Il transmet ensuite les données sélectionnées au service concerné. Certains Observers ne partagent que les annonces, ce qui suffit à faire apparaître un nœud sur une carte sans partager le contenu des messages. Un propriétaire peut limiter ou arrêter le partage des données.

### Pourquoi les Observers sont-ils importants ?

Un Observer est le point de mesure qui transforme une présence radio locale en information exploitable à distance. Plusieurs Observers répartis dans des communes et sur des points hauts permettent de :

- savoir quels nœuds sont réellement entendus depuis différents endroits ;
- comparer la couverture et les chemins observés ;
- repérer les zones où un Repeater pourrait être utile ;
- suivre la qualité et la stabilité d’un réseau ;
- comprendre la différence entre un nœud actif et un nœud simplement configuré ;
- alimenter des cartes, des historiques et des outils d’analyse communautaires.

Un Observer ne crée pas automatiquement de couverture radio et ne remplace pas un Repeater. Dans de nombreuses configurations, il fonctionne en **remontée de données uniquement** : il rapporte ce qu’il entend, mais ne relaie pas les paquets pour étendre le maillage. Le rôle exact dépend du matériel, du firmware et des réglages locaux.

Sans Observer, un nœud peut fonctionner correctement tout en restant absent d’une carte publique. À l’inverse, la présence d’un nœud sur une carte prouve seulement qu’un Observer l’a entendu ou qu’une donnée a été publiée ; elle ne garantit pas qu’il sera joignable maintenant, partout ou dans un bâtiment.

### Confidentialité des Observers

Avant de connecter un Observer à un service, vérifiez ce qui est partagé : annonces seulement, métadonnées, paquets, voisins ou contenu éventuel. Ne transmettez jamais de clé privée, de mot de passe, de QR code ou de message sensible. Utilisez une position générale pour les sites privés et demandez conseil sur le [Discord officiel du Projet d’Interconnexion Normand](https://discord.gg/HnAfYUSU82) ou par e-mail à [projet.interconnection.normand@gmail.com](mailto:projet.interconnection.normand@gmail.com).

## Comment utiliser ces cartes ?

1. Commencez par rechercher votre commune ou votre zone générale.
2. Comparez plusieurs cartes : une absence sur une carte ne signifie pas forcément une absence radio.
3. Regardez la date des dernières données et la source de la mesure.
4. Comparez les nœuds, les Repeaters et les Companions sans publier de position sensible.
5. Utilisez les informations comme un support de préparation, puis confirmez sur le terrain avec un test réel.

Une carte reflète uniquement les données connues, publiées et accessibles au moment de la consultation. Elle ne garantit ni la disponibilité d’un nœud, ni la réception d’un message, ni la couverture à l’intérieur d’un bâtiment.

## Recenser ou signaler un nœud

Pour signaler un nœud ou demander une correction sur les cartes officielles, consultez les règles propres à chaque service et n’envoyez jamais de clé privée, QR code, adresse personnelle ou coordonnées précises d’un site sensible.

Si vous ne savez pas quelle carte utiliser ou si vous souhaitez signaler une erreur, demandez conseil sur le [serveur Discord officiel du Projet d’Interconnexion Normand](https://discord.gg/HnAfYUSU82) ou écrivez à [projet.interconnection.normand@gmail.com](mailto:projet.interconnection.normand@gmail.com).

## Confidentialité et sécurité

- publiez une zone générale plutôt que l’adresse exacte d’un domicile ;
- ne publiez pas la position précise d’un relais sensible sans accord ;
- ne partagez jamais une clé privée ou une clé de canal ;
- vérifiez la date et la fiabilité d’une mesure avant de l’utiliser pour décider d’une installation ;
- ne présentez pas une carte communautaire comme une cartographie officielle des secours.

## Rappel

Vous pouvez poser vos questions à tout moment sur le [Discord officiel du projet](https://discord.gg/HnAfYUSU82) ou par e-mail à [projet.interconnection.normand@gmail.com](mailto:projet.interconnection.normand@gmail.com).

<script src="{{ '/assets/node-stats.js' | relative_url }}"></script>
