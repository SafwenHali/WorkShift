const mongoose = require("mongoose");
const schema = mongoose.Schema;

const quizzSchema = new schema({
    question: {
        type: String,
        required: true
      },
      options: [{
        text: {
          type: String,
          required: true
        },
        value: {
          type: String,
          enum: ['true','false','op1', 'op2', 'op3', 'op4', 'op5'],
          required: true,
          default : "false"
        }
      }]
    },{
    timestamps: true
});
const Quizz = mongoose.model("quizz", quizzSchema);
module.exports = Quizz;