const mongoose = require("mongoose");
const Category = require("./category");
const schema = mongoose.Schema;
const subCategorySchema = schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  category_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "category",
    required: true,
  },
  // category_name: {
  //   type: mongoose.Schema.Types.name,
  //   ref: Category,
  //   required: true,
  // },
});

const SubCategory = mongoose.model("subcategory", subCategorySchema);
module.exports = SubCategory;
