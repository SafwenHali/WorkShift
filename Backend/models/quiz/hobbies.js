const mongoose = require("mongoose");
const schema = mongoose.Schema;

const hobbiesSchema = new schema({
    hobbyName: {
        type: String,
        required: true
      },
    hobbyDesc: {
        type: String,
        required: true 
    },
    hobbyImage:{
        type: String,
        required: true
    },
    formations: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "subcategory",
        required: true,
    },
    });
const Hobbies = mongoose.model("hobbies", hobbiesSchema);
module.exports = Hobbies;