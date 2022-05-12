require("dotenv").config();
const express = require("express");
const router = express.Router();
const axios = require("axios");

// characters
router.get("/characters", async (req, res) => {
  const API = process.env.API_KEY;

  const characters_API = `https://lereacteur-marvel-api.herokuapp.com/characters?apiKey=${API}`;
  try {
    const response = await axios.get(characters_API);
    console.log("je suis dans le characters");
    console.log("response", response);
    res.json(response.data);
  } catch (error) {
    res.status(400).json(error.message);
  }
});

// charactersId
router.get("/character/:characterId", async (req, res) => {
  const charachterId = req.params.characterId;
  try {
    const response = await axios.get(
      `https://lereacteur-marvel-api.herokuapp.com/character/${charachterId}?apiKey=${process.env.API_KEY}`
    );
    console.log("je suis dans le charactersId");
    console.log("characterId", req.params.characterId);

    res.json(response.data);
  } catch (error) {
    res.status(400).json(error.message);
  }
});

module.exports = router;
