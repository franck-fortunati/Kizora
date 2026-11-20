import express from "express";
import db from "./config/db.js";

const app = express();

app.use(express.json());
app.use(express.static("public"));

app.set("view engine", "ejs");
app.set("views", "./src/views");

app.get("/", (req, res) => {
    res.send("Bienvenue sur Kizora, le site d'animes !");
});

app.listen(process.env.PORT || 8080, () => {
  console.log(`Le serveur à démarré sur le port ${process.env.PORT || 8080} à l'adresse suivante : http://localhost:${process.env.PORT || 8080}/`);
});