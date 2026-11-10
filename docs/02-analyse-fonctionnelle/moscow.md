# Priorisation MoSCoW — Kizora

## Objectif

Pour organiser le développement de Kizora, j'ai choisi d'utiliser la méthode MoSCoW. Elle me permet de classer les fonctionnalités selon leur importance et de définir celles à développer en priorité.

Les fonctionnalités sont réparties en quatre catégories :

- **Must Have :** fonctionnalités indispensables au fonctionnement de la version concernée.
- **Should Have :** fonctionnalités importantes, mais qui peuvent être reportées si nécessaire.
- **Could Have :** fonctionnalités supplémentaires qui seront développées si le temps le permet.
- **Won't Have :** fonctionnalités non retenues dans le périmètre de la version concernée.

Cette priorisation repose sur les User Stories et les cas d'utilisation définis précédemment.

J'ai également ajouté une colonne **Statut** pour suivre l'avancement de chaque fonctionnalité pendant le développement.

## Priorisation des fonctionnalités — V1

| Fonctionnalité | Priorité | Justification | Statut |
|---|---|---|---|
| Page d'accueil | Must Have | La page d'accueil permet de présenter Kizora et de donner accès aux principales rubriques du site, avec ou sans connexion. | Non commencé |
| Authentification (inscription, connexion, déconnexion) | Must Have | Elle permet aux visiteurs de créer un compte et aux utilisateurs d'accéder de manière sécurisée aux fonctionnalités réservées aux membres. | Non commencé |
| Catalogue et fiches d'animés | Must Have | Ce sont les fonctionnalités principales de Kizora. Sans elles, le site perd son intérêt puisque son objectif est de regrouper les informations sur les animés. | Non commencé |
| Consultation des actualités | Must Have | Les actualités occupent une place importante dans Kizora. Elles permettent aux visiteurs de suivre les dernières informations concernant les animés. | Non commencé |
| Gestion des utilisateurs | Must Have | Elle permet aux administrateurs de gérer les comptes et les différents rôles afin de conserver le contrôle sur les accès au site. | Non commencé |
| Gestion des actualités | Must Have | Les rédacteurs doivent pouvoir ajouter, modifier et supprimer des actualités pour maintenir le contenu du site à jour. | Non commencé |
| Recherche et filtres des animés | Should Have | La recherche et les filtres permettent de retrouver plus rapidement un animé et améliorent le confort de navigation. | Non commencé |
| Planning hebdomadaire et saisonnier | Should Have | Le planning permet aux visiteurs de connaître les prochaines diffusions et de suivre les sorties d'animés selon les jours ou les saisons. | Non commencé |
| Gestion du profil utilisateur | Should Have | Elle permet aux utilisateurs de consulter et de modifier leurs informations personnelles pour garder leur compte à jour. | Non commencé |
| Gestion des animés et des genres | Should Have | Elle permet aux administrateurs de corriger, compléter ou organiser les informations du catalogue, notamment celles récupérées depuis l'API. | Non commencé |
| Page de contact | Should Have | Elle permet aux visiteurs et aux utilisateurs de contacter les responsables du site pour poser une question, faire une demande ou signaler un problème. | Non commencé |
| Favoris | Could Have | Les favoris permettent aux utilisateurs de retrouver facilement les animés qui les intéressent. C'est une fonctionnalité pratique, mais qui n'est pas indispensable au fonctionnement principal du site. | Non commencé |
| Commentaires, profils publics, signalements et consultation des logs | Won't Have | Ces fonctionnalités sont reportées à une éventuelle V2 afin de se concentrer sur les fonctionnalités prioritaires de la première version. | Reporté en V2 |
| Application mobile native | Won't Have | Kizora est avant tout conçu comme un site web responsive, accessible depuis un navigateur sur ordinateur, tablette et mobile. | Non prévu |
| Fil d'actualité algorithmique | Won't Have | Un affichage classique des actualités est suffisant pour le projet. Un système de recommandation algorithmique ajouterait une complexité qui n'est pas nécessaire. | Non prévu |
| Modération automatisée | Won't Have | Une modération automatisée demanderait des traitements supplémentaires qui ne sont pas prioritaires pour le projet actuel. | Non prévu |

## Priorisation des fonctionnalités — V2 (évolutions envisagées)

La V2 correspond aux fonctionnalités que j'aimerais ajouter à Kizora après la première version. Cette priorisation est prévisionnelle et pourra évoluer selon les besoins et le temps disponible.

| Fonctionnalité | Priorité | Justification | Statut |
|---|---|---|---|
| Ajouter des commentaires | Must Have | Permettre aux utilisateurs de donner leur avis et d'échanger autour des animés et des actualités. | Non commencé |
| Consulter les commentaires | Must Have | Permettre aux visiteurs et aux utilisateurs de lire les avis et les échanges publiés sur le site. | Non commencé |
| Gérer les commentaires | Must Have | Permettre aux rédacteurs de modérer les commentaires afin de limiter les contenus inappropriés. | Non commencé |
| Consulter le profil d'un autre utilisateur | Should Have | Permettre aux membres de découvrir les profils des autres utilisateurs et de renforcer l'aspect communautaire du site. | Non commencé |
| Consulter les logs | Could Have | Permettre aux administrateurs de consulter certaines actions ou erreurs enregistrées pour faciliter le suivi du site et la recherche de problèmes. | Non commencé |
| Signaler le mauvais comportement d'un utilisateur | Could Have | Permettre aux membres de signaler un comportement inapproprié pour aider les responsables du site à intervenir. | Non commencé |

## Conclusion

Cette priorisation me permet de garder une ligne directrice pendant le développement de Kizora.

Je vais commencer par les fonctionnalités indispensables, puis avancer progressivement vers celles qui améliorent l'expérience utilisateur.

Les fonctionnalités moins prioritaires pourront être reportées si nécessaire, sans remettre en cause les objectifs principaux du projet.

Le tableau sera mis à jour au fur et à mesure du développement afin de comparer les fonctionnalités prévues avec celles réellement réalisées.