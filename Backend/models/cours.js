const mongoose = require("mongoose");
const schema = mongoose.Schema;
const coursSchema = mongoose.Schema({
  nom: { type: String, required: true },
  description: { type: String, required: true },
  duree: { type: Number, required: true },
  formationId: {
    type: Schema.Types.ObjectId,
    ref: "Formation",
    required: true,
  },
  formationNom: { type: String, required: true },
});
const Cours = mongoose.model("");
module.exports = Cours;
