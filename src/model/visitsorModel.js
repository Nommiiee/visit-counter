const mongoose = require("mongoose");

const visitSchema = new mongoose.Schema(
  {
    uniqueIdentity: {
      type: String,
      required: true,
      unique: true,
    },
    totalVisits: {
      type: Number,
      default: 0,
    },
    date: {
      default: Date.now,
      type: Date,
    },
  },
  {
    timestamps: true,
  }
);

const Visitor = mongoose.model("Visitor", visitSchema);

module.exports = Visitor;
