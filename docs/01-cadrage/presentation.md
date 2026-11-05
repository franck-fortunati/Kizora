# Présentation du projet Kizora

## Qu'est-ce que Kizora ?

**Kizora** est un projet de site web consacré aux animés japonais. L'idée est de regrouper au même endroit les principales informations sur les animés, pour que les visiteurs puissent les retrouver facilement.

Chaque fiche d'animé pourra notamment présenter :

- ``Le synopsis`` ;
- ``L'année de diffusion`` ;
- ``Le statut de diffusion`` (à venir, en cours ou terminé) ;
- ``Une image de couverture`` ;
- ``Les genres`` ;
- ``Une note sur 5 étoiles`` ;
- ``Les personnages`` ;
- ``Les génériques d'ouverture et de fin`` (*openings* et *endings*).

Le site proposera également des actualités autour des animés.

## Pourquoi ce projet ?

L'idée de Kizora vient d'un constat personnel : certains sites francophones consacrés aux animés sont très complets, mais leur navigation me paraît parfois compliquée. Entre les nombreux menus, sous-menus et rubriques, il n'est pas toujours facile de trouver rapidement l'information recherchée.

Avec Kizora, je souhaite proposer un site plus simple à parcourir, avec une interface moderne et des informations faciles d'accès.

## Les besoins du projet

**Pour les visiteurs**, le besoin principal est de pouvoir consulter les informations d'un animé sans avoir à chercher dans de nombreuses rubriques. Le site permettra aussi de retrouver des actualités liées aux animés.

**Pour le fonctionnement du site**, plusieurs éléments devront être mis en place :

- Utiliser une **API** et créer un ou plusieurs scripts pour récupérer les informations des animés et les enregistrer dans une **base de données SQL** ;
- Développer la gestion des utilisateurs avec les opérations **CRUD** (création, lecture, modification et suppression) ;
- Mettre en place différents rôles : **utilisateur**, **rédacteur** et **administrateur** ;
- Développer les opérations CRUD nécessaires à la gestion des actualités.

Un système de notation sur 5 étoiles pourra également être envisagé. Selon le temps disponible et les données fournies par l'API, les notes pourront être gérées directement sur Kizora ou provenir de la source externe.

## Les objectifs et le public cible

Kizora s'adresse principalement aux personnes qui s'intéressent aux animés japonais, qu'elles souhaitent découvrir une série, retrouver des informations sur un animé ou consulter des actualités.

Mon objectif est de créer un site **agréable à utiliser, moderne et surtout intuitif**. L'interface devra rester simple, avec une charte graphique cohérente reposant sur **trois couleurs principales au maximum**.

Je souhaite également prendre en compte l'**accessibilité**, en m'appuyant sur les recommandations **WCAG** et le référentiel français **RGAA**, ainsi que la **protection des données personnelles** dans le cadre du **RGPD**.

Par exemple, si des commentaires restent visibles après la suppression d'un compte, ils devront être anonymisés afin de ne plus permettre d'identifier leur auteur.