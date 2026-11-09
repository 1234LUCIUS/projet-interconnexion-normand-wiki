# Checklist matériel et préparation

## Matériel conseillé

Pour un premier essai, prévoyez :

- un appareil compatible avec Meshtastic ou MeshCore ;
- une antenne adaptée à la bande utilisée, correctement vissée avant la mise sous tension ;
- un câble USB de données, pas seulement un câble de recharge ;
- un téléphone Android/iOS ou un ordinateur selon le client choisi ;
- une batterie ou une alimentation stable ;
- une étiquette avec l’identifiant du nœud et un contact de maintenance non sensible.

Un boîtier étanche, une protection contre les décharges profondes et une fixation mécanique deviennent nécessaires pour un relais extérieur. Une antenne placée haut et dégagée améliore souvent davantage le résultat qu’une puissance plus élevée.

## Avant le flash

1. Identifier précisément la carte et sa révision.
2. Télécharger le firmware depuis le site ou le dépôt officiel.
3. Faire une sauvegarde de la configuration existante si l’appareil est déjà utilisé.
4. Vérifier que l’antenne est connectée avant toute émission.
5. Préparer un câble USB de données et fermer les logiciels qui utilisent le port série.
6. Noter la date, la version du firmware et le rôle prévu.

## Choix rapide

- **Débutant avec téléphone :** Meshtastic en rôle Client.
- **Companion MeshCore :** téléphone relié au nœud, messages et découverte du réseau.
- **Relais permanent :** appareil dédié, alimentation fiable, emplacement autorisé et maintenance prévue.
- **Prototype ou capteur :** choisir le firmware et le rôle après un test sur table.

## Erreurs à éviter

Ne flashez pas un binaire destiné à une autre carte. Ne débranchez pas l’alimentation pendant une mise à jour. N’installez pas un relais dans un lieu inaccessible sans prévoir une méthode de récupération locale. Ne réutilisez pas une clé privée ou une clé de canal dans un appareil prêté.
