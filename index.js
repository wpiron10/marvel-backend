require("dotenv").config();
const express = require("express");
const formidable = require("express-formidable");
const cors = require("cors");
// affichage des logs transitant dans le serveur dans le terminal
const morgan = require("morgan");

const app = express();
app.use(formidable());
app.use(cors());
app.use(morgan("dev"));

// import des routes
const characters = require("./routes/characters");
app.use(characters);

const comics = require("./routes/comics");
app.use(comics);

// Démarrer le serveur :
app.listen(process.env.PORT, () => {
  console.log("Server has started");
});
