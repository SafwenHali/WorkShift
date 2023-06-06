const mongoose = require("mongoose");
const schema = mongoose.Schema;

const jobSchema = new schema(
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
const Job = mongoose.model("job", jobSchema);
module.exports = Job;
