const Article = require('../models/article');

//create article
exports.createNewArticle = async (req, res) =>{ 
    try{
    const article = await Article.create({
        articleName: req.body.title,
        articleText: req.body.text,
        articleWriter: req.body.writer,
        articleCover: req.body.cover        
    })  
    res.json({ articles: article });
 }
    catch(err){
        console.log(err.message)
        res.json('article not Created');
    }
};

//get all articles
exports.getAllArticles = async (req, res) =>{
    //find
    const article = await Article.find();
    //return
    res.json({ articles: article });
 };

//get article by ID
exports.getArticleByID = async (req, res) =>{
    try{
    const article =await Article.findById(req.params.id);
    res.json({ articles: article });
    }
    catch(err){
        console.log(err.message);
        res.json('article not found');
    }
};

//delete article
exports.deleteArticleByID = async (req, res) =>{
    const article =await Article.findByIdAndDelete(req.params.id);
};

//update article
exports.updateArticleByID = async (req, res) =>{
    try{article =await Article.findByIdAndUpdate(req.params.id,
        {
            articleName: req.body.title,
            articleText: req.body.text,
            articleWriter: req.body.writer,
            articleCover: req.body.cover  
        });
         res.json('article successfully updated');}
    catch(err){
        console.log(err.message);
        res.json('article not updated');
    }
};

