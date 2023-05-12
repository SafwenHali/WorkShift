const mongoose = require("mongoose");
const schema = mongoose.Schema;

const questionSchema = new schema({
    questionText: {
        type: String,
        required: true
      },
      options: [{
        text: {
          type: String,
          required: true
        },
        value: {
          type: Number,
          min: 0,
          max: 9,
          required: true,
          default : 0
        }
      }]
    },{
    timestamps: true
});
const Question = mongoose.model("question", questionSchema);
module.exports = Question;