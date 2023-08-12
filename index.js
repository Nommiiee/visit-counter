const express = require("express");
const app = express();
const mongoose = require("mongoose");
const visitorSchema = require("./src/model/visitsorModel.js");
const bodyParser = require("body-parser");

require("dotenv").config();

mongoose
  .connect(process.env.mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((result) => {
    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
  })
  .catch((err) => {
    console.log(err);
  });

mongoose.connection.on("connected", () => {
  visitorSchema.ensureIndexes();
  console.log("Mongoose is connected");
});

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Hello World! Service is running");
});

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
