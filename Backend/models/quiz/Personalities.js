const mongoose = require("mongoose");
const schema = mongoose.Schema;

const personalitiesSchema = new schema({
    personalityName: {
        type: String,
        required: true
      },
    personalityCode: {
        type: String,
        required: true 
    },
    personalityDesc: {
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
            ref: "jobs"
          }
        }]
    });
const Personalities = mongoose.model("personalities", personalitiesSchema);
module.exports = Personalities;