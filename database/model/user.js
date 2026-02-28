// const mongoose = require("mongoose");
import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
  },
  {
    timestamps: true, // creates createdAt & updatedAt automatically
  }
);

const User = mongoose.model("User", userSchema);

export default User;