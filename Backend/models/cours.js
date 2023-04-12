const mongoose = require("mongoose");
const schema = mongoose.Schema;
const coursSchema = mongoose.Schema({
  nom: { type: String, required: true },
  description: { type: String, required: true },
  duree: { type: Number, required: true },
  formation: { type: Schema.Types.ObjectId, ref: "Formation", required: true },
});
const Cours = mongoose.model("Cours", coursSchema);
module.exports = Cours;
