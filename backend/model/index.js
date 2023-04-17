const mongoose = require("mongoose");

const authModel = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
      select: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('authModel', authModel);
