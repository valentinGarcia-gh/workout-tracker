const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const mongojs = require("mongojs");
const path = require("path");
const apiRoutes = require("./routes/apiRoute.js");
const htmlRoutes = require("./routes/htmlRoute.js")
const PORT = process.env.PORT || 3000;
const app = express();

app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
app.use(htmlRoutes);
app.use(apiRoutes);

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
  useFindAndModify: false,
  useCreateIndex:true,
  useUnifiedTopology: true
});

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});

module.exports = app;