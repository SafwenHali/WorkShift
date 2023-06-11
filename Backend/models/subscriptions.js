const mongoose = require("mongoose");
const schema = mongoose.Schema;

const subscriptionSchema = new schema(
  {
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      unique: true 
    },
    formationList:[{
      formation_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Formation",
      required: true,
    },
      }]
  },
  {
    timestamps: true,
  }
);
const Subscription = mongoose.model("subscription", subscriptionSchema);
module.exports = Subscription;
