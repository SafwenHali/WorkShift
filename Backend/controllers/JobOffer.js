const Job = require("../models/offer");

//post job offer
const createJobOffer = async (req, res) => {
  try {
    console.log("in create");
    const jobOffer = await Job.create({
      jobName: req.body.jobName,
      jobDescription: req.body.jobDescription,
      Recruiter: req.body.Recruiter,
      jobCover: req.body.jobCover,
    });
    res.json({ jobOffers: jobOffer });
  } catch (err) {
    console.log(err.message);
    res.json("offer is not created");
  }
};

//get offers
const getJobOffers = async (req, res) => {
  const jobOffer = await Job.find();
  res.json({ jobOffers: jobOffer });
};

//get offer by id
const getJobOfferById = async (req, res) => {
  try {
    const jobOffer = await Job.findById(req.params.id);
    res.json({ jobOffers: jobOffer });
  } catch (err) {
    console.log(err.message);
    res.json("job offer not found not found");
  }
};

//get job offer by recruiter
const getJobOfferByRecruiter = async (req, res) => {
  const { Recruiter } = req.params;

  try {
    const jobOffer = await Job.find({ Recruiter });

    if (jobOffer.length === 0) {
      return res
        .status(404)
        .json({ error: "No job offer found for the specified recruiter" });
    }

    res.status(200).json({ jobOffer });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
};

//update offer
const updateJobOffer = async (req, res) => {
  try {
    const jobOffer = await Job.findByIdAndUpdate(req.params.id, {
      jobName: req.body.jobName,
      jobDescription: req.body.jobDescription,
      Recruiter: req.body.Recruiter,
      jobCover: req.body.jobCover,
    });
    res.json("job offer successfully updated");
  } catch (err) {
    console.log(err.message);
    res.json("job offer not updated");
  }
};

//delete offer
const deleteJobOffer = async (req, res) => {
  const jobOffer = await Job.findByIdAndDelete(req.param.id);
  res.json("job offer deleted");
};
module.exports = {
  createJobOffer,
  getJobOfferByRecruiter,
  getJobOfferById,
  getJobOffers,
  deleteJobOffer,
  updateJobOffer,
};
