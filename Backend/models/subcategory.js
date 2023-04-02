const mongoose = require("mongoose");
const schema = mongoose.Schema;
const Category = require("./category");
const subCategorySchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  Category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: Category,
    required: true,
  },
});
const SubCategory = mongoose.model("subcategory", subCategorySchema);
module.exports = SubCategory;
