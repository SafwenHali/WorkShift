const Jobs = require("../../models/quiz/jobs");

//POST
const createJobs = async (req, res) => {
  //create
  try {
    const jobs = await Jobs.create({
      jobTitle: req.body.jobTitle,
      unempRate: req.body.unempRate,
      field: req.body.field,
      formations: req.body.formations,
    });
    res.json({ jobs: jobs });
  } catch (err) {
    console.log(err.message);
    res.json("Job not created");
  }
};

//GET all Jobs
const getJobs = async (req, res) => {
  //find
  const jobs = await Jobs.find();
  //return Jobs&&
  res.json({ jobs: jobs });
};

//GET Jobs by Id
const getJobsById = async (req, res) => {
  try {
    const jobs = await Jobs.findById(req.params.id);
    res.json({ jobs: jobs });
  } catch (err) {
    console.log(err.message);
    res.json("Job not found");
  }
};

//DELETE
const deleteJobs = async (req, res) => {
  const jobs = await Jobs.findByIdAndDelete(req.params.id);
  console.log("item deleted");
  res.json("Job deleted");
};

//UPDATE
const updateJobs = async (req, res) => {
  try {
    const jobs = await Jobs.findByIdAndUpdate(req.params.id, {
      jobTitle: req.body.jobTitle,
      unempRate: req.body.unempRate,
      field: req.body.field,
      formations: req.body.formations,
    });
    res.json(`Job updated successfully`);
  } catch (err) {
    console.log(err.message);
    res.json("Job not updated ");
  }
};
module.exports = {
  createJobs,
  getJobs,
  getJobsById,
  deleteJobs,
  updateJobs,
};
