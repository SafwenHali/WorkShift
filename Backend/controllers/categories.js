const Category = require("../models/category");

//POST

const createCategory = async (req, res) => {
  //create category
  try {
    
    const existingCategory = await Category.findOne({ name: req.body.name });

    if (existingCategory) {
      // A category with the same name already exists
      throw new Error('Category exists already');
    }
    
    const category = await Category.create({
      name: req.body.name,
    });
    res.json({ categories: category });
  } catch (err) {
    console.log(err.message);
    res.json("category not created");
  }
};

//GET all categories
const getAllCategories = async (req, res) => {
  //find
  const category = await Category.find();
  //return category
  res.json({ categories: category });
};

//GET category by Id
const getCategoryById = async (req, res) => {
  try {
    const category = await Category.findById(req.params.id);
    res.json({category : category});
  } catch (err) {
    console.log(err.message);
    //res.json("category not found");
  }
};

//Get all Categories' names
const getAllCategoriesNames= async (req, res) =>{
  const categories = await Category.find();
  const categoryNames = categories.map(category => category.name);
  res.json(categoryNames);
}
//DELETE
const deleteCategory = async (req, res) => {
  await Category.findByIdAndDelete(req.params.id);
  res.json("category deleted");
  console.log("item deleted");
};

//UPDATE
const updateCategory = async (req, res) => {
  try {
    category = await Category.findByIdAndUpdate(req.params.id, {
      name: req.body.name,
    });
    res.json(`category updated successfully`);
  } catch (err) {
    console.log(err.message);
    res.json("category not updated ");
  }
};
module.exports = {
  createCategory,
  getAllCategories,
  getAllCategoriesNames,
  getCategoryById,
  deleteCategory,
  updateCategory,
};
