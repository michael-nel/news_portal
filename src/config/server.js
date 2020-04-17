const express = require("express");
const consign = require("consign");
const bodyParser = require("body-parser");
const app = express();
app.set("view engine", "ejs");
app.set("views", "./src/views");
app.use(bodyParser.urlencoded({ extended: true }));
consign().then("./src/routes").then("./src/models").into(app);
module.exports = app;
