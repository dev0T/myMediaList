const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const bodyParser = require("body-parser");
const {
  mediaValidators,
  characterValidators,
} = require("./validators.js");
const { validationResult } = require("express-validator");
require("dotenv").config();

const Media = require("./modules/media");
const Character = require("./modules/character");
const {
  getMedias,
  createCharacter,
  createMedia,
  getCharacters,
  getMediasIds
} = require("./service");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

const mongoDB = process.env.DB_URL;
const port = process.env.PORT;

const server = app.listen(port, console.log(`Server running on port ${port}`));

mongoose.connect(mongoDB, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  console.log("Connected to MongoDB Atlas");
});

//
// Routes TODO: separate routes in another file
//

// Create new media

app.post("/api/medias", mediaValidators, async (req, res) => {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    const { name, type, genre, completed, characters, comment } = req.body;
    try {
      const media = await createMedia(
        name,
        type,
        genre,
        completed,
        characters,
        comment
      );
      res.json(media);
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  } else {
    return res.status(400).json({ errors: errors.array() });
  }
});

// Create new character

app.post("/api/characters", characterValidators, async (req, res) => {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    const { name, comment, mediaId } = req.body;
    try {
      const character = await createCharacter(name, comment, mediaId);
      res.json(character);
    } catch (error) {
      console.log(error);
      res.status(500).send("Error");
    }
  } else {
    return res.status(400).json({ errors: errors.array() });
  }
});

// Get all medias

app.get("/api/medias", async (req, res) => {
  try {
    const medias = await getMedias();
    res.json(medias);
  } catch (error) {
    console.log(error);
  }
});

// Get all medias with ids

app.get("/api/medias/ids", async (req, res) => {
  try {
    const medias = await getMediasIds();
    res.json(medias);
  } catch (error) {
    console.log(error);
  }
});

// Get all characters

app.get("/api/characters", async (req, res) => {
  try {
    const characters = await getCharacters();
    res.json(characters);
  } catch (error) {
    console.log(error);
  }
});

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../public", "index.html"));
});
