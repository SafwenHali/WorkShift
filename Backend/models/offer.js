const mongoose = require("mongoose");
const schema = mongoose.Schema;

const jobOfferSchema = new schema(
  {
    jobName: {
      type: String,
      required: true,
    },
    jobDescription: {
      type: String,
      required: true,
    },
    Recruiter: {
      type: String,
    },

    jobCover: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
const JobOffer = mongoose.model("jobOffer", jobOfferSchema);
module.exports = JobOffer;
