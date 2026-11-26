import express from "express";

const app = express();

app.use(express.json());
app.use(express.static("public"));

app.set("view engine", "ejs");
app.set("views", "./src/views");

app.get('/', (req, res) => {
    try {
        res.render('layout', {
            title: 'Accueil',
            description: "Découvrez les animés et les actualités de la culture japonaise.",
            page: 'pages/accueil',
            error: null
        });
    } catch (err) {
        res.render('layout', {
            title: 'Accueil',
            description: "Découvrez les animés et les actualités de la culture japonaise.",
            page: 'pages/accueil',
            error: err.message || "Erreur serveur.'"
        });
    };
});

app.listen(process.env.PORT || 8080, () => {
  console.log(`Le serveur à démarré sur le port ${process.env.PORT || 8080} à l'adresse suivante : http://localhost:${process.env.PORT || 8080}/`);
});