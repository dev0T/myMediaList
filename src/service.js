import axios from "axios";

export const addMedia = (name, type, genre, completed, characters, comment) => {
  const savedMedia = axios
    .post("/api/medias", { name, type, genre, completed, characters, comment })
    .then(result => {
      return result.data;
    })
    .catch(error => console.log(error));

  return savedMedia;
};

export const addCharacter = (name, comment, mediaId) => {
  const savedMedia = axios
    .post("/api/characters", { name, comment, mediaId })
    .then(result => {
      return result.data;
    })
    .catch(error => console.log(error));

  return savedMedia;
};

export const getMedias = () => {
  const medias = axios
    .get("/api/medias")
    .then(result => {
      return result.data;
    })
    .catch(error => console.log(error));

  return medias;
};

export const getMediasIds = () => {
  const medias = axios
    .get("/api/medias/ids")
    .then(result => {
      return result.data;
    })
    .catch(error => console.log(error));

  return medias;
};

export const getCharacters = () => {
  const medias = axios
    .get("/api/characters")
    .then(result => {
      return result.data;
    })
    .catch(error => console.log(error));

  return medias;
};