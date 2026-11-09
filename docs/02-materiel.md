# Quel matériel choisir ?

Le bon premier appareil est celui dont le modèle exact est supporté par le firmware, qui possède une antenne adaptée à la bande utilisée et que vous pouvez récupérer physiquement en cas d’échec de mise à jour. Ne choisissez pas uniquement sur la puissance annoncée.

## Le choix simple pour débuter

Pour Meshtastic, les cartes avec radio Semtech SX126x ou LR11xx sont à privilégier d’après la documentation officielle. Les appareils nRF52 consomment généralement moins que les ESP32. Les ESP32 restent intéressants si vous voulez du Wi-Fi, davantage de mémoire ou une alimentation secteur.

Pour MeshCore, vérifiez le modèle dans le [Web Flasher officiel](https://flasher.meshcore.io/) juste avant l’achat. La liste évolue. Le [site MeshCore](https://meshcore.io/) présente notamment les familles Wio Tracker, ThinkNode, Heltec, WisMesh, T-Deck et les nœuds solaires compatibles.

## Profils d’usage

### Companion de poche

Choisissez un appareil compact avec Bluetooth, batterie intégrée et antenne externe ou correctement accordée. Exemples à vérifier dans la liste de support : Seeed T1000-E, Wio Tracker L1, WisMesh Pocket, T-Echo ou un Heltec compatible. Pour MeshCore, flashez le firmware **Companion BLE** si vous utilisez Android/iOS.

### Nœud de test économique

Une carte Heltec compatible avec SX1262 est pratique pour apprendre et flasher rapidement, mais son ESP32 consomme davantage et son antenne d’origine peut être limitée. Utilisez-la à courte distance avant de la mettre sur le terrain.

### Relais permanent

Préférez un appareil dédié, basse consommation, avec un boîtier, une alimentation documentée et une antenne externe. Un RAK WisBlock/RAK4631 ou un appareil explicitement vendu comme repeater peut convenir si le modèle est encore supporté. Pour MeshCore, flashez **Repeater** et non Companion.

### Nœud autonome avec écran

Un T-Deck, T-Pager ou appareil similaire peut fonctionner sans téléphone selon le firmware MeshCore disponible. Vérifiez l’autonomie, le clavier, la version et les fonctions réellement supportées avant achat.

## Accessoires à ne pas négliger

Achetez une antenne 868 MHz adaptée, un câble USB de données, une batterie protégée, un boîtier étanche si nécessaire, un câble coaxial court et des fixations mécaniques. L’antenne doit être branchée avant la mise sous tension. Une mauvaise adaptation ou un connecteur U.FL mal fixé peut endommager l’étage radio.

## Références matérielles

- [Meshtastic — matériel supporté](https://meshtastic.org/docs/hardware/devices/)
- [Meshtastic — démarrage matériel](https://meshtastic.org/docs/getting-started/)
- [MeshCore — site officiel et matériel](https://meshcore.io/)
- [MeshCore — FAQ matériel et rôles](https://docs.meshcore.io/faq/)
- [MeshCore — dépôt GitHub](https://github.com/meshcore-dev/MeshCore)
- [Web Flasher MeshCore](https://flasher.meshcore.io/)

Les liens ci-dessus sont des références de compatibilité. Les prix, vendeurs et révisions changent ; vérifiez le modèle exact et la bande 868 MHz avant commande.
