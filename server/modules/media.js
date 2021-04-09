let Mongoose = require("mongoose");

const Schema = Mongoose.Schema;

const mediaSchema = new Schema({
  name: String,
  type: {
    type: String,
    enum: ["Anime", "Manga", "Game", "Show"],
    required: true
  },
  genre: { type: String },
  completed: { type: Boolean, required: true },
  characters: [{ type: Schema.Types.ObjectId, ref: "Character" }],
  comment: { type: String }
});

const Media = Mongoose.model("Media", mediaSchema);
module.exports = Media;
