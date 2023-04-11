const express = require("express");
const {
  createCategory,
  getAllCategories,
  getAllCategoriesNames,
  getCategoryById,
  deleteCategory,
  updateCategory,
} = require("../controllers/categories");
const router = express.Router();

//post course
router.post("/", createCategory);

//get courses
router.get("/", getAllCategories);

router.get("/names", getAllCategoriesNames);


//get courseByID
router.get("/:id", getCategoryById);

//delete course
router.delete("/:id", deleteCategory);

//update course
router.put("/:id", updateCategory);

module.exports = router;
