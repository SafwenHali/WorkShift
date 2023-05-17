const mongoose = require("mongoose");
const schema = mongoose.Schema;

const careerFieldsSchema = new schema({
    Name: {
        type: String,
        required: true
      },
    Description: {
        type: String,
        required: true
      }
    });
const CareerFields = mongoose.model("careerFields", careerFieldsSchema);
module.exports = CareerFields;