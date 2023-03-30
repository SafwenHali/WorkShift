const mongoose = require("mongoose");
const schema = mongoose.Schema;
const Joi = require("joi");
const categorySchema = mongoose.Schema({
  id: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
});
const Category = mongoose.model("category", categorySchema);
module.exports = Category;
