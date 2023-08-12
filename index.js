const express = require("express");
const app = express();
const mongoose = require("mongoose");
const visitorSchema = require("./src/model/visitsorModel.js");
const bodyParser = require("body-parser");

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

mongoose.connect("mongodb://127.0.0.1:27017/visitors", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on("connected", () => {
  visitorSchema.ensureIndexes();
  console.log("Mongoose is connected");
});

app.use(bodyParser.json());

const visit = require("./src/routes/visits.js");
app.use("/visits", visit);

process.on("uncaughtException", (err) => {
  console.log(err.name, err.message);
});

process.on("unhandledRejection", (err) => {
  console.log(err.name, err.message);
});

app.use((req, res, next) => {
  res.status(404).send("Sorry can't find that!");
});
