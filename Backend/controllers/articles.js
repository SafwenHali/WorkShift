const Article = require("../Models/article");

// POST article

const createArticle = async (req, res) => {
  //create article
  try {
    const article = await Article.create({
      articleName: req.body.title,
      articleText: req.body.text,
      articleWriter: req.body.writer,
      articleCover: req.body.cover,
    });
    res.json({ articles: article });
  } catch (err) {
    console.log(err.message);
    res.json("article not Created");
  }
};

//GET article

const getArticle = async (req, res) => {
  //find
  const article = await Article.find();
  //return
  res.json({ articles: article });
};

//GET article by ID

const getArticleById = async (req, res) => {
  try {
    const article = await Article.findById(req.params.id);
    res.json({ articles: article });
  } catch (err) {
    console.log(err.message);
    res.json("article not found");
  }
};

//DELETE article
const deleteArticle = async (req, res) => {
  const article = await Article.findByIdAndDelete(req.params.id);
};

//UPDATE article
const updateArticle = async (req, res) => {
  try {
    article = await Article.findByIdAndUpdate(req.params.id, {
      articleName: req.body.title,
      articleText: req.body.text,
      articleWriter: req.body.writer,
      articleCover: req.body.cover,
    });
    res.json("article successfully updated ");
  } catch (err) {
    console.log(err.message);
    res.json("article not updated");
  }
};
module.exports = {
  getArticle,
  getArticleById,
  createArticle,
  updateArticle,
  deleteArticle,
};
