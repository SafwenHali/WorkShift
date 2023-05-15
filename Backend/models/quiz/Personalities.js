const mongoose = require("mongoose");
const schema = mongoose.Schema;

const Jobs = require("../quiz/jobs");

const personalitiesSchema = new schema({
    personalityName: {
        type: String,
        required: true
      },
    personalityCode: {
        type: String,
        required: true 
    },
    personalityImage:{
        type: String,
        required: true
    },
    jobsList:[{
        job_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: Jobs,
            required: true
          }
        }]
    });
const Personalities = mongoose.model("personalities", personalitiesSchema);
module.exports = Personalities;