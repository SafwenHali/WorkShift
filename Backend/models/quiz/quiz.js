const mongoose = require("mongoose");
const schema = mongoose.Schema;

const quizSchema = new schema({
    quizTitle: {
        type: String,
        required: true
      },
    quizDescription: {
        type: String,  
    },
    quizType:{
        type: String,
        enum: ['test','qcm','entretient'],
        required: true
    },
    quizQuestions: [{
        questionText: {
            type: String,
            required: true
            },
        options: [{
            optionText: {
                type: String,
                required: true
            },
            optionValue: {
                type: Boolean,
                required: true,
                default : false
              }
        }]
    }]
    },{
    timestamps: true
});
const Quiz = mongoose.model("quiz", quizSchema);
module.exports = Quiz;