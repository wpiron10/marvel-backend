require("dotenv").config();
const express = require("express");
const router = express.Router();
const axios = require("axios");

// comics
router.get("/comics", async (req, res) => {
  const API = process.env.API_KEY;
  const comics_API = `https://lereacteur-marvel-api.herokuapp.com/comics?apiKey=${API}`;

  try {
    const response = await axios.get(comics_API);
    console.log("je suis dans le comics");
    console.log("response", response);
    res.json(response.data);
  } catch (error) {
    res.status(400).json(error.message);
  }
});

// comicsId
router.get("/comics/:characterId", async (req, res) => {
  const comicsId = req.params.characterId;
  const comicsId_API = `https://lereacteur-marvel-api.herokuapp.com/comics/${comicsId}?apiKey=${process.env.API_KEY}`;

  try {
    const response = await axios.get(comicsId_API);
    console.log("je suis dans le comicsId");
    console.log("response", response);
    res.json(response.data);
  } catch (error) {
    res.status(400).json(error.message);
  }
});

module.exports = router;
