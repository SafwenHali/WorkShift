const SubCategory = require("../models/subcategory");
const Categori= require("../models/category");

//POST
//lazem tjib id name idcategory namecategory
// POST a new subcategory

const createSubCategory = async (req, res) => {
  try {
  const category =  Categori.findById(req.body.category);
  const subcategory = await SubCategory.create({
  name: req.body.name,
  category: category._id});
  res.json(subcategory);
  } catch (err) {
    console.log(err.message);
    res.json("subcategory not created");
  }}
/*
const createSubCategory = async (req, res) => {
  //create
  try {
    const subcategory = await SubCategory.create({
      name: req.body.name,
      Category: req.params.Category,
    });
    res.json({ subcategories: subcategory });
  } catch (err) {
    console.log(err.message);
    res.json("subcategory not created");
  }
};*/

//GET all categories
const getAllSubCategories = async (req, res) => {
  //find
  const subcategory = await SubCategory.find();
  //return category&&
  res.json({ subcategories: subcategory });
};
//GET category by Id
const getSubCategoryById = async (req, res) => {
  try {
    const subcategory = await SubCategory.findById(req.params.id);
    res.json({ subcategories: subcategory });
  } catch (err) {
    console.log(err.message);
    res.json("subcategory not found");
  }
};
//DELETE
const deleteSubCategory = async (req, res) => {
  await SubCategory.findByIdAndDelete(req.params.id);
  res.json("sub category deleted");
  console.log("item deleted");
};

//UPDATE
const updateSubCategory = async (req, res) => {
  try {
    await SubCategory.findByIdAndUpdate(req.params.id, {
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
  getSubCategoryById,
  deleteSubCategory,
  updateSubCategory,
};
