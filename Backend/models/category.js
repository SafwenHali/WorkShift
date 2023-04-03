const mongoose = require("mongoose");
const schema = mongoose.Schema;
const categorySchema = schema({
  name: {
    type: String,
    required: true,
  },
});
const Category = mongoose.model("Category", categorySchema);
module.exports = Category;
