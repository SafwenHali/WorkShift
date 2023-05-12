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
        enum: ['test','qcm','autre'],
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
                type: Number,
                min: 0,
                max: 9,
                required: true,
                default : 0
              }
        }]
    }]
    },{
    timestamps: true
});
const Quiz = mongoose.model("quiz", quizSchema);
module.exports = Quiz;