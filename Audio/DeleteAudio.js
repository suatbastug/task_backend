var express = require("express");
var bodyParser = require("body-parser");
var jsonParser = bodyParser.json();
var app = express();
var connection = require("../connect");

app.post("/deleteAudio", jsonParser, function (req, res) {
  connection("upload")
    .where("id", req.body.Id)
    .del()
    .then(function (result) {
      console.log(result);
      res.json({ Message: "Data Deleted SuccessFully", Status: true });
    })
    .catch((err) => {
      console.log(err);
      res.json({
        success: false,
        message: "please check Code Data Not Deleted.",
      });
    });
});
module.exports = app;
