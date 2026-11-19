---
layout: wiki
title: "Présentation du Projet d’Interconnexion Normand"
---

# Présentation du Projet d’Interconnexion Normand

## À l’attention des mairies, intercommunalités, départements, associations et partenaires locaux

![Paysage normand traversé par un réseau radio maillé](assets/illustrations/hero-normandie-mesh.png)

Le **Projet d’Interconnexion Normand** a pour ambition de connecter les personnes entre elles en toutes circonstances, y compris lorsque l’accès à Internet ou les réseaux mobiles sont interrompus. C’est une initiative open source et citoyenne qui expérimente des communications radio maillées en Normandie. Son objectif est de créer, avec les habitants, les associations, les collectivités et les propriétaires de sites, une infrastructure locale complémentaire pour échanger des messages courts et des informations de situation.

Le projet repose sur des appareils LoRa basse consommation qui peuvent communiquer directement entre eux et relayer certains messages de nœud en nœud. Un appareil peut être utilisé par une personne — rôle **Companion** — ou installé sur un point fixe pour étendre la couverture — rôle **Repeater**.

![Companion, Repeater et Room Server dans un réseau radio maillé normand](assets/illustrations/meshcore-roles.webp)

> **Notre ambition :** rendre les communications locales plus résilientes, compréhensibles et participatives, en documentant chaque étape et en gardant les habitants au centre du projet.

## Une capacité de continuité pour le territoire

Lorsqu’une tempête majeure — comme les événements cités par le projet, **Irma ou Austen** — ou une panne étendue perturbe l’électricité, Internet ou les réseaux mobiles, les habitants peuvent perdre une partie de leurs moyens habituels pour échanger. Le projet cherche à maintenir un lien radio local entre des personnes équipées, des bénévoles et des équipes de terrain, lorsque la couverture et l’alimentation disponibles le permettent.

Cette ambition ne constitue pas une promesse de fonctionnement dans toutes les circonstances. La portée dépend du relief, des antennes, de l’alimentation, des points hauts, de la météo et de la maintenance. Les messages doivent rester courts, non sensibles et adaptés à un réseau communautaire.

À terme, nous souhaitons intégrer davantage les **mairies, intercommunalités, départements et services de secours** dans une démarche de coopération. L’objectif serait de contribuer à tenir les habitants informés, dans un cadre défini avec les autorités compétentes, en complément des réseaux professionnels et des procédures officielles — jamais en remplacement de ceux-ci.

## Pourquoi s’y intéresser ? Une vocation d’utilité publique

Le Projet d’Interconnexion Normand porte une **vocation d’intérêt général et d’utilité publique** : contribuer à ce que les personnes puissent continuer à se parler et à recevoir des informations utiles lorsque les moyens habituels deviennent indisponibles. Cette mission prend tout son sens dans les territoires ruraux, le bocage, le littoral, les vallées, les forêts, les bourgs éloignés et les secteurs où la couverture mobile peut être inégale.

Une communication locale qui reste possible pendant une coupure Internet, une panne mobile ou une tempête majeure peut aider à maintenir un lien entre habitants, bénévoles, associations, équipes municipales et acteurs de terrain. Le projet ne promet pas que chaque message passera dans toutes les situations ; il construit une capacité supplémentaire, testée et documentée, qui peut renforcer la résilience d’un territoire.

### Une utilité concrète pour chacun

- **Pour le territoire :** mieux comprendre les zones blanches, les effets du relief, de la hauteur, des antennes et des obstacles afin d’identifier des solutions locales de continuité.
- **Pour les habitants :** préserver un moyen de lien de proximité, découvrir la radio, participer à une démarche citoyenne et contribuer à une carte de couverture responsable.
- **Pour les personnes isolées ou éloignées :** disposer, lorsque la couverture le permet, d’un moyen complémentaire pour transmettre un message court, un point de rendez-vous ou une information de situation.
- **Pour les associations :** organiser des randonnées, événements, ateliers et activités de plein air avec une expérimentation radio adaptée au terrain.
- **Pour les collectivités :** étudier une solution sobre, locale, documentée et progressive avant d’envisager une coopération plus large ou un exercice avec les acteurs compétents.
- **Pour les mairies et départements :** mieux connaître les capacités et les limites d’un réseau citoyen pouvant contribuer à relayer des informations publiques, selon des procédures préalablement définies.
- **Pour les services de secours :** ouvrir à terme un dialogue sur la complémentarité, la cartographie des points hauts et les conditions strictes d’une éventuelle coopération — sans remplacer leurs réseaux ni leurs procédures.
- **Pour les partenaires techniques :** contribuer à une infrastructure open source, réutilisable, auditable et améliorable collectivement.
- **Pour les jeunes et les établissements scolaires :** apprendre concrètement les bases de la radio, de l’énergie, de la cartographie, de la coopération et de la gestion responsable de l’information.

L’utilité publique du projet se mesure dans ses résultats : des personnes formées, des zones mieux documentées, des tests reproductibles, des partenaires mieux préparés et une communauté capable de s’entraider. Chaque nœud autorisé, chaque mesure de terrain et chaque contribution documentée peut renforcer la connaissance collective du territoire.

> **Précision importante :** l’expression « vocation d’utilité publique » décrit la finalité collective du projet. Elle ne signifie pas que l’association ou l’initiative bénéficie automatiquement d’une reconnaissance administrative officielle d’utilité publique. Toute coopération institutionnelle doit être validée par les autorités et organismes concernés.

Il ne s’agit donc pas de promettre une couverture partout ni de remplacer les services de secours, les réseaux professionnels ou les moyens réglementaires des collectivités. Le projet est un **complément citoyen, expérimental et d’intérêt général**, qui doit être testé avec les acteurs compétents, encadré par des responsabilités claires et présenté avec ses limites avant tout usage institutionnel.

## En quoi consiste concrètement le réseau ?

Un réseau maillé est composé de plusieurs nœuds radio. Chaque nœud peut recevoir ou transmettre des messages selon son rôle, son logiciel, sa configuration et sa position.

### Le Companion

Le Companion est le nœud utilisé par une personne. Il peut être relié à un téléphone ou à un ordinateur selon le matériel. Il sert à envoyer et recevoir des messages, à réaliser des essais de couverture et à participer à la vie du réseau.

### Le Repeater

Le Repeater est un nœud fixe installé sur un emplacement autorisé. Il est placé en hauteur lorsque cela est possible, avec une antenne adaptée et une alimentation stable. Il relaie des paquets pour améliorer la couverture d’un secteur.

Un Repeater n’est pas un simple appareil que l’on pose n’importe où. Son installation nécessite une autorisation, une personne responsable, une procédure de maintenance et une évaluation des risques.

### Les logiciels utilisés

Le projet utilise encore **Meshtastic** et **MeshCore** pendant une phase de transition.

- **Meshtastic** reste utile pour les randonnées, les événements, les essais rapides et les appareils déjà déployés.
- **MeshCore** est la trajectoire privilégiée pour les nouvelles infrastructures durables, les nouveaux Repeaters et le réseau régional normand.

Le projet **bascule de plus en plus vers MeshCore**. Cette évolution est progressive afin de laisser le temps de tester, documenter, accompagner les utilisateurs et éviter les migrations précipitées.

## Quels bénéfices pour une collectivité ?

### Une expérimentation concrète

Une collectivité peut accueillir un test limité sur un bâtiment, un équipement ou un site autorisé, sans commencer par un déploiement régional. Le projet permet d’observer les résultats réels, de mesurer la couverture et d’identifier les contraintes avant toute décision plus large.

### Une démarche pédagogique

Les habitants et agents intéressés peuvent apprendre les bases de la radio, des antennes, du relief, de la documentation et de la maintenance. Le matériel et les procédures sont expliqués dans un wiki public, ce qui facilite la transmission des connaissances.

### Une approche sobre

Les nœuds LoRa peuvent fonctionner avec une faible consommation électrique. Certains équipements solaires, comme le SenseCAP Solar Node P1-Pro, peuvent être étudiés pour des installations autonomes lorsque le site et la maintenance le permettent.

### Une infrastructure documentée

Chaque installation sérieuse doit être décrite : emplacement général, responsable, modèle, firmware, antenne, alimentation, date du dernier test et procédure de récupération. Cette documentation limite la dépendance à une seule personne.

### Une démarche open source

Les guides, procédures et exemples sont publiés sur GitHub. Les contributions peuvent être relues, corrigées et améliorées collectivement. Une collectivité peut ainsi comprendre ce qui est installé et ne dépend pas d’une solution opaque.

## Exemples de cas d’usage

Les cas d’usage doivent être définis avec les acteurs locaux et rester proportionnés aux capacités réelles du réseau.

- **Événement communal ou associatif :** permettre à une équipe de bénévoles de tester des messages courts sur un parcours ou une zone définie.
- **Randonnée ou activité de plein air :** maintenir un lien entre plusieurs groupes équipés de Companions.
- **Observation de couverture :** parcourir une commune, relever les zones où les messages passent et documenter les limites.
- **Appui logistique non critique :** échanger un point de rendez-vous, une demande de matériel ou une information d’organisation.
- **Expérimentation sur un point haut :** mesurer l’intérêt d’un Repeater autorisé avant d’envisager une extension.
- **Atelier citoyen ou scolaire :** faire découvrir les ondes radio, le maillage, l’énergie et la cartographie de terrain.
- **Réseau associatif local :** relier temporairement ou durablement des membres dans une zone où la téléphonie n’est pas le seul moyen souhaité.

Les messages ne doivent pas contenir de données médicales, de secrets, de clés privées ou d’informations dont la divulgation pourrait mettre une personne ou un site en danger.

## Comment une collectivité peut s’impliquer ?

### 1. Prendre contact

Commencez par expliquer votre territoire, votre besoin, les sites envisagés et le niveau d’expérimentation souhaité. Il n’est pas nécessaire de connaître LoRa ou MeshCore avant le premier échange.

Vous pouvez rejoindre le [serveur Discord officiel du Projet d’Interconnexion Normand](https://discord.gg/HnAfYUSU82) ou écrire à [projet.interconnection.normand@gmail.com](mailto:projet.interconnection.normand@gmail.com).

### 2. Définir un périmètre limité

Choisissez une commune, un quartier, un événement, un itinéraire ou un petit nombre de sites. Un test limité est plus facile à autoriser, mesurer, expliquer et arrêter.

### 3. Identifier les responsabilités

Avant toute installation, clarifiez :

- qui autorise l’accès au site ;
- qui fournit ou possède le matériel ;
- qui configure le nœud ;
- qui intervient en cas de panne ;
- qui décide de publier ou non la position ;
- qui récupère le matériel à la fin de l’expérimentation ;
- quelle durée est prévue pour le test.

### 4. Faire une étude radio simple

Comparez plusieurs emplacements avec les outils disponibles, puis réalisez un test réel. La hauteur, la ligne de vue, l’antenne, les obstacles, les parasites et l’alimentation ont souvent plus d’importance que la puissance annoncée sur la fiche produit.

Le projet peut s’appuyer sur [MeshLab-RF](https://github.com/1234LUCIUS/meshlab-rf/), le [Meshtastic Site Planner](https://site.meshtastic.org/) et les outils de couverture MeshCore lorsque ceux-ci sont adaptés au cas étudié.

### 5. Tester avant d’installer durablement

Configurez le matériel sur table, testez avec plusieurs Companions, vérifiez les annonces et mesurez les limites. Ne présentez pas une simulation comme une garantie de couverture.

### 6. Documenter et partager le bilan

À la fin du test, rédigez un bilan simple : ce qui a fonctionné, ce qui n’a pas fonctionné, les zones couvertes, les interruptions, les contraintes de maintenance et les améliorations possibles.

## Sécurité, vie privée et responsabilités

Le projet applique quelques règles essentielles :

- aucune installation sur un terrain, un toit ou un bâtiment sans autorisation ;
- aucune promesse de disponibilité, de confidentialité absolue ou de secours garanti ;
- aucune clé privée, clé de canal, QR code ou donnée sensible dans une issue ou une capture ;
- aucune publication de position exacte d’un domicile, d’un site sensible ou d’un relais vulnérable ;
- aucun travail en hauteur sans compétence, équipement et autorisation adaptés ;
- respect de la réglementation radio applicable en France et des paramètres autorisés ;
- possibilité de couper, récupérer ou retirer un nœud qui présente un risque.

Les positions publiées sur la carte communautaire doivent être approximatives lorsque la précision créerait un risque. La participation est volontaire et chaque acteur doit pouvoir demander la correction ou le retrait d’une information qui le concerne.

## Ce que le projet demande aux partenaires

Nous recherchons des partenaires qui souhaitent :

- accueillir une expérimentation encadrée ;
- aider à identifier des points hauts accessibles et autorisés ;
- prêter ou financer du matériel ;
- participer à des mesures de terrain ;
- contribuer à la documentation et à la formation ;
- partager un retour d’expérience honnête, y compris lorsque le test échoue ;
- aider à construire une infrastructure locale utile sans dépendance à une seule personne.

Il n’est pas nécessaire de promettre un grand réseau dès le départ. Un seul test bien documenté peut déjà apporter une information utile au territoire.

## Proposition de premier rendez-vous

Pour commencer, nous pouvons échanger sur :

1. le besoin local et le public concerné ;
2. la zone géographique et les obstacles connus ;
3. les sites éventuellement disponibles ;
4. le rôle des bénévoles, agents et associations ;
5. la durée et le budget éventuel de l’expérimentation ;
6. les règles de sécurité et de confidentialité ;
7. les critères qui permettront de décider de la suite.

## Intéressé ?

Le projet est ouvert aux collectivités, aux associations, aux clubs radio, aux établissements scolaires, aux habitants et aux personnes qui souhaitent apprendre. Même une question générale peut être le début d’un atelier, d’un test de couverture ou d’un partenariat utile.

- Rejoignez le [Discord officiel du Projet d’Interconnexion Normand](https://discord.gg/HnAfYUSU82).
- Écrivez à [projet.interconnection.normand@gmail.com](mailto:projet.interconnection.normand@gmail.com).
- Consultez le [guide débutant](guide-debutant.md) pour comprendre le parcours technique.
- Consultez les [profils MeshCore France / Normandie](meshcore/03-profils-france-normandie.md) pour les nouveaux déploiements.
- Consultez la [procédure de déploiement d’un relais](terrain/02-deployer-un-relais.md) avant toute installation fixe.

> **Une infrastructure utile commence par une conversation, un test mesuré et une documentation partagée.**
