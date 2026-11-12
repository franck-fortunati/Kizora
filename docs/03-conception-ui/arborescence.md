# Arborescence et navigation — Kizora

## Présentation

Pour Kizora, j'ai choisi une navigation horizontale classique afin de proposer une interface simple et intuitive, sans trop changer les habitudes des utilisateurs.

L'objectif est de permettre aux visiteurs d'accéder facilement aux principales rubriques du site, comme les animés, les actualités ou encore le planning des diffusions.

J'ai également prévu un tableau de bord sécurisé, avec une navigation latérale (sidebar), pour les rédacteurs et les administrateurs. Les fonctionnalités accessibles dans cet espace dépendront du rôle de l'utilisateur connecté.

## Arborescence du site

```text
KIZORA
│
├── Accueil
│   ├── Présentation de Kizora (Public)
│   └── 3 dernières actualités (Public)
│
├── Animés
│   ├── Recherche et filtres (Public)
│   ├── Catalogue des animés (Public)
│   └── Fiche d'un animé (Public)
│
├── Actualités
│   ├── Liste des actualités (Public)
│   └── Article détaillé (Public)
│
├── Planning
│   ├── Hebdomadaire (Public)
│   └── Saisonnier (Public)
│
├── Contact
│   └── Formulaire de contact (Public)
│
├── Compte
│   ├── Inscription (Visiteur non connecté)
│   ├── Connexion (Visiteur non connecté)
│   ├── Mon profil (Utilisateur authentifié)
│   └── Mes favoris (Utilisateur authentifié)
│
└── Tableau de bord sécurisé
    │
    ├── Espace administrateur (Administrateur)
    │   ├── Gestion des utilisateurs
    │   ├── Gestion des animés
    │   └── Gestion des genres
    │
    └── Espace rédacteur (Rédacteur et Administrateur)
        └── Gestion des actualités
```

## Navigation et gestion des accès

### Navigation publique

La navigation principale sera accessible à tous les visiteurs, qu'ils soient connectés ou non.

Elle comprendra les rubriques suivantes :

- Accueil
- Animés
- Actualités
- Planning
- Contact

Les boutons **Connexion** et **Inscription** seront également visibles pour les visiteurs non connectés.

### Navigation des utilisateurs authentifiés

Une fois connecté, l'utilisateur verra son nom d'utilisateur à la place des boutons Connexion et Inscription.

Un menu déroulant lui permettra d'accéder aux fonctionnalités suivantes :

- Mon profil
- Mes favoris
- Administration (uniquement pour les administrateurs)
- Gestion des actualités (pour les rédacteurs et administrateurs)
- Déconnexion

### Tableau de bord sécurisé

Le tableau de bord disposera d'une navigation latérale (sidebar), différente de la navigation publique.

Les administrateurs auront accès à l'ensemble des fonctionnalités de gestion du site, tandis que les rédacteurs auront uniquement accès à la gestion des actualités.

L'accès à ces fonctionnalités devra être vérifié côté serveur afin d'empêcher un utilisateur non autorisé d'accéder directement aux pages protégées.

## Adaptation responsive

La navigation devra s'adapter aux différentes tailles d'écran : ordinateur, tablette et mobile.

Sur les écrans plus petits, le menu horizontal pourra être remplacé par un menu déroulant de type hamburger.

La sidebar du tableau de bord devra également être adaptée afin de conserver une navigation simple et accessible sur mobile.
