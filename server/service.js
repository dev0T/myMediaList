const Character = require("./modules/character");
const Media = require("./modules/media");

// create read update delete


exports.getMedias = async () => {
  const medias = await Media.find({}, [
    "_id",
    "name",
    "type",
    "genre",
    "completed",
    "comment"
  ]).exec();

  return medias;
};

exports.getMediasIds = async () => {
  const medias = await Media.find({}, ["_id", "name"]).exec();

  return medias;
};

exports.getCharacters = async () => {
  const characters = await Character.find({}, ["name", "comment"]).exec();

  return characters;
};



exports.updateMediaWithCharacter = async (mediaId, characterId) => {
  const media = await Character.findOneAndUpdate(
    { _id: mediaId },
    { $push: { characters: characterId } }
  );

  return media;
};

exports.createMedia = async (
  name,
  type,
  genre,
  completed,
  characters,
  comment
) => {
  const media = await Media.create({
    name,
    type,
    genre,
    completed,
    characters,
    comment
  });
  console.log("New media created.");
  return media;
};

exports.createCharacter = async (name, comment, mediaId) => {
  const character = await Character.create({ name, comment, mediaId });

  // Trying to update the media with the character objectId needs to be fixed
  //const media = await updateMediaWithCharacter(mediaId, character._id);

  console.log("New character created.");
  return character;
};

// TODO Will be used by the search bar route

exports.getMediaByName = async name => {
  const media = await Media.findOne({ name }).exec();
  return media;
};

exports.getCharacterByName = async name => {
  const media = await Character.findOne({ name }).exec();
  return media;
};
