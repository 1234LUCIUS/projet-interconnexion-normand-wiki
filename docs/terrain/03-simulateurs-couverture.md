---
layout: wiki
title: "Où installer son nœud ?"
---

# Où installer son nœud ?

![Point haut normand avec visibilité dégagée pour une couverture radio maillée](../assets/illustrations/radio-coverage.png)

Un bon emplacement n’est pas forcément le point le plus haut disponible. Il faut combiner hauteur, visibilité radio, accès autorisé, alimentation, sécurité, météo et possibilité de maintenance.

> **Vous avez trouvé un spot ?** Partagez une photo non sensible ou demandez un avis sur le [Discord officiel du projet](https://discord.gg/HnAfYUSU82). Vous pouvez aussi écrire à [projet.interconnection.normand@gmail.com](mailto:projet.interconnection.normand@gmail.com) avant d’installer votre nœud.

## Pour un Companion

Portez le nœud avec l’antenne dégagée du corps et des objets métalliques. En véhicule, éloignez l’antenne de l’électronique bruyante et utilisez une fixation stable. À pied, évitez de l’enfermer au fond d’un sac ou dans une boîte métallique. Pour cartographier une zone, gardez le téléphone et le Companion connectés en Bluetooth et notez les endroits où les messages ou adverts sont reçus.

## Pour un Repeater

Cherchez une hauteur utile avec une ligne de vue vers plusieurs zones, pas seulement un sommet isolé. Évitez les cages métalliques, murs en béton armé, gaines techniques et toitures qui masquent l’horizon. Vérifiez l’accès, l’accord du propriétaire, la résistance au vent, la mise à la terre et la protection contre l’eau.

Un relais placé trop près d’une source de bruit radio ou avec une mauvaise alimentation peut être moins utile qu’un nœud plus bas mais mieux dégagé.

## Spots convoités : pourquoi ces lieux sont intéressants ?

Certains secteurs attirent l’attention pour l’installation éventuelle d’un Repeater, car ils combinent une altitude relative intéressante, une vue dégagée et une position centrale entre plusieurs bassins de population. Un bon spot peut améliorer la portée vers plusieurs directions et réduire le nombre de relais nécessaires. Il ne suffit toutefois pas de repérer une zone rouge sur une simulation : il faut vérifier le profil topographique, la hauteur réelle de l’antenne, les obstacles, le bruit radio, l’alimentation, l’accès et l’autorisation du propriétaire.

Les exemples ci-dessous sont les trois spots nommés visibles dans la fonction **« Couverture d’antenne » de MeshCore**. Les coordonnées affichées dans chaque capture servent à retrouver le point cartographié ; elles ne constituent ni une réservation de site ni une autorisation d’installation.

### Spot 1 — Mont Pinçon — 364 m d’altitude

![Couverture MeshCore du mont Pinçon, 364 m d’altitude](../assets/meshcore-coverage/spot-seulline-calvados.webp)

La couverture du **mont Pinçon** atteint une altitude de **364 m**. Coordonnées affichées dans MeshCore : **48.999296, -0.692481**. Ce spot est recherché pour sa hauteur et sa capacité potentielle à couvrir plusieurs directions. La couverture affichée reste une simulation : la liaison doit être confirmée par un profil de terrain et un test radio réel.

➡️ [Voir la carte topographique ciblée du mont Pinçon sur topographic-map.com](https://fr-fr.topographic-map.com/map-4nhdgp/Mont-Pin%C3%A7on/)

### Spot 2 — Mont de la Foudre — 276 m d’altitude

![Couverture MeshCore du mont de la Foudre, 276 m d’altitude](../assets/meshcore-coverage/spot-pommeraye-calvados.webp)

La couverture du **mont de la Foudre** atteint une altitude de **276 m**. Coordonnées affichées dans MeshCore : **48.911527, -0.409591**. Ce spot est recherché pour sa hauteur et sa vue potentielle vers plusieurs secteurs. La couverture affichée reste une simulation : la liaison doit être confirmée par un profil de terrain et un test radio réel.

➡️ [Voir la carte topographique ciblée sur La Pommeraye et le mont de la Foudre](https://fr-fr.topographic-map.com/map-hz5tgt/La-Pommeraye/)

### Spot 3 — Mont du Père — 271 m d’altitude

![Couverture MeshCore du mont du Père, 271 m d’altitude](../assets/meshcore-coverage/spot-calvados-3.webp)

La couverture du **mont du Père** atteint une altitude de **271 m**. Coordonnées affichées dans MeshCore : **48.938209, -0.488135**. Ce spot est recherché pour sa position en hauteur et sa capacité potentielle à couvrir plusieurs directions. La présence de vallées rend indispensable une vérification de la ligne de vue et un test radio réel.

➡️ [Voir la carte topographique ciblée sur Clécy et le mont du Père](https://fr-fr.topographic-map.com/map-47tj/Cl%C3%A9cy/)

Les cartes sont fournies par [fr-fr.topographic-map.com](https://fr-fr.topographic-map.com/). Elles permettent de visualiser l’altitude et le relief autour de chaque spot ; elles complètent la simulation MeshCore, mais ne remplacent pas un test radio sur le terrain.

Pour situer ces reliefs dans le paysage normand, voir la présentation de [la Suisse normande par l’office de tourisme](https://www.suisse-normande-tourisme.com/decouvertes/la-suisse-normande) et la page consacrée aux [points de vue des Montagnes de Normandie](https://www.montagnesdenormandie.fr/decouvrir-les-montagnes-de-normandie/un-relief-unique/les-points-de-vue/). Les altitudes et les noms des trois monts correspondent aux informations fournies pour ces captures ; elles ne remplacent pas une étude radio ou une autorisation d’occupation.

### Comment valider un spot avant toute installation ?

1. Relever la commune et le secteur général, sans publier l’adresse précise d’un domicile.
2. Comparer au moins deux emplacements avec MeshLab-RF, Meshtastic Site Planner ou un outil de profil topographique.
3. Vérifier la hauteur disponible, la ligne de vue et la première zone de Fresnel à 868 MHz.
4. Tester temporairement avec un Companion et relever les messages, adverts, RSSI et pertes de paquets.
5. Obtenir l’accord écrit du propriétaire ou de la collectivité avant toute pose d’antenne.
6. Documenter la couverture réellement mesurée, en distinguant clairement simulation et observation.

Un spot est donc « convoité » parce qu’il peut couvrir plusieurs directions depuis une position haute et dégagée, pas parce qu’il garantit une portée donnée. Pour proposer un point haut ou demander un avis, partagez le secteur général sur le [Discord officiel du projet](https://discord.gg/HnAfYUSU82) ou écrivez à [projet.interconnection.normand@gmail.com](mailto:projet.interconnection.normand@gmail.com).

## À 868 MHz : garder la zone de Fresnel dégagée

La **ligne de visée géométrique** est le segment direct entre les antennes. Pour une liaison radio, ce segment ne suffit pas à décrire le trajet : l’onde occupe aussi un volume autour de lui, appelé **première zone de Fresnel**. Un relief, un bâtiment ou une végétation qui pénètre dans ce volume peut atténuer ou faire varier le signal, même si les deux antennes semblent se voir. À l’inverse, une liaison peut parfois encore fonctionner lorsque le relief masque le segment direct, grâce à la diffraction, mais avec des pertes qui dépendent de la forme et de la position de l’obstacle.

En pratique, on cherche généralement à dégager au moins **60 % du rayon de la première zone de Fresnel** sur l’ensemble du trajet. À 868 MHz, la longueur d’onde est d’environ 34,5 cm. Le rayon varie avec la fréquence et avec les distances de part et d’autre de chaque point : `r₁ = √(λ × d₁ × d₂ / (d₁ + d₂))`, avec les distances en mètres. À titre d’exemple, pour une liaison de 13,6 km, le rayon au milieu du trajet est d’environ **34 m** ; la marge de dégagement de 60 % représente environ **21 m** autour de la ligne directe à cet endroit. C’est un ordre de grandeur géométrique, pas une hauteur d’antenne universelle : le profil réel, le relief et les obstacles comptent tout au long du trajet. Voir aussi la [recommandation ITU-R P.526-16](https://www.itu.int/dms_pubrec/itu-r/rec/p/R-REC-P.526-16-202511-I!!PDF-E.pdf) sur la diffraction et la note [Line of Sight Obstruction de Campbell Scientific](https://s.campbellsci.com/documents/au/technical-papers/line-of-sight-obstruction.pdf).

![Profil topographique estimé d’une liaison radio dans le secteur Vire–Vassy, Calvados, avec la ligne directe et la première zone de Fresnel](../assets/illustrations/fresnel-vire-vassy.png)

*Exemple de profil Vire–Vassy : environ 13,6 km, avec des antennes indiquées à 6 m et 10 m. Le profil signale que la ligne de visée directe est masquée, mais l’outil affiche une marge calculée de +28,7 dB : une obstruction géométrique n’implique donc pas nécessairement une absence totale de signal. Cette valeur reste une estimation du modèle, ni une mesure radio de terrain ni une garantie de liaison. Les coordonnées précises et l’identifiant du répéteur ont été masqués dans la capture.*

## Méthode en cinq étapes

1. Dessiner la zone à couvrir et les utilisateurs prioritaires.
2. Tester deux ou trois points avec une simulation.
3. Comparer hauteur, antenne et terrain, pas seulement la puissance.
4. Installer temporairement et faire un test radio réel.
5. Publier la couverture observée avec ses limites, jamais une promesse absolue.

## Outils de simulation et de couverture

- **[Meshtastic Site Planner](https://site.meshtastic.org/)** : placez un émetteur sur la carte, choisissez un appareil ou réglez la radio, puis lancez la simulation.
- **[MeshLab-RF — projet de 1234LUCIUS](https://github.com/1234LUCIUS/meshlab-rf/)** : simulateur local pour comparer Meshtastic et MeshCore, le relief, le bâti, la végétation, les antennes, les relais, les pertes et la charge réseau. Il ne remplace pas une mesure terrain.
- **[MeshMapper](https://meshmapper.net/)** : application mobile de wardriving MeshCore et carte communautaire de mesures de couverture. Elle collecte des observations GPS associées aux signaux entendus ou aux réponses des répéteurs ; ce sont des mesures de terrain, pas une simulation ni une garantie de couverture. Consultez le [guide de test radio et wardriving](01-test-radio.md) et la [politique de confidentialité MeshMapper](https://wiki.meshmapper.net/privacy/) avant de téléverser des traces.
- **[mapme.sh](https://mapme.sh/)** : carte communautaire de couverture MeshCore. Elle permet de visualiser des mesures de terrain agrégées et d’enregistrer des parcours depuis un Companion compatible.
- **[MeshMap](https://meshmap.net/)** : carte communautaire de nœuds Meshtastic visibles via MQTT. La présence d’un nœud dépend de sa politique de position et de sa connexion éventuelle à Internet.
- **[Calculateur LoRa de Semtech](https://www.semtech.com/design-support/lora-calculator)** : outil de bilan radio ; utile pour comprendre la sensibilité et le compromis débit/portée.

## Couverture estimée dans l’application MeshCore

Le client MeshCore comprend un outil **Antenna Coverage** et un outil **Line of Sight**. Ils servent à examiner une couverture estimée et la visibilité entre des points à partir de la carte, de couches importables et de paramètres tels que la hauteur d’antenne. Le journal officiel de l’application documente les couches multiples, leur import/export et l’ouverture de l’outil de visibilité depuis la carte de couverture : [changelog MeshCore](https://app.meshcore.nz/assets/CHANGELOG.md).

Ces vues sont des outils de planification, pas des relevés radio effectués pendant un trajet. Les résultats dépendent des hauteurs et données de relief disponibles; les bâtiments et la végétation peuvent être absents ou simplifiés dans les modèles. La couverture affichée n’est donc pas une promesse de liaison. Pour comprendre la visibilité et le dégagement de la première zone de Fresnel, consultez la section **À 868 MHz : garder la zone de Fresnel dégagée** plus haut dans cette page, ainsi que la page [Applications mobiles](../09-applications-mobiles.html).

Pour relever des signaux réellement reçus en déplacement, utilisez un outil de cartographie de terrain comme [mapme.sh](https://mapme.sh/) ou [MeshMapper](https://meshmapper.net/). Ces outils communautaires associent des observations de signal à une position; ils ne sont pas le même outil que **Antenna Coverage** intégré au client MeshCore. Consultez le [guide de test radio et wardriving](01-test-radio.html) avant d’enregistrer ou de publier des traces.

## Confidentialité

Pour une carte publique, publiez une zone ou une cellule approximative plutôt que les coordonnées exactes d’un domicile. N’ajoutez jamais de clé privée, mot de passe, QR code ou détail qui faciliterait l’accès à un relais.

## Une question ?

Vous pouvez à tout moment rejoindre le [serveur Discord officiel du Projet d’Interconnexion Normand](https://discord.gg/HnAfYUSU82) ou nous contacter par e-mail à [projet.interconnection.normand@gmail.com](mailto:projet.interconnection.normand@gmail.com).
