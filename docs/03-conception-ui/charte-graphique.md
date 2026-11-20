# Charte graphique — Kizora

## Objectif

Cette charte graphique définit les grandes lignes de l'identité visuelle de Kizora. Elle servira de référence pour garder une interface cohérente entre les pages publiques, les fiches d'animés et les espaces d'administration.

## Identité visuelle

Kizora est un site consacré aux animés japonais et à leurs actualités. Je souhaite donc créer une ambiance qui rappelle cet univers, tout en gardant une interface moderne, claire et facile à utiliser.

Le logo est le point de départ de l'identité visuelle : son rouge vif apporte de l'énergie, tandis que ses nuances chaudes se marient bien avec des fonds beiges et blancs cassés.

Je préfère réserver les éléments les plus marqués au logo et à quelques détails graphiques, pour ne pas surcharger les pages.

## Palette de couleurs

| Utilisation | Couleur | Code HEX |
|---|---|---|
| Fond général des pages | Blanc cassé chaud | ![#FFF9F2](https://via.placeholder.com/15/FFF9F2/000000?text=+) `#FFF9F2` | 
| Cartes et blocs de contenu | Blanc | ![#FFFFFF](https://via.placeholder.com/15/FFFFFF/000000?text=+) `#FFFFFF` | 
| Header et footer | Beige clair | ![#FFEFD6](https://via.placeholder.com/15/FFEFD6/000000?text=+) `#FFEFD6` | 
| Couleur principale du logo et accents décoratifs | Rouge vif | ![#F40002](https://via.placeholder.com/15/F40002/000000?text=+) `#F40002` | 
| Boutons principaux et liens au survol | Rouge foncé | ![#B91C1C](https://via.placeholder.com/15/B91C1C/000000?text=+) `#B91C1C` | 
| Texte principal et liens classiques | Noir doux | ![#26211E](https://via.placeholder.com/15/26211E/000000?text=+) `#26211E` | 
| Texte secondaire | Gris brun | ![#6B625B](https://via.placeholder.com/15/6B625B/000000?text=+) `#6B625B` | 
| Bordures discrètes et séparateurs | Beige grisé | ![#E8DCCE](https://via.placeholder.com/15/E8DCCE/000000?text=+) `#E8DCCE` | 

Le rouge vif du logo sera utilisé par petites touches : éléments décoratifs, séparateurs, détails de navigation et certaines bordures.

Pour les textes rouges et les boutons, je privilégie un rouge un peu plus foncé afin de conserver une meilleure lisibilité.

## Typographies

J'ai choisi de limiter Kizora à **deux familles de polices** pour garder une identité simple et cohérente.

- **Inter** : pour les paragraphes, menus, boutons, formulaires, cartes et la plupart des titres. C'est une police moderne et facile à lire.
- **Zen Old Mincho** : pour quelques grands titres ou éléments de présentation. Son style plus traditionnel apporte une touche japonaise sans gêner la lecture du contenu.

La deuxième typographie restera ponctuelle : elle ne sera pas utilisée dans les tableaux du dashboard ni dans les longs paragraphes.

## Composants UI

- **Bouton principal** : fond rouge foncé `#B91C1C`, texte blanc et coins légèrement arrondis. Il servira pour les actions importantes comme « Se connecter », « S'inscrire » ou « Enregistrer ».
- **Bouton secondaire** : fond beige `#FFEFD6`, texte foncé et éventuellement une bordure rouge. Il servira pour les actions moins prioritaires.
- **Liens de navigation** : texte foncé, avec un changement de couleur et/ou un soulignement rouge au survol et au focus clavier.
- **Cartes d'animés et d'actualités** : fond blanc, image mise en avant, informations lisibles, bordure discrète et espaces réguliers.
- **Badges de genres et de public cible** : fond beige clair, texte foncé et contours discrets pour rester lisibles.
- **Formulaires** : champs clairement identifiés, labels visibles, bordures sobres et messages d'erreur compréhensibles.

Les composants garderont les mêmes formes et comportements d'une page à l'autre.

## Mise en page

Pour les pages publiques, je conserve une **navigation horizontale classique**. Les rédacteurs et les administrateurs utiliseront un **tableau de bord avec une sidebar**, plus adaptée aux opérations de gestion.

Le contenu principal sera centré, avec une largeur maximale indicative d'environ **1 200 px** sur desktop.

Je partirai sur des espacements réguliers, principalement par multiples de 8 px, et des coins arrondis modérés (environ 8 à 12 px).

Les pages devront donner de la place aux images d'animés et aux actualités, sans multiplier inutilement les couleurs et les éléments décoratifs.

## Responsive et accessibilité

Kizora devra être utilisable sur ordinateur, tablette et mobile. Les grilles de cartes s'adapteront à la largeur de l'écran, les formulaires resteront lisibles et la navigation horizontale pourra devenir un menu mobile.

Je souhaite également prendre en compte l'accessibilité dès la conception :

- Conserver une taille de texte confortable et des contrastes suffisants.
- Viser au moins **4,5:1** de contraste pour les textes courants.
- Prévoir des labels de formulaires et des messages d'erreur explicites.
- Rendre les menus, liens et boutons utilisables au clavier, avec un focus visible.
- Ne pas transmettre une information uniquement par la couleur.
- Prévoir des textes alternatifs pertinents pour les images informatives.

## Évolutions

Cette charte constitue une première base. Certains détails (dimensions, choix de composants ou nuances) pourront évoluer lors des maquettes Figma et du développement, tant que l'identité de Kizora reste cohérente.
