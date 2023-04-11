const SubCategory = require("../models/subcategory");
const Category =require("../models/category")
const {getCategoryById} = require("../controllers/categories");

//POST
const createSubCategory = async (req, res) => {
  //create
  try {
    const { name, description, category_id } = req.body;
    const existingSubCategory = await SubCategory.findOne({ name: name ,category_id:category_id});

    if (existingSubCategory) {
      // A category with the same name already exists
      throw new Error('SubCategory exists already');
    }
     
      const subCategory = await SubCategory.create({
        name: name,
        description:description,
        category_id:category_id
      });
      res.json({ subcategories: subCategory });
    } 
  catch (err) {
    console.log(err.message);
    res.json("subcategory not created");
  }
};

//GET all Subcategories
const getAllSubCategories = async (req, res) => {
  //find
  const subcategory = await SubCategory.find();
  //return Subcategory&&
  res.json({ subcategories: subcategory });
};

//GET Subcategories by categoryID
const getAllSubCategoriesByCategoryID= async (req, res) => {
  const id=req.params.id ;
 const subCategories = await SubCategory.find({ category_id: id })
      res.json(subCategories);}

//GET Subcategory by Id
const getSubCategoryById = async (req, res) => {
  try {
    const subcategory = await SubCategory.findById(req.params.id);
    res.json({ subcategories: subcategory });
  } catch (err) {
    console.log(err.message);
    res.json("subcategory not found");
  }
};

//get category by subcategory id
const getCategoryBySubId = async (req, res) => {
  const subcategory = await SubCategory.findById(req.params.id);
  const s = subcategory.category_id.toString();
  const category = await Category.findById(s);
  res.json(category);}

//DELETE
const deleteSubCategory = async (req, res) => {
  const subcategory = await SubCategory.findByIdAndDelete(req.params.id);
  console.log("item deleted");
  res.json("sub deleted");
};

//UPDATE
const updateSubCategory = async (req, res) => {
  try {
    subcategory = await SubCategory.findByIdAndUpdate(req.params.id, {
      name: req.body.name,
    });
    res.json(`subcategory updated successfully`);
  } catch (err) {
    console.log(err.message);
    res.json("subcategory not updated ");
  }
};
module.exports = {
  createSubCategory,
  getAllSubCategories,

  getAllSubCategoriesByCategoryID,
  getCategoryBySubId,

  getSubCategoryById,
  deleteSubCategory,
  updateSubCategory,
};
