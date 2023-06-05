const mongoose = require("mongoose");
const schema = mongoose.Schema;
const Formation = require("./formation");
const User = require("./userModel");

const subscriptionSchema = new schema(
  {
    formation_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "formation",
      required: true,
    },
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
    price: {
      type: String,
      value: "0 TND",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
const Subscription = mongoose.model("subscription", subscriptionSchema);
module.exports = Subscription;
