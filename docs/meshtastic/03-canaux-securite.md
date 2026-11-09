# Meshtastic — canaux et sécurité

## Canal public ou privé

Un canal Meshtastic associe un nom et une clé pré-partagée. Pour communiquer, les appareils doivent avoir des paramètres correspondants. Un canal public facilite le diagnostic mais ne doit pas être considéré comme confidentiel. Un canal privé limite la lecture aux appareils possédant la bonne clé, sans supprimer les risques liés à la radio, aux terminaux et aux erreurs humaines.

N’écrivez jamais une clé dans une issue GitHub, un salon public ou une capture d’écran. Distribuez-la par un moyen réservé aux membres concernés, puis faites-la tourner si elle a été exposée.

## Position et télémétrie

Désactivez la position si elle n’est pas nécessaire. Pour une activité de terrain, préférez une précision réduite et évitez de transmettre la position d’un domicile, d’une personne vulnérable ou d’un lieu sensible.

La télémétrie peut révéler un rythme d’activité, une température, une tension de batterie ou la présence d’un relais. Publiez uniquement les informations utiles à la maintenance.

## MQTT et Internet

MQTT peut relier un réseau radio à Internet. Cela change le modèle de menace : des messages ou métadonnées peuvent quitter le périmètre radio. L’activation doit être une décision explicite, documentée par canal, avec un courtier identifié et une politique de conservation connue.

Dans le doute, laissez les fonctions uplink et downlink désactivées.

## Gestion des appareils

Un appareil perdu doit être considéré comme compromis. Révoquez ou remplacez les clés auxquelles il avait accès. Protégez les exports de configuration et utilisez un canal d’administration séparé si la version et l’architecture le permettent.

## Limites

Le chiffrement ne protège pas contre les erreurs de destinataire, les captures d’écran, la compromission du téléphone, l’analyse du trafic ou la localisation radio. N’utilisez pas le mesh pour des informations dont la divulgation mettrait quelqu’un en danger.

## Une question ?

Vous pouvez à tout moment rejoindre le [serveur Discord officiel du Projet d’Interconnexion Normand](https://discord.gg/HnAfYUSU82) ou nous contacter par e-mail à [projet.interconnection.normand@gmail.com](mailto:projet.interconnection.normand@gmail.com).
