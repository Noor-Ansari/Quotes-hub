const mongoose = require("mongoose");
const db = require("./db");

const quotesSchema = mongoose.Schema({
  quote: {
    type: String,
    required: true,
  },
  author: String,
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("quotes", quotesSchema);
