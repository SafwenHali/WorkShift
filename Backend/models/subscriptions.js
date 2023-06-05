const mongoose = require("mongoose");
const schema = mongoose.Schema;
const { formation_id } = require("./formation");
const { user_id } = require("./userModel");

const subscriptionSchema = new schema(
  {
    formation_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Formation",
      required: true,
    },
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    price: {
      type: String,
      value: "0",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
const Subscription = mongoose.model("subscription", subscriptionSchema);
module.exports = Subscription;
