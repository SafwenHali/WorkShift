const mongoose = require("mongoose");
const schema = mongoose.Schema;
const Formation = require("../models/formation");
const coursSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    formation_id: {
      type: schema.Types.ObjectId,
      ref: "Formation",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
const Cours = mongoose.model("Cours", coursSchema);
module.exports = Cours;
