const express = require("express");
const consign = require("consign");
const bodyParser = require("body-parser");
const expressValidator = require("express-validator");
const app = express();
app.set("view engine", "ejs");
app.set("views", "./src/views");
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(expressValidator());
consign().then("./src/routes").then("./src/models").into(app);
module.exports = app;
