const mongoose = require("mongoose");
const schema = mongoose.Schema;
const categorySchema = schema({
  name: {
    type: String,
    required: true,
  },
});
const Category = mongoose.model("category", categorySchema);
module.exports = Category;
