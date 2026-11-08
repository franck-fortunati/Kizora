# User Stories — Kizora

## Objectif

Ce document regroupe les User Stories prévues pour la première version (V1) de Kizora. Elles permettent de présenter les besoins des différents profils du site, en précisant ce que chacun souhaite faire et dans quel but.

Chaque User Story possède un identifiant et des critères d'acceptation. Ces critères serviront à vérifier, pendant le développement et les tests, que la fonctionnalité répond bien au besoin exprimé.

## User Stories — V1

| ID | En tant que | Je souhaite | Afin de |
|---|---|---|---|
| **US-01** | **Visiteur** | Accéder à la page d'accueil | Découvrir Kizora et accéder facilement aux principales rubriques du site. |
| **US-02** | **Visiteur** | Créer un compte | Disposer de mon propre compte sur Kizora. |
| **US-03** | **Visiteur** | Me connecter à mon compte | Accéder à mon espace personnel. |
| **US-04** | **Visiteur** | Consulter le catalogue des animés | Découvrir les animés disponibles sur Kizora. |
| **US-05** | **Visiteur** | Consulter la fiche d'un animé | Retrouver son synopsis et ses principales informations. |
| **US-06** | **Visiteur** | Rechercher et filtrer les animés | Trouver plus rapidement un animé qui m'intéresse. |
| **US-07** | **Visiteur** | Consulter les actualités | Suivre les dernières nouvelles liées aux animés. |
| **US-08** | **Visiteur** | Consulter le planning hebdomadaire et saisonnier | Connaître les prochaines diffusions et sorties. |
| **US-09** | **Visiteur** | Accéder à la page de contact | Pouvoir contacter l'équipe du site. |
| **US-10** | **Utilisateur** | Consulter et modifier mon profil | Personnaliser et mettre à jour mes informations. |
| **US-11** | **Utilisateur** | Ajouter des animés à mes favoris | Les retrouver facilement depuis mon compte. |
| **US-12** | **Utilisateur** | Me déconnecter de mon compte | Terminer ma session en toute sécurité. |
| **US-13** | **Rédacteur** | Accéder à un espace de gestion des actualités | Publier, modifier et supprimer des actualités pour maintenir le site à jour. |
| **US-14** | **Administrateur** | Accéder à un espace de gestion des utilisateurs | Administrer les comptes inscrits sur Kizora. |
| **US-15** | **Administrateur** | Accéder à un espace de gestion des animés et de leurs genres | Mettre à jour les informations du catalogue. |

## Critères d'acceptation

Ces critères décrivent les résultats attendus du point de vue de l'utilisateur. Ils pourront être ajustés si certaines fonctionnalités évoluent pendant la conception ou le développement.

### Visiteur

#### US-01 — Accéder à la page d'accueil
- La page d'accueil est accessible sans connexion.
- Elle présente Kizora et donne accès aux principales rubriques du site.
- Les liens vers ces rubriques fonctionnent.

#### US-02 — Créer un compte
- Un visiteur peut accéder au formulaire d'inscription.
- Les champs obligatoires sont contrôlés et les erreurs sont signalées.
- Un compte est créé lorsque les informations fournies sont valides.
- Une adresse e-mail déjà utilisée ne permet pas de créer un second compte avec cette même adresse.

#### US-03 — Se connecter à son compte
- Le visiteur peut saisir ses identifiants depuis la page de connexion.
- Des identifiants valides permettent d'ouvrir une session.
- Un message d'erreur apparaît si les identifiants sont incorrects.

#### US-04 — Consulter le catalogue des animés
- La liste des animés est accessible sans connexion.
- Les animés affichés permettent d'accéder à leur fiche respective.
- Un message adapté est affiché si aucun animé n'est disponible.

#### US-05 — Consulter la fiche d'un animé
- Une fiche est accessible depuis le catalogue.
- Elle affiche les informations disponibles de l'animé (titre, synopsis, couverture, genres, année et statut de diffusion).
- Les personnages et les génériques sont affichés lorsque ces données sont disponibles.
- Une fiche inexistante ne provoque pas d'erreur non gérée.

#### US-06 — Rechercher et filtrer les animés
- Le visiteur peut rechercher un animé par son nom.
- Il peut affiner les résultats à l'aide des filtres prévus sur le site.
- Les résultats correspondent à la recherche et aux filtres appliqués.
- Un message est affiché lorsqu'aucun résultat n'est trouvé.

#### US-07 — Consulter les actualités
- Les actualités publiées sont accessibles sans connexion.
- Le visiteur peut consulter le contenu d'une actualité.
- Chaque actualité consultable possède un titre et un contenu.

#### US-08 — Consulter le planning hebdomadaire et saisonnier
- Le planning est accessible sans connexion.
- Le visiteur peut consulter une vue hebdomadaire et une vue saisonnière.
- Les animés et les informations de diffusion disponibles apparaissent dans le planning.

#### US-09 — Accéder à la page de contact
- Une page de contact est accessible depuis le site.
- Elle présente un moyen clair de contacter l'équipe de Kizora.
- Le moyen de contact proposé est utilisable.

### Utilisateur

#### US-10 — Consulter et modifier son profil
- Un utilisateur connecté peut accéder à son propre profil.
- Il peut modifier les informations de profil prévues par le site.
- Les modifications valides sont enregistrées et restent visibles après actualisation.
- Un utilisateur ne peut pas modifier le profil d'un autre sans autorisation.

#### US-11 — Ajouter des animés à ses favoris
- Un utilisateur connecté peut ajouter un animé à ses favoris.
- Il peut retrouver la liste de ses favoris depuis son compte.
- Il peut retirer un animé de ses favoris.
- Un même animé n'apparaît pas plusieurs fois dans sa liste de favoris.

#### US-12 — Se déconnecter de son compte
- Un utilisateur connecté dispose d'une action de déconnexion.
- La déconnexion met fin à sa session.
- Les pages réservées aux utilisateurs connectés ne sont plus accessibles sans nouvelle connexion.

### Rédacteur

#### US-13 — Gérer les actualités
- L'espace de gestion des actualités est accessible aux rédacteurs autorisés.
- Le rédacteur peut créer une actualité.
- Il peut modifier ou supprimer une actualité existante.
- Les modifications enregistrées sont prises en compte sur le site.

### Administrateur

#### US-14 — Gérer les utilisateurs
- L'espace de gestion des utilisateurs est réservé aux administrateurs.
- L'administrateur peut consulter la liste des comptes inscrits.
- Il peut effectuer les actions de gestion des comptes prévues par le site, notamment modifier leurs informations ou leurs rôles.

#### US-15 — Gérer les animés et leurs genres
- L'espace de gestion du catalogue est réservé aux administrateurs.
- L'administrateur peut ajouter, modifier ou supprimer les informations d'un animé.
- Il peut gérer les genres associés aux animés.
- Les modifications enregistrées sont visibles dans le catalogue.

## Suite de l'analyse fonctionnelle

Ces User Stories serviront de base à la méthode **MoSCoW**, afin de distinguer les fonctionnalités indispensables de celles qui pourront être réalisées si le temps le permet.

Les fonctionnalités envisagées pour une V2 restent documentées dans les cas d'utilisation, mais ne sont pas détaillées ici.