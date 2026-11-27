---
layout: wiki
title: "RAK 1W solaire : retour d’expérience MeshCore"
theme: "Participer et suivre le projet"
theme_url: "/explorer-le-wiki.html#participer"
description: "Retour d’expérience sur un répéteur MeshCore solaire à base de RAK WisMesh 1W, panneau de 5 W et trois batteries de 3 300 mAh."
seo:
  type: "BlogPosting"
author:
  name: "Superbigou77"
  url: "https://github.com/Superbigou77"
date: 2026-11-22
category: "Retour d’expérience"
author_github: "Superbigou77"
author_name: ""
image: "/assets/social-card-normandie-optimized.jpg"
image_alt: "Illustration du réseau radio maillé du Projet d’Interconnexion Normand"
---

# RAK 1W solaire : retour d’expérience MeshCore

Un RAK WisMesh 1W, un panneau solaire 5 W et trois batteries de 3300 mAh suffisent à faire tourner un
répéteur MeshCore autonome, à condition de brider la puissance d'émission pour respecter la limite de 27
dBm.

### - Le matériel

Le répéteur repose sur deux éléments principaux.

Le module radio : RAK WisMesh High Power Booster Starter Kit, communément appelé « RAK 1W ».
C'est un pré-assemblage de plusieurs cartes RAK ([fiche produit](https://store.rakwireless.com/products/meshtastic-1w-lora-booster-kit-rak3401), [datasheet RAK13302 VD](https://docs.rakwireless.com/product-categories/wisblock/rak13302/datasheet-vd/)).

<img width="481" height="262" alt="1" src="https://github.com/user-attachments/assets/cec18e2c-bbf5-4c05-8a82-6d42ec4e544e" loading="lazy" decoding="async">

Le panneau solaire Keepteen D5-2A ([présentation du fabricant](https://www.keepteen.com/blog-Solar-Lora/How-to-use-D5-Solar-panel-System-to-DIY-a-Lora-Node-Repeater-for-Meshtastic-11929169.html)), associé à trois batteries de 3300 mAh.
Le panneau fournit 5 W.

<img width="602" height="593" alt="2" src="https://github.com/user-attachments/assets/32ce9f1e-3880-4dcf-8ae4-71be685044fe" loading="lazy" decoding="async">

Ce panneau existe en plusieurs déclinaisons : avec ou sans batteries, avec ou sans module, et avec des
supports adaptés à différents modules (pièce imprimée en 3D). Il dispose aussi d'une antenne déportée 2,4
GHz, qui permet de faire les mises à jour en Bluetooth quand le répéteur est installé à un endroit peu
accessible.

### Le montage

Le panneau utilisé était prévu pour accueillir un RAK 4631, avec lequel il a fonctionné un certain temps. Le RAK
1W étant un peu plus long, il a fallu tailler dans le plastique du logement des batteries pour le placer.
Faute d'imprimante 3D pour fabriquer un support, le module tient avec de petits morceaux de scotch double
face. Ce n'est pas élégant, mais cela fonctionne.

### Le RAK 1W en détail

Le RAK 1W existe en plusieurs versions : la VC, qui n'est plus commercialisée, et la VD, le modèle actuel. Pour la
VD, il faut choisir le type d'alimentation à l'achat : batteries 3,7 V ou 5 V externe.
Sa particularité : une puce nRF52840, très économe en énergie, associée à un amplificateur de puissance à
l'émission, un filtre SAW et un amplificateur faible bruit (LNA) à la réception. Le schéma ci-dessous montre la
chaîne complète, du microcontrôleur à l'antenne.

<img width="485" height="433" alt="3" src="https://github.com/user-attachments/assets/83557d6a-455d-484b-a441-04da9d387338" loading="lazy" decoding="async">

### Régler la puissance TX

L'amplificateur d'émission apporte un gain de 8 dB et peut atteindre 30 dBm (1 W) au maximum. Il faut donc
brider la puissance, d'autant plus selon l'antenne utilisée, pour ne pas dépasser les 27 dBm réglementaires.
Un calculateur en ligne ([article de La Résilience](https://www.la-resilience.fr/2026/09/construire-un-repeteur-meshcore-urbain-avec-un-rak10724/)) donne le réglage TX à saisir dans les paramètres MeshCore.
Dans l'exemple ci-dessous :
l'antenne est de 3 dBi (donnée du fabricant) ;
l'option de calcul avec filtre (SAW) n'est pas utilisée, car cette perte est déjà intégrée aux caractéristiques
du module : avec un TX réglé à 22 dBm sur le module radio, la puissance maximale en sortie, après
amplification, est de 30 dBm ;
avec un TX MeshCore à 18 dBm, le calculateur donne 26 dBm de puissance RF et 26,21 dBm ERP (418
mW), soit 0,79 dB de marge sous la limite de 27 dBm ERP.

<img width="625" height="758" alt="Sans titre" src="https://github.com/user-attachments/assets/b24e01c8-9452-4509-b296-928545cbad30" loading="lazy" decoding="async">

Les pertes des connecteurs ne sont volontairement pas prises en compte. Elles sont faibles devant celles du
câble ou d'un filtre, et les ignorer rend l'estimation légèrement conservatrice, donc plutôt du bon côté de la
limite.

### Bilan

L'ensemble donne satisfaction en autonomie, avec un panneau solaire 5 W et trois batteries de 3300 mAh, et
la qualité du filtrage est au rendez-vous. L'amplificateur est un vrai plus : il permet de s'approcher au plus près
des 27 dBm réglementaires.


### Sources et liens utiles

[RAK WisMesh 1W Booster Kit (boutique RAK)](https://store.rakwireless.com/products/meshtastic-1w-lora-booster-kit-rak3401)
[Datasheet RAK13302 (version VD)](https://docs.rakwireless.com/product-categories/wisblock/rak13302/datasheet-vd/)
[Panneau solaire Keepteen D5 pour nœud LoRa](https://www.keepteen.com/blog-Solar-Lora/How-to-use-D5-Solar-panel-System-to-DIY-a-Lora-Node-Repeater-for-Meshtastic-11929169.html)
[Calculateur de chaîne RF MeshCore (La Résilience)](https://www.la-resilience.fr/2026/09/construire-un-repeteur-meshcore-urbain-avec-un-rak10724/) A la fin de l'article

---

*Proposition validée depuis l’issue #3.*
