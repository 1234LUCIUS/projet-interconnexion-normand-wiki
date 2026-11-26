---
layout: wiki
title: "État actuel et décisions du projet"
description: "Décisions et orientation actuellement retenues par le Projet d’Interconnexion Normand pour MeshCore, Meshtastic et les nouvelles infrastructures."
theme: "Découvrir le projet"
theme_url: "/explorer-le-wiki.html#decouvrir"
---

# État actuel et décisions du projet

Cette page est la référence pour les décisions en vigueur. Elle décrit la direction actuelle du Projet d’Interconnexion Normand ; elle ne remplace ni le [comparatif des usages](01-choisir-son-reseau.html), ni les guides de configuration propres à chaque logiciel.

## Orientation actuelle

Le projet a commencé avec Meshtastic et évolue progressivement vers MeshCore. Pour toute nouvelle infrastructure régionale ou tout nouveau répéteur permanent, l’orientation privilégiée est désormais **MeshCore**. Meshtastic reste documenté pour les appareils déjà en service ainsi que pour les usages individuels, mobiles et ponctuels.

Cette transition est progressive. Un appareil Meshtastic déjà déployé ne doit pas être reflashé uniquement parce que le projet évolue. Avant toute maintenance, sauvegardez sa configuration et vérifiez le matériel, le rôle attendu et le réseau auquel il doit se connecter.

## Décisions pour les nouveaux déploiements

- Pour rejoindre durablement l’infrastructure MeshCore, un nouveau membre peut commencer par un **Companion MeshCore**.
- Un nouveau **Repeater MeshCore** doit utiliser un appareil dédié, un emplacement autorisé et un responsable de maintenance identifié.
- Les répéteurs normands suivent les [profils MeshCore France / Normandie](meshcore/03-profils-france-normandie.html). Confirmez le profil applicable auprès de l’équipe avant l’installation.
- Meshtastic reste le choix possible pour certains groupes mobiles ou événements et pour maintenir les appareils déjà présents. Les critères concrets sont dans [Choisir son réseau](01-choisir-son-reseau.html).

## Repères historiques et précautions

La configuration Meshtastic annoncée lors de la première phase publique — notamment le preset `LongFast` et la fréquence alors indiquée — appartient à l’historique du projet. Ne la recopiez pas automatiquement dans MeshCore ni dans une configuration actuelle de répéteur. Pour le contexte, consultez [l’historique du projet](05-historique-du-projet.html).

MeshCore et Meshtastic utilisent tous deux LoRa, mais leurs réseaux ne sont pas directement interopérables. Les canaux, profils, rôles, chemins et procédures doivent donc rester documentés séparément. Les consignes de protection des données et de conformité radio sont regroupées dans [Sécurité, vie privée et bonnes pratiques](securite-et-bonnes-pratiques.html).

Les décisions locales concernant les canaux, les profils, les scopes et les répéteurs doivent être confirmées par l’équipe du projet. En cas de doute, demandez conseil sur le [Discord officiel](https://discord.gg/HnAfYUSU82) avant de modifier un nœud déjà en service.
