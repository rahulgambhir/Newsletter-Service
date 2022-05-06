const mongoose = require("mongoose");

const contentSchema = mongoose.Schema({
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
  body: {
    type: String,
    required: [true, "Please provide body of this content"],
  },
  time: {
    type: Date,
    required: [true, "Please specify the floating time for this content"],
  },
  isSent: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Content", contentSchema);
