const express = require("express");
const {
  updatePerson,
  deletePerson,
  getPersonById,
  getPerson,
  createPerson,
  getPersonByCode,
  getJobsByCode
} = require("../../controllers/quiz/personalities");
const router = express.Router();

//post Person
router.post("/", createPerson);

//get Persons
router.get("/", getPerson);

//get PersonByID
router.get("/:id", getPersonById);

//get PersonByCode
router.get("/code/:personalityCode", getPersonByCode);

//get PersoJobsnByCode
router.get("/Jobs/:personalityCode", getJobsByCode);

//delete Person
router.delete("/:id", deletePerson);

//update Person
router.put("/:id", updatePerson);

module.exports = router;
