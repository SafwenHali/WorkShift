const express=require("express");
const router = express.Router();
const articleController = require('../controller/article');

// create new Article
router.post('/', articleController.createNewArticle);

// get all Articles
router.get('/', articleController.getAllArticles);

// get Article by ID
router.get('/:id',articleController.getArticleByID);

// update Article
router.put('/:id', articleController.updateArticleByID);

// delete Article
router.delete('/:id',articleController.deleteArticleByID);

module.exports = router;