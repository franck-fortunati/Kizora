# Stack technique de Kizora

## Les technologies choisies

Pour développer Kizora, j'ai choisi les technologies suivantes :

- **Node.js** : pour exécuter JavaScript côté serveur.
- **Express.js** : pour gérer les routes et les fonctionnalités du site.
- **EJS** : pour générer les pages HTML côté serveur.
- **Tailwind CSS** : pour réaliser la mise en forme et adapter le site aux différents écrans.
- **MySQL** : pour stocker les informations sur les animés, les actualités et les utilisateurs.
- **express-session et express-mysql-session** : pour gérer les sessions des utilisateurs et les conserver dans MySQL.
- **bcrypt** : pour hacher les mots de passe avant leur enregistrement en base de données.
- **Helmet, limitation des requêtes, validation des données et protection CSRF** : pour renforcer la sécurité du site.
- **dotenv et un fichier `.env`** : pour gérer la configuration et les informations sensibles sans les placer directement dans le code.
- **Git et GitHub** : pour suivre les modifications du projet et organiser le travail avec des branches et des issues.
- **Figma** : pour préparer les wireframes et les maquettes.
- **MCD, MLD et MPD** : pour concevoir la base de données avant de la mettre en place dans MySQL.

Je prévois également d'utiliser **Docker et Docker Compose** pour faciliter la mise en place de l'environnement du projet. Pour un éventuel déploiement, je souhaite étudier l'utilisation de **Nginx avec HTTPS**.

Enfin, **Nodemailer** pourra être ajouté si une fonctionnalité nécessite l'envoi d'emails.

## Pourquoi cette stack technique ?

J'ai choisi **Node.js et Express** parce que je les ai déjà utilisés pendant ma formation et que je souhaite continuer à progresser dessus. Ils me permettent de développer la partie serveur en JavaScript, tout en gardant une organisation que je comprends et que je peux faire évoluer.

Le choix d'**EJS** est surtout lié au fonctionnement de Kizora. Comme le site repose principalement sur des fiches d'animés et des actualités, je veux que ces pages puissent être facilement consultées, y compris depuis les moteurs de recherche. Le **référencement naturel (SEO)** est donc un point important du projet.

Au départ, j'avais envisagé d'utiliser **React**. Cependant, dans une application React classique de type SPA, une partie importante du contenu est générée dans le navigateur avec JavaScript. Les moteurs de recherche peuvent traiter ce type de page, mais cela peut rendre l'exploration et l'indexation plus complexes.

Il existe des solutions comme **Next.js** pour réaliser du rendu côté serveur avec React. Pour Kizora, j'ai préféré partir sur **Express et EJS**, qui me permettent de générer directement les pages HTML sur le serveur, sans ajouter un framework supplémentaire. C'est un choix qui me paraît plus simple à maîtriser pour ce projet. Cela facilite aussi l'accès au contenu des pages, même si le référencement dépend d'autres éléments, comme la structure HTML et la qualité du contenu.

J'ai retenu **MySQL** comme base de données principale, car les informations du site sont liées entre elles : les animés, leurs genres, leurs personnages, les utilisateurs ou encore les actualités. Une base relationnelle me semble adaptée pour organiser ces données et gérer leurs relations.

Pour l'authentification, je compte utiliser des **sessions Express**, stockées dans MySQL, plutôt qu'un système basé sur des tokens JWT. Comme Kizora utilise un rendu côté serveur, cette solution correspond bien au fonctionnement prévu du site. Les mots de passe seront hachés avec **bcrypt** et je mettrai en place différentes protections pour sécuriser les formulaires et les requêtes.

## Et MongoDB ?

J'avais aussi envisagé d'utiliser **MongoDB** pour un besoin précis, mais je n'ai pas encore identifié de fonctionnalité qui le justifie réellement. Je préfère donc me concentrer sur **MySQL** pour le moment, plutôt que d'ajouter une deuxième base de données sans nécessité.

J'ai déjà eu l'occasion de travailler avec MongoDB sur d'autres projets pendant ma formation, que je peux présenter dans mon dossier professionnel. Si un besoin concret apparaît pendant le développement de Kizora, je pourrai toujours revoir ce choix.