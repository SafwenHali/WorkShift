const { required } = require("joi");
const mongoose = require("mongoose");
const schema = mongoose.Schema;

const adminSchema = new schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: string,
      required: true,
    },
    fullName: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ["superadmin", "admin"],
      required: true,
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);
const Admin = mongoose.model("admin", adminSchema);
module.exports = Admin;
