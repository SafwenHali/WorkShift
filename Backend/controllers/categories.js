const Category = require("../models/category");

//POST
// ki tjib category tjiblk maaha subcategories li teb3inha
const createCategory = async (req, res) => {
  //create category
  try {
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
    res.json({ categories: category });
  } catch (err) {
    console.log(err.message);
    //res.json("category not found");
  }
};
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
  getCategoryById,
  deleteCategory,
  updateCategory,
};
