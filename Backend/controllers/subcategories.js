const SubCategory = require("../models/subcategory");

//POST
//lazem tjib id name idcategory namecategory
const createSubCategory = async (req, res) => {
  //create
  try {
    const category = await SubCategory.create({
      name: req.body.name,
      Category: req.params.Category,
    });
    res.json({ subcategories: subcategory });
  } catch (err) {
    console.log(err.message);
    res.json("subcategory not created");
  }
};

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
  const subcategory = await SubCategory.findByIdAndDelete(req.params.id);
  console.log("item deleted");
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
  getSubCategoryById,
  deleteSubCategory,
  updateSubCategory,
};
