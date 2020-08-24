const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const IdeaSchema = new Schema({
  abstract: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  skills: {
    type: [String],
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("idea", IdeaSchema);
