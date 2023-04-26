const express = require("express");
const {
  createCours,
  getAllCours,
  getCoursById,
  deleteCours,
  updateCours,
} = require("../controllers/cours");
const router = express.Router();
//POST
router.post("/", createCours);
//GET
router.get("/", getAllCours);
//GET by Id
router.get("/:id", getCoursById);
//DELETE
router.delete("/:id", deleteCours);
//PUT
router.put("/:id", updateCours);

module.exports = router;
