# Portfolio de Nour Chafai

Portfolio bilingue français / anglais en HTML, CSS et JavaScript. Le site présente les projets, les compétences, le parcours et les coordonnées de Nour Chafai. Il comprend le portrait et un CV d'une page dans son style original.

Aucune installation de dépendances, aucune compilation et aucune base de données ne sont nécessaires pour publier ce site.

## Publication sur GitHub Pages

Adresse prévue après publication : **https://nourchafai.github.io/**.
Cette archive prépare le site ; elle ne crée pas le dépôt et n'active pas l'hébergement.

1. Extraire l'archive ZIP sur l'ordinateur.
2. Se connecter au compte GitHub **NourChafai** et ouvrir [New repository](https://github.com/new).
3. Choisir `NourChafai` comme propriétaire et donner au dépôt le nom exact **`nourchafai.github.io`**, en minuscules.
4. Choisir **Public**, activer **Add README**, puis cliquer sur **Create repository**. Si ce dépôt existe déjà, l'ouvrir et vérifier son contenu avant d'y ajouter ces fichiers.
5. Dans le dépôt, cliquer sur **Add file > Upload files**. Ouvrir le dossier extrait `portfolio-nour-chafai` et sélectionner ses fichiers, notamment `index.html`, `styles.css`, `compact.css`, `app.js`, `nour-chafai.jpg`, `cv-nour-chafai.pdf` et `.nojekyll`. Le README fourni peut remplacer celui créé à l'étape précédente.
6. Importer les fichiers directement à la racine du dépôt : `index.html` doit apparaître immédiatement dans la liste, pas dans un sous-dossier. Ne pas importer le ZIP lui-même.
7. Enregistrer avec **Commit changes**, sur la branche **main**. Si GitHub propose une nouvelle branche, choisir l'enregistrement direct sur `main` pour ce dépôt personnel nouvellement créé.
8. Ouvrir **Settings > Pages**. Sous **Build and deployment**, sélectionner **Deploy from a branch**, puis la branche **main** et le dossier **/(root)**. Cliquer sur **Save**.
9. Attendre la fin de la publication, qui peut prendre jusqu'à dix minutes. Revenir à **Settings > Pages** et cliquer sur **Visit site**.
10. Vérifier les boutons FR / EN, l'ouverture des fiches projets et le téléchargement du CV. Le lien à partager sera **https://nourchafai.github.io/**.

Le CV inclus utilise déjà cette future adresse. Attendre que le site soit publié avant de diffuser ce CV dans les candidatures.

## Fichiers et fonctionnement

| Fichier | Rôle |
| --- | --- |
| `index.html` | Contenu français, sections, coordonnées, boutons, liens et structure de la page. |
| `styles.css` | Styles généraux : couleurs, typographie et mise en page. |
| `compact.css` | Présentation compacte, cartes des projets et adaptation aux mobiles. Ce fichier est chargé après `styles.css`. |
| `app.js` | Descriptions des projets, traductions anglaises et interactions. |
| `nour-chafai.jpg` | Portrait affiché dans le portfolio. |
| `cv-nour-chafai.pdf` | CV d'une page, avec le lien GitHub Pages prévu. |
| `.nojekyll` | Fichier vide qui indique à GitHub Pages de publier directement les fichiers statiques. |

Les chemins des fichiers sont relatifs : conserver ces fichiers ensemble.

## Comprendre le JavaScript

- `projects` rassemble le nom, les technologies, les descriptions FR / EN et l'adresse du dépôt de chaque projet.
- `openProject(key, trigger)` choisit le projet, remplit sa fiche et ouvre la fenêtre de détails.
- `renderProject()` affiche la description dans la langue active. Quand un projet est marqué `private: true`, son lien GitHub est masqué et une mention de code privé est affichée.
- `setLanguage(language, updateUrl)` traduit les textes, les métadonnées et les libellés d'accessibilité. Il conserve aussi la langue choisie dans l'adresse avec `?lang=en`.
- Les événements de clic relient ces fonctions aux boutons. La fenêtre de détails se ferme avec sa croix, la touche Échap ou un clic à l'extérieur ; le focus revient au bouton du projet.

## Mettre le portfolio à jour

Modifier les fichiers concernés, puis importer leurs nouvelles versions dans le même dépôt et enregistrer sur `main`. GitHub Pages republie ensuite le site automatiquement.

- Texte français : modifier `index.html`.
- Traductions anglaises : modifier l'objet `english` dans `app.js`.
- Descriptions et liens des projets : modifier l'objet `projects` dans `app.js`.
- Photo : remplacer `nour-chafai.jpg` en gardant ce nom.
- CV : remplacer `cv-nour-chafai.pdf` en gardant ce nom.

## Activer le lien du projet BVMT plus tard

La fiche **Reporting BVMT** est déjà présente. Le code du projet reste privé.

Après nettoyage et publication du dépôt BVMT, ouvrir `app.js`, trouver l'objet `bvmt`, mettre son champ `url` à jour si nécessaire et remplacer **`private: true` par `private: false`**. Le bouton vers GitHub apparaîtra automatiquement dans la fiche. Importer ensuite le nouveau `app.js` sur GitHub.

Le dépôt du portfolio est distinct du dépôt du projet BVMT : il contient sa présentation, pas son code ni ses données.

## En cas de difficulté

- Page introuvable : vérifier le nom du dépôt, la branche `main`, le dossier `/(root)` et la présence de `index.html` à la racine. Consulter aussi l'onglet **Actions** pour voir l'état de la publication.
- Page sans mise en forme : vérifier que les deux fichiers CSS et `app.js` ont bien été importés à côté d'`index.html`.
- CV ou photo introuvables : vérifier les noms des fichiers et leur présence à la racine.
- Ancienne version affichée : attendre la fin de la publication puis actualiser avec **Ctrl + F5**.

## Documentation officielle

- [Créer un site GitHub Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site)
- [Configurer la publication depuis une branche](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)
- [Importer des fichiers dans un dépôt](https://docs.github.com/en/repositories/working-with-files/managing-files/adding-a-file-to-a-repository)
