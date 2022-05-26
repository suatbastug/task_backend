var express = require("express");
var bodyParser = require("body-parser");
var jsonParser = bodyParser.json();
var app = express();
var connection = require("../connect");

app.post("/getAudio", jsonParser, function (req, res) {
  connection
    .select("*")
    .from("upload")
    .then(function (result) {
      res.json({ data: result, status: true });
    });
});

module.exports = app;
