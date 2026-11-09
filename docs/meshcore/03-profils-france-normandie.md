# MeshCore — profils France / Normandie

Cette page propose des profils de départ pour la bande européenne utilisée en France. Elle ne remplace ni la réglementation française, ni la documentation de la version installée, ni la décision du réseau local. Tous les appareils qui doivent communiquer doivent partager les mêmes paramètres radio.

## Règle de base

Pour la France, choisissez un matériel et un firmware **868 MHz / EU**. Ne sélectionnez pas US/915 MHz. Vérifiez toujours que la fréquence, la bande passante, le facteur d’étalement et le coding rate sont autorisés pour votre matériel et votre usage.

La documentation MeshCore CLI expose la commande générale :

```text
set radio <fréquence_MHz>,<bande_passante_kHz>,<SF>,<CR>
```

Un redémarrage est nécessaire pour appliquer la radio. La puissance TX doit rester compatible avec la carte, son éventuel amplificateur et les limites françaises : ne copiez pas une valeur d’un autre modèle.

## Profil Europe Narrow — recommandé pour commencer en Normandie

Ce profil est adapté à une communauté qui veut réduire l’occupation radio et aligner ses appareils sur un profil européen étroit :

```text
Fréquence : 869.618 MHz
Bande passante : 62.5 kHz
Spreading Factor : 8
Coding Rate : 8
Rôle Companion : Companion BLE ou USB selon le client
Rôle relais : Repeater dédié, même profil radio
```

Dans la console MeshCore, la forme correspondante est :

```text
set radio 869.618,62.5,8,8
```

Utilisez ce profil uniquement si le groupe auquel vous souhaitez vous connecter l’utilise également. Un Companion et un Repeater doivent être alignés. Ne changez pas la fréquence d’un relais opérationnel sans annoncer une fenêtre de maintenance.

## Profil officiel des répéteurs normands — firmware 1.16 ou supérieur

La configuration suivante est le profil opérationnel fourni par le Projet d’Interconnexion Normand pour ses répéteurs MeshCore à partir du firmware 1.16. Elle doit être appliquée à **tous les répéteurs du réseau**, avec le département adapté à l’emplacement du répéteur.

Exemple pour le Calvados, département 14 :

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
region def eu fr fr-nor fr-14
region default fr
region home fr
region save
reboot
clock sync
```

Pour un répéteur situé dans un autre département normand, remplacez uniquement le scope départemental :

- Manche : `fr-50`
- Orne : `fr-61`
- Seine-Maritime : `fr-76`
- Eure : `fr-27`

Le Calvados utilise `fr-14`. La commande complète devient donc, par exemple, `region def eu fr fr-nor fr-50` pour un répéteur situé dans la Manche. Ne copiez pas une configuration départementale sur un relais installé ailleurs.

### À quoi servent les réglages principaux ?

Le profil radio aligne le répéteur sur le profil **EU/UK Narrow** du projet. Les intervalles d’advert et de flood contrôlent la fréquence à laquelle le répéteur annonce sa présence et relaie les annonces. `multi.acks 1` active la gestion prévue des acquittements multiples. `dutycycle 10` fixe la limite de taux d’occupation configurée par le projet ; elle ne dispense pas de respecter les limites réglementaires applicables.

`path.hash.mode 1` active les identifiants de chemin sur deux octets. `loop.detect minimal` limite les boucles avec un coût réduit. Les valeurs `flood.max.unscoped 5` et `flood.max.advert 6` bornent la propagation des floods et des annonces. Les commandes `region` définissent la hiérarchie de scopes : Europe, France, Normandie, puis département.

Après `reboot`, exécutez `clock sync` et vérifiez le résultat avec les commandes de diagnostic disponibles dans votre version. Faites une sauvegarde de la configuration et gardez un accès USB local avant toute modification d’un relais distant.

## Profil Europe Long Range — pour les liaisons difficiles

Ce profil privilégie la sensibilité et la portée au prix d’un débit plus faible et d’un temps d’occupation plus long :

```text
Fréquence : 869.525 MHz
Bande passante : 250 kHz
Spreading Factor : 11
Coding Rate : 5
Rôle Companion : Companion BLE ou USB selon le client
Rôle relais : Repeater dédié, même profil radio
```

Commande console :

```text
set radio 869.525,250,11,5
```

Ne mélangez pas Narrow et Long Range dans le même segment en espérant qu’ils s’entendent. Pour un premier réseau normand, choisissez un seul profil communautaire et documentez-le dans la page de configuration du projet.

## Configuration d’un Companion

1. Flasher le firmware Companion depuis le [Web Flasher officiel](https://flasher.meshcore.io/).
2. Sélectionner le modèle exact et l’option BLE ou USB adaptée.
3. Configurer la radio avec le profil décidé localement.
4. Activer les chemins ou annonces sur **2 octets** dans l’application MeshCore.
5. Définir le scope par défaut sur `fr`.
6. Définir un nom court qui ne révèle pas votre identité complète.
7. Connecter l’application [MeshCore](https://app.meshcore.nz/) ou le client mobile officiel.
8. Tester à quelques mètres, puis dans deux lieux connus.

Le scope `fr` permet au Companion de rester dans l’espace français par défaut. Pour un échange local, utilisez ensuite le scope du canal ou du groupe concerné. Ne donnez pas à un Companion le scope départemental d’un autre département sans raison.

## Canaux publics communs

Les canaux publics communs du projet sont : `#fr`, `#test`, `#emergency`, `#meteo`, `#info`, `#bot`, `#frblabla` et `#technic`.

- `#fr` utilise le scope `fr`.
- `#test`, `#emergency`, `#meteo`, `#info`, `#bot`, `#frblabla` et `#technic` utilisent le scope `fr-nor`.
- Le canal public général utilise le scope `eu` lorsque le projet le prévoit.
- Un canal local comme `#potes` utilise le scope départemental : `fr-14` dans le Calvados, `fr-50` dans la Manche, `fr-61` dans l’Orne, `fr-76` en Seine-Maritime et `fr-27` dans l’Eure.

Les noms de canaux et leurs scopes doivent être saisis exactement. Un canal public n’est pas un canal confidentiel : ne transmettez pas de données personnelles, de clés, d’adresses ou d’informations sensibles.

## Configuration d’un Repeater

1. Utiliser un appareil dédié et une alimentation stable.
2. Flasher le rôle **Repeater**, pas Companion.
3. Régler la même radio que les Companions du réseau.
4. Définir un nom de relais et les informations de maintenance, sans publier une adresse privée.
5. Configurer la position avec une précision compatible avec la sécurité du site.
6. Tester sur table avant l’installation en hauteur.
7. Vérifier `stats-radio`, `stats-packets`, les voisins et l’autonomie après pose.

Le relais doit être installé haut, dégagé et accessible à un mainteneur autorisé. Un relais n’est utile que si l’antenne, le bruit radio, l’alimentation et le chemin vers les utilisateurs sont corrects.

## Puissance et réglementation

Le firmware peut afficher une limite, mais cette limite n’est pas une validation juridique automatique. Tenez compte du gain d’antenne, du câble, d’un éventuel amplificateur et du taux d’occupation. Consultez l’[Arcep — portail bandes libres](https://www.arcep.fr/la-regulation/grands-dossiers-reseaux-mobiles/le-guichet-start-up-et-innovation/le-portail-bandes-libres.html) et la [région France Meshtastic](https://meshtastic.org/docs/configuration/region-by-country/).

## Sources techniques

- [MeshCore CLI — réglages radio](https://docs.meshcore.io/cli_commands/)
- [MeshCore FAQ — Companion et Repeater](https://docs.meshcore.io/faq/)
- [Discussion MeshCore sur les profils EU/UK](https://github.com/meshcore-dev/MeshCore/discussions/1650)
- [MeshCore — Web Flasher](https://flasher.meshcore.io/)
