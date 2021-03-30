const mongoose = require("mongoose");

const URL = "mongodb://localhost/quote";

mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true });

const db = mongoose.connection;

db.on("connected", () => {
  console.log("database is connected succesfully");
});

db.on("disconnected", () => {
  console.log("database is disconnected succesfully");
});

db.on("error", console.error.bind(console, "connection error:"));

module.exports = db;
