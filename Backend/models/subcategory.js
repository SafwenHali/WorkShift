const mongoose = require("mongoose");
const schema = mongoose.Schema;
const Joi = require("joi");
const Category = require("./category");
const subcategorySchema = Joi.object({
  subcategoryId: Joi.string().required(),
  subcategoryName: Joi.string().required(),
  Category: Joi.mongoose.Schema.types.ObjectId().required(),
});
const SubCategory = mongoose.model("subcategory", subcategorySchema);
module.exports = SubCategory;
