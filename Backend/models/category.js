const mongoose = require("mongoose");
const schema = mongoose.Schema;
const Joi = require("joi");
const categorySchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
});
const Category = mongoose.model("category", categorySchema);
module.exports = Category;
