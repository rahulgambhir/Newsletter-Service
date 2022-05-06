const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = mongoose.Schema({
    name: {
      type: String,
      required: [true, "Please provide a name"],
      maxlength: [40, "Name should be under 40 characters"],
    },
    email: {
      type: String,
      required: [true, "Please provide an email"],
      validate: [validator.isEmail, ["Please enter email in correct format"]],
      unique: true,
    },
    topic: {
      type: String,
      required: [
        true,
        "Please select topics from - health, tech, motivation",
      ],
      enum: {
        values: ["health", "tech", "motivation"],
        message:
          "Please select topics ONLY from - health, tech, motivation",
      },
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  });

  module.exports = mongoose.model("User", userSchema);