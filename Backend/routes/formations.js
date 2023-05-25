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
const { checkProfile } = require("../middlewares/profileMiddleware");

//post
router.post("/", checkProfile, createFormation);

//get
router.get("/", getFormation);

//get ByID
router.get("/:id", getFormationById);
// get by subid
router.get("/formationbysub/:id", getFormationBySubCategoryID);

//delete
router.delete("/:id", checkProfile, deleteFormation);

//update
router.put("/:id", checkProfile, updateFormation);

module.exports = router;
