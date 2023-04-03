const mongoose = require("mongoose");
const Category = require("./category");
const schema = mongoose.Schema;
const subCategorySchema = schema({
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
