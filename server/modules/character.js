let Mongoose = require("mongoose");

const Schema = Mongoose.Schema;

const characterSchema = new Schema({
  name: String,
  comment: { type: String },
  mediaId: { type: Schema.Types.ObjectId, ref: "Media", required: true }
});

const Character = Mongoose.model("Character", characterSchema);
module.exports = Character;
