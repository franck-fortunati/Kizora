# Diagramme de cas d'utilisation — Kizora

## Objectif

Ce diagramme présente les principales fonctionnalités de Kizora et les personnes qui peuvent y accéder. Il permet de définir les droits de chaque acteur et de distinguer les fonctionnalités prévues pour la première version (V1) de celles envisagées plus tard (V2).

## Les acteurs

Pour Kizora, j'ai défini quatre profils qui regroupe les fonctionnalités accessibles à tous :

| Acteur | Description |
|---|---|
| **Visiteur** | Personne non connectée. Elle peut créer un compte ou se connecter. Il accède aux fonctionnalités publiques. |
| **Utilisateur** | Personne connectée qui peut gérer son profil, ajouter des animés à ses favoris et se déconnecter. |
| **Rédacteur** | Utilisateur disposant de droits supplémentaires pour ajouter et gérer les actualités. |
| **Administrateur** | Possède les droits nécessaires pour gérer les utilisateurs, les animés et leurs genres. Il dispose également des droits d'un rédacteur. |

**Gestion des droits :** les acteurs suivent une hiérarchie de permissions. L'Utilisateur hérite des fonctionnalités du Visiteur, à l'exception de la création de compte et de la connexion, puisqu'il possède déjà un compte et qu'il est connecté.

Le Rédacteur dispose des droits de l'Utilisateur, avec la possibilité supplémentaire de gérer les actualités. Enfin, l'Administrateur possède l'ensemble des droits, notamment la gestion des utilisateurs, des animés et de leurs genres.

## Diagramme de cas d'utilisation

![Diagramme de cas d'utilisation de Kizora (V1 et V2)](./use-cases-kizora.png)

### Légende

- **Zone Kizora :** fonctionnalités du site.
- **Zone Kizora V2 :** fonctionnalités envisagées pour une future version.
- **Trait continu :** association avec une fonctionnalité prévue en V1.
- **Trait pointillé :** association avec une fonctionnalité envisagée en V2. Il s'agit d'un choix visuel personnel, et non d'une notation UML officielle.
- **Flèche à triangle blanc :** héritage des possibilités de l'acteur vers lequel pointe la flèche.

## Fonctionnalités prévues en V1

| Acteur | Cas d'utilisation |
|---|---|
| **Visiteur** | Créer un compte, se connecter, consulter la liste des animés, consulter une fiche d'animé, rechercher et filtrer les animés, consulter les actualités, consulter le planning et contacter le site. |
| **Utilisateur** | Consulter et gérer son profil, ajouter un animé aux favoris et se déconnecter. |
| **Rédacteur** | Ajouter et gérer les actualités. |
| **Administrateur** | Gérer les utilisateurs, les animés et leurs genres. |

Les fonctionnalités publiques du Visiteur restent accessibles à tous les autres rôles. Chaque acteur dispose également de fonctionnalités supplémentaires selon ses permissions.

Certaines actions, comme la création de compte et la connexion, sont réservées aux personnes non connectées.

## Fonctionnalités envisagées en V2

| Acteur | Cas d'utilisation |
|---|---|
| **Visiteur** | Voir les commentaires. |
| **Utilisateur** | Ajouter des commentaires, consulter le profil d'un autre utilisateur et signaler le mauvais comportement d'un autre utilisateur. |
| **Rédacteur** | Gérer les commentaires. |
| **Administrateur** | Consulter les logs. |

Ces fonctionnalités sont des pistes d'évolution pour Kizora et ne font pas partie du périmètre prévu pour la première version.

## Suite de l'analyse fonctionnelle

Les cas d'utilisation serviront de base à la rédaction des **User Stories**, qui permettront de préciser les besoins des utilisateurs.

Les fonctionnalités seront ensuite priorisées avec la méthode **MoSCoW**.