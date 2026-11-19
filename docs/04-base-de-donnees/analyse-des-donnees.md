# Analyse des données — Kizora

## Objectif

Ce document me permet d'identifier les entités, leurs attributs et leurs relations avant de réaliser le **MCD** de Kizora dans JMerise.

Je le considère comme une première version écrite du modèle conceptuel : je définis les informations dont le site a besoin, les liens entre elles et les règles de gestion, **sans encore choisir les types SQL ni placer les clés étrangères**.

L'objectif est de prévoir les fiches détaillées d'animés, y compris leurs épisodes, leurs personnages et leurs seiyuus (comédiens de doublage japonais), tout en gardant un modèle réalisable pour le projet DWWM.

## 1. Entités et attributs envisagés

| Entité | Attributs envisagés | Rôle dans Kizora |
|---|---|---|
| **Utilisateur** | Identifiant, pseudo, adresse e-mail, mot de passe haché, rôle, date d'inscription | Représente les membres, les rédacteurs et les administrateurs du site. |
| **Animé** | Identifiant, identifiant Kitsu, titre, titre japonais, synopsis, date de début de diffusion, date de fin (si connue), saison, année, statut, couverture, nombre total d'épisodes | Regroupe les informations générales des animés présentés dans le catalogue. |
| **Genre** | Identifiant, nom | Sert à classer les animés et à les filtrer. |
| **Épisode** | Identifiant, numéro d'épisode, titre, synopsis individuel, date de diffusion (si connue) | Permet d'afficher les épisodes d'un animé et leurs synopsis dans sa fiche détaillée. |
| **Personnage** | Identifiant, nom, nom japonais (si disponible), description (si disponible), image (si disponible) | Présente les personnages apparaissant dans les animés. |
| **Seiyuu** | Identifiant, nom, nom japonais (si disponible), photo (si disponible), présentation (si disponible) | Présente les comédiens de doublage japonais associés aux personnages. |
| **Actualité** | Identifiant, titre, contenu, date de publication, illustration (facultative) | Conserve les articles publiés sur Kizora. |

### Quelques précisions

- Les **genres** ne sont pas stockés directement sous forme de liste dans *Animé* : ils seront liés à cette entité par une association.
- Le **nom du rédacteur** ne sera pas répété dans *Actualité* : on retrouvera son auteur par l'association avec *Utilisateur*.
- Les **épisodes** sont distincts des animés, car chacun peut posséder son propre numéro, titre, synopsis et sa date de diffusion.
- Les **personnages** et les **seiyuus** sont des entités distinctes : un même personnage peut apparaître dans plusieurs animés et un seiyuu peut interpréter plusieurs personnages.
- L'**identifiant Kitsu** sert à reconnaître un animé lors des importations et à éviter les doublons. Des identifiants de source externe pourront aussi être conservés pour les autres entités si les données le permettent.
- Le **nombre total d'épisodes** indiqué pour un animé peut être conservé même si toutes ses fiches d'épisodes n'ont pas encore été récupérées.
- Le **mot de passe** ne sera jamais conservé en clair : seul son hachage sera enregistré.
- Le **rôle** reste pour l'instant un attribut d'*Utilisateur* (utilisateur, rédacteur, administrateur). Les permissions seront vérifiées côté serveur.

## 2. Associations et règles de gestion

### Animé — Genre : « Appartenir à »

- Un animé peut appartenir à plusieurs genres, ou ne pas encore avoir de genre renseigné.
- Un genre peut concerner plusieurs animés, ou aucun au moment de sa création.

### Animé — Épisode : « Contenir »

- Un animé peut avoir **zéro à plusieurs épisodes enregistrés** dans la base, notamment si l'importation est incomplète.
- Chaque épisode enregistré appartient à **un seul animé**.
- Le numéro d'épisode doit être unique **à l'intérieur d'un même animé**, mais peut être le même pour deux animés différents.
- Un synopsis individuel peut être absent si la source ne le fournit pas.

### Animé — Personnage : « Faire apparaître »

- Un animé peut présenter plusieurs personnages, ou aucun encore renseigné.
- Un personnage peut apparaître dans plusieurs animés (suite, autre saison, film, etc.).
- Le rôle du personnage (*principal* ou *secondaire*, par exemple) pourrait dépendre de l'animé : si je conserve cette information, elle sera liée à leur association.

### Personnage — Seiyuu : « Être interprété par »

- Un personnage peut être interprété par un ou plusieurs seiyuus selon les œuvres ou versions, ou n'avoir encore aucun interprète renseigné.
- Un seiyuu peut interpréter plusieurs personnages, ou aucun encore renseigné dans Kizora.
- **Point à affiner lors du MCD :** si je dois préciser *quel seiyuu interprète quel personnage dans quel animé*, une simple relation Personnage–Seiyuu ne suffira pas. Il faudra rattacher l'interprétation à l'animé concerné, par une association adaptée ou une entité de liaison *Casting*. Pour la première modélisation, je peux commencer par la relation simple, puis l'affiner si mes données le nécessitent.

### Utilisateur — Actualité : « Rédiger »

- Un rédacteur ou un administrateur peut publier plusieurs actualités, ou aucune.
- Chaque actualité est associée à **un seul auteur**.
- La possibilité de publier dépend du rôle de l'utilisateur : cette règle sera vérifiée dans l'application.

### Utilisateur — Animé : « Ajouter aux favoris » (V1, *Could Have*)

- Un utilisateur peut ajouter plusieurs animés à ses favoris, ou aucun.
- Un animé peut apparaître dans les favoris de plusieurs utilisateurs, ou d'aucun.
- Un même utilisateur ne doit pas ajouter deux fois le même animé à ses favoris.
- Je pourrai éventuellement conserver la date d'ajout comme attribut de cette association.

## 3. Cardinalités proposées pour le MCD

| Association | Entité A | Cardinalité A | Entité B | Cardinalité B |
|---|---|---|---|---|
| **Appartenir à** | Animé | **(0,N)** | Genre | **(0,N)** |
| **Contenir** | Animé | **(0,N)** | Épisode | **(1,1)** |
| **Faire apparaître** | Animé | **(0,N)** | Personnage | **(0,N)** |
| **Être interprété par** (version simple) | Personnage | **(0,N)** | Seiyuu | **(0,N)** |
| **Rédiger** | Utilisateur | **(0,N)** | Actualité | **(1,1)** |
| **Ajouter aux favoris** | Utilisateur | **(0,N)** | Animé | **(0,N)** |

**Lecture des cardinalités :**

- **(0,N)** : un élément peut participer à zéro, une ou plusieurs occurrences de l'association.
- **(1,1)** : un élément doit participer à une seule occurrence de l'association.

Ces cardinalités correspondent aux règles envisagées. Je les vérifierai pendant la réalisation du MCD dans JMerise.

## 4. Autres points de conception

### Public cible / Démographie

J'ai prévu deux filtres distincts dans le catalogue : **Genres** et **Public cible / Démographie** (Shōnen, Shōjo, Seinen, Josei, etc.).

Selon les données disponibles, je pourrai ajouter une entité **Public cible** (identifiant, nom), associée aux animés. Les cardinalités seront définies après avoir vérifié si un animé peut appartenir à plusieurs publics cibles.

### Importation des données

Les informations des animés et de leurs genres doivent être récupérées depuis **l'API Kitsu**, puis enregistrées dans MySQL pour alimenter le catalogue.

Je souhaite également conserver les épisodes, leurs synopsis, les personnages et les seiyuus. **Il faudra vérifier quelles informations Kitsu fournit réellement et sous quelle forme**, car la disponibilité et la complétude de ces données ne sont pas garanties. Si certaines données manquent, j'adapterai le script d'importation ou les possibilités d'ajout manuel, sans inventer d'informations.

### Planning

Le planning saisonnier pourra utiliser les saisons et années enregistrées pour les animés. Le planning hebdomadaire pourra nécessiter les dates de diffusion des épisodes : la date de début d'un animé ne permet pas, à elle seule, de reconstituer toutes ses diffusions.

Je ne prévois donc **pas d'entité Planning** distincte pour le moment.

## 5. Périmètre retenu pour le MCD

Les entités principales retenues sont désormais :

**Utilisateur, Animé, Genre, Épisode, Personnage, Seiyuu et Actualité.**

Les **épisodes avec leurs synopsis**, les **personnages** et les **seiyuus** font bien partie des données que je souhaite gérer pour les fiches détaillées de Kizora. Leur présence dans le modèle ne signifie pas que l'importation et l'affichage de toutes ces données sont déjà développés.

L'association **Favoris** sera représentée ou conservée dans les choix de conception, même si la fonctionnalité est moins prioritaire pour le développement. La **démographie** et le détail du **casting par animé** seront affinés selon les données réellement disponibles et le temps restant.

## 6. Prochaines étapes

1. Réaliser le **MCD** dans JMerise à partir des entités et des associations décrites ici.
2. Vérifier les cardinalités et, si nécessaire, préciser le casting par animé.
3. Transformer le MCD en **MLD** avec les identifiants, les clés primaires et les clés étrangères.
4. Préparer le **MPD** pour MySQL en définissant les types de données, les contraintes et les index.
5. Rédiger et tester le script **`schema.sql`** permettant de créer les tables.

> **Note :** ce document décrit le modèle envisagé et les règles de gestion. Il ne constitue pas une preuve que les fonctionnalités sont déjà développées.
