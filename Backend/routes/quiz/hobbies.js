const express = require("express");
const {
  updateHobbies,
  deleteHobbies,
  getHobbiesById,
  getHobbies,
  createHobbies,
} = require("../../controllers/quiz/hobbies");
const router = express.Router();

//post Hobbies
router.post("/", createHobbies);

//get Hobbiess
router.get("/", getHobbies);

//get HobbiesByID
router.get("/:id", getHobbiesById);

//delete Hobbies
router.delete("/:id", deleteHobbies);

//update Hobbies
router.put("/:id", updateHobbies);

module.exports = router;
