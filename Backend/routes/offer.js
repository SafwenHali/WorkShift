const express = require("express");
const {
  createJobOffer,
  getJobOfferByRecruiter,
  getJobOfferById,
  getJobOffers,
  deleteJobOffer,
  updateJobOffer,
} = require("../controllers/JobOffer");
const router = express.Router();
//post
router.post("/", createJobOffer);

//get
router.get("/", getJobOffers);

//get ByID
router.get("/:id", getJobOfferById);
router.get("/jobrecruiter/:Recruiter", getJobOfferByRecruiter);

//delete
router.delete("/:id", deleteJobOffer);

//update
router.put("/:id", updateJobOffer);

module.exports = router;
