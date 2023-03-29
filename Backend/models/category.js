const mongoose = require("mongoose");
const schema = mongoose.Schema;
const Joi = require("joi");

const categorySchema = Joi.object({
  categoryId: Joi.string().required(),
  categoryName: Joi.string().required(),
});
const Category = mongoose.model("category", categorySchema);
module.exports = Category;
