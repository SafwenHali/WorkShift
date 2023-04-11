const express = require("express");
const {
  createSubCategory,
  getAllSubCategories,

  getAllSubCategoriesByCategoryID,
  getCategoryBySubId,

  getSubCategoryById,
  deleteSubCategory,
  updateSubCategory,
} = require("../controllers/subcategories");
const router = express.Router();

//post course
router.post("/", createSubCategory);

//get courses
router.get("/", getAllSubCategories);

//get courseByID
router.get("/:id", getSubCategoryById);
router.get("/category/:id", getAllSubCategoriesByCategoryID);
router.get("/categorybysub/:id", getCategoryBySubId);

//delete course
router.delete("/:id", deleteSubCategory);

//update course
router.put("/:id", updateSubCategory);

module.exports = router;
