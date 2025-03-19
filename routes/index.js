var express = require("express");
var router = express.Router();

const YOUR_API_KEY = process.env.API_KEY; // On récupère la clé API stockée dans le fichier .env

router.get("/movies", (req, res) => {
  fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${YOUR_API_KEY}`) // pas oublier le $
    .then((response) => response.json())
    .then((data) => {
      res.json({ movies: data.results }); // On envoie uniquement la liste des films
    });
});

module.exports = router;
