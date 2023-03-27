const express=require("express");
const router = express.Router();
const Article= require("../Models/article");

//post article
router.post("/", async (req,res)   => {
    //create article
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
});

//get articles
router.get("/", async (req, res) => {
    //find
    const article = await Article.find();
    //return
    res.json({ articles: article });
 });

//get articleByID
router.get("/:id", async (req, res) => {
    try{
    const article =await Article.findById(req.params.id);
    res.json({ articles: article });
    }
    catch(err){
        console.log(err.message);
        res.json('article not found');
    }
});

//delete article
router.delete("/:id", async (req, res) => {
    const article =await Article.findByIdAndDelete(req.params.id);
});

//update article
router.put("/:id", async (req, res) => {
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
});

module.exports = router;