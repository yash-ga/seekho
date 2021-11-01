const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    email: { type: String, required: true },
    password: { type: String, required: true },
    role: { type: String, required: true },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const User = new mongoose.model("user", userSchema);
module.exports = User;
