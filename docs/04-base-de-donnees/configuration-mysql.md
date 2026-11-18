# Configuration MySQL — Kizora

## Objectif

Préparer l'environnement MySQL local du projet Kizora avant la conception et la création des tables.

## Configuration actuelle

| Élément | Valeur |
|---|---|
| SGBD | MySQL 8 |
| Outil d'administration | MySQL Workbench |
| Serveur | `localhost:3306` |
| Base de données | `kizora` |
| Compte applicatif | `kizora_dev`@`localhost` |
| Compte d'administration | `root` |

## Réalisations

1. Création du compte MySQL `kizora_dev`, dédié à l'application.
2. Vérification de sa connexion depuis MySQL Workbench.
3. Création de la base de données `kizora` avec le compte administrateur `root`.
4. Attribution au compte `kizora_dev` des privilèges **SELECT**, **INSERT**, **UPDATE** et **DELETE** sur `kizora.*`.
5. Vérification des droits attribués avec `SHOW GRANTS`.

## Sécurité

- L'application utilisera le compte `kizora_dev`, **pas** `root`.
- Les droits de `kizora_dev` sont limités à la manipulation des données de la base `kizora` ; il ne dispose pas de droits d'administration ou de modification de la structure.
- Les identifiants de connexion seront stockés dans un fichier `.env`, exclu du suivi Git.
- Aucun mot de passe n'est conservé dans cette documentation.

## Prochaines étapes

- Concevoir les tables à partir du **MCD**, puis du **MLD** et du **MPD**.
- Développer le module `db.js` pour connecter Node.js à MySQL.
- Tester l'accès à la base depuis l'application avec `kizora_dev`.

> **État actuel :** base créée, utilisateur configuré et privilèges vérifiés. Aucune table métier n'a encore été créée. 