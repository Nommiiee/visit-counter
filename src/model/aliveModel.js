const mongoose = require("mongoose");

const keepAlive = new mongoose.Schema(
  {
    date: {
      default: Date.now,
      type: Date,
    },
  },
  { timestamps: true }
);

const aliveSchema = mongoose.model("aliveSchema", keepAlive);

module.exports = aliveSchema;
