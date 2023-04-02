const mongoose = require("mongoose");
const schema = mongoose.Schema;
const Joi = require("joi");
const coursSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
});
const Cours = mongoose.model("");
module.exports = Cours;
