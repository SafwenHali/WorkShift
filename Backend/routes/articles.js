const express = require("express");
const {
  updateArticle,
  deleteArticle,
  getArticleById,
  getArticle,
  createArticle,
} = require("../controllers/articles");
const router = express.Router();

//post article
router.post("/", createArticle);

//get articles
router.get("/", getArticle);

//get articleByID
router.get("/:id", getArticleById);

//delete article
router.delete("/:id", deleteArticle);

//update article
router.put("/:id", updateArticle);

module.exports = router;
