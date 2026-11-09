# MeshCore : comprendre les régions et les scopes

## L’idée simple

Une **région MeshCore** est une étiquette de zone. Elle indique jusqu’où un message, une annonce ou un flood peut être relayé. Elle aide à éviter qu’un message local parte dans toute l’Europe.

Une région n’est pas :

- une fréquence radio ;
- une clé de chiffrement ;
- un canal ;
- une frontière administrative officielle.

La fréquence et la modulation disent **comment la radio parle**. Le canal et la clé disent **qui peut lire**. Le scope régional dit **dans quelle zone le paquet peut être propagé**.

## L’arbre des régions normandes

Le projet utilise une hiérarchie simple :

```text
 eu                 Europe
 └── fr             France
     └── fr-nor     Normandie
         ├── fr-14  Calvados
         ├── fr-50  Manche
         ├── fr-61  Orne
         ├── fr-76  Seine-Maritime
         └── fr-27  Eure
```

Un paquet avec le scope `fr-14` est destiné au périmètre local du Calvados. Un paquet avec `fr-nor` concerne la Normandie. Un paquet avec `fr` concerne le périmètre français du projet. Le scope `eu` est plus large et doit être utilisé seulement pour les canaux communs prévus à ce niveau.

Ces noms sont les conventions du Projet d’Interconnexion Normand. Ils doivent être saisis exactement, avec les mêmes minuscules et tirets.

## Les commandes du répéteur

Sur un répéteur MeshCore du projet, la hiérarchie est créée par :

```text
region def eu fr fr-nor fr-14
region default fr
region home fr
region save
```

Pour un autre département, remplacez le dernier élément :

```text
region def eu fr fr-nor fr-50
```

ou `fr-61`, `fr-76` ou `fr-27` selon l’emplacement du répéteur. La commande `region def` crée ou met à jour l’arbre. `region default` choisit le scope utilisé par défaut. `region home` indique la région d’origine du nœud. `region save` conserve les changements après un redémarrage.

### Un répéteur peut couvrir plusieurs départements

Le département où se trouve le répéteur reste son scope local et sa région d’accueil. Mais un répéteur peut aussi déclarer les départements voisins qu’il reçoit réellement. Par exemple, un répéteur du Calvados peut garder `fr-14` et ajouter `fr-61`, `fr-50` et `fr-27` si des liaisons radio vers l’Orne, la Manche et l’Eure sont confirmées :

```text
region def eu fr fr-nor fr-14
region put fr-61 fr-nor
region put fr-50 fr-nor
region put fr-27 fr-nor
region default fr
region home fr
region save
```

`region put nom parent` ajoute une région sous son parent. Ici, `fr-61`, `fr-50` et `fr-27` sont ajoutées sous `fr-nor`. Ne déclarez pas tous les départements limitrophes par principe : ajoutez seulement ceux qui sont effectivement reçus ou reliés par ce répéteur. Ajouter un scope ne crée pas de portée radio ; cela organise la propagation des paquets déjà atteignables.

Dans le profil complet du projet, ces commandes sont exécutées avant `reboot` puis `clock sync`.

## Les commandes ne font pas la même chose

- `region def` construit la hiérarchie.
- `region default fr` choisit le scope par défaut.
- `region home fr` indique la région d’accueil du nœud.
- `region save` enregistre les changements.
- `flood.max.unscoped` limite les floods qui n’ont aucun scope.
- `flood.max.advert` limite la propagation des annonces.

Les limites de flood empêchent un paquet de voyager sans fin. Elles ne remplacent pas le choix correct du scope.

## Les scopes des Companions

Pour un Companion normand, le projet utilise `fr` comme scope par défaut. Activez les chemins sur deux octets dans l’application MeshCore lorsque votre appareil et le réseau sont compatibles avec la configuration du projet. Les répéteurs normands ciblés utilisent un firmware récent et le réglage `path.hash.mode 1` pour leurs propres annonces.

Vous n’avez normalement pas besoin de modifier l’arbre des régions sur votre téléphone. Choisissez le scope du canal ou du groupe selon l’usage.

## Canaux publics du projet

Les canaux publics communs sont : `#fr`, `#test`, `#emergency`, `#meteo`, `#info`, `#bot`, `#frblabla` et `#technic`.

- `#fr` utilise le scope `fr`.
- `#test`, `#emergency`, `#meteo`, `#info`, `#bot`, `#frblabla` et `#technic` utilisent `fr-nor`.
- Le canal public général peut utiliser `eu` lorsque le projet le demande.
- Un canal local comme `#potes` utilise le département : `fr-14` dans le Calvados, `fr-50` dans la Manche, `fr-61` dans l’Orne, `fr-76` en Seine-Maritime et `fr-27` dans l’Eure.

Un scope ne rend pas un canal privé. Pour les informations sensibles, utilisez une clé de canal appropriée et ne publiez jamais la clé dans le wiki ou dans Discord.

## Exemple concret

Vous êtes dans le Calvados et vous voulez parler à des amis proches : utilisez le canal `#potes` avec le scope `fr-14`.

Vous voulez parler à des membres dans toute la Normandie : utilisez un canal comme `#info` avec le scope `fr-nor`.

Vous voulez rejoindre la communauté française : utilisez `#fr` avec le scope `fr`.

Vous ne savez pas quoi choisir : laissez le scope `fr` sur votre Companion et demandez au groupe quel canal utiliser.

## Sources

- [MeshCore CLI — gestion officielle des régions](https://docs.meshcore.io/cli_commands/)
- [MeshCore FAQ — floods, annonces et chemins sur plusieurs octets](https://docs.meshcore.io/faq/)
- [Configuration MeshCore France / Normandie du projet](03-profils-france-normandie.md)
