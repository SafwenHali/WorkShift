const express = require("express");
const {
  getFormation,
  getFormationById,
  createFormation,
  updateFormation,
  deleteFormation,
  getFormationBySubCategoryID,
} = require("../controllers/formations");
const router = express.Router();

//post
router.post("/", createFormation);

//get
router.get("/", getFormation);

//get ByID
router.get("/:id", getFormationById);
// get by subid
router.get("/formationbysub/:id", getFormationBySubCategoryID);

//delete
router.delete("/:id", deleteFormation);

//update
router.put("/:id", updateFormation);

module.exports = router;
