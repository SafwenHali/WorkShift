const mongoose = require("mongoose");
const schema = mongoose.Schema;


const jobsSchema = new schema({
    jobTitle: {
        type: String,
        required: true
      },
    unempRate: {
        type: Number,
        minimum: 0,
        maximum: 100,
        required: true
      },
    field: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "careerFields",
        required: true,
    },
    formations: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "subcategory",
        required: true,
    },
    
    });
const Jobs = mongoose.model("jobs", jobsSchema);
module.exports = Jobs;