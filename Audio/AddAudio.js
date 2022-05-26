const express = require("express");
const app = express();
var bodyParser = require("body-parser");
var jsonParser = bodyParser.json();
var connection = require("../connect");
var path = require("path");
const multer = require("multer");
app.use(express.static(path.join(__dirname, "public")));

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, "../public"));
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname + path.extname(file.originalname));
  },
});

const upload = multer({ storage: storage });
app.use(upload.single("file"));

app.post("/addAudio", function (req, res) {
  if (req.file) {
    connection("upload")
      .insert({
        file: "http://localhost:5000/" + req.file.filename,
      })
      .then(function (result1) {
        res.json({
          Message: "Audio Succesfully added",
          Status: true,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  } else {
    res.json({
      Message: "Please uplaod Audio file",
      Status: false,
    });
  }
});

module.exports = app;
