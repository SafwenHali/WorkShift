const mongoose = require("mongoose");
const schema = mongoose.Schema;

const articleSchema = new schema(
  {
    articleName: {
      type: String,
      required: true,
    },
    articleText: {
      type: String,
      required: true,
    },
    articleWriter: {
      type: String,
    },

    articleCover: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
const Article = mongoose.model("article", articleSchema);
module.exports = Article;
