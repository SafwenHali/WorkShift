const express = require("express");
const {
  createSubCategory,
  getAllSubCategories,
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

//delete course
router.delete("/:id", deleteSubCategory);

//update course
router.put("/:id", updateSubCategory);

module.exports = router;
