const express = require("express");
const {
  updateJobs,
  deleteJobs,
  getJobsById,
  getJobs,
  getJobsByRate,
  createJobs,
} = require("../../controllers/quiz/jobs");
const router = express.Router();

//post Jobs
router.post("/", createJobs);

//get Jobss
router.get("/", getJobs);

//get Jobss
router.get("/Rate", getJobsByRate);

//get JobsByID
router.get("/:id", getJobsById);

//delete Jobs
router.delete("/:id", deleteJobs);

//update Jobs
router.put("/:id", updateJobs);

module.exports = router;
