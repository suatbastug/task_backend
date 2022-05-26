const express = require("express");
const app = express();
const cors = require("cors");
const port = 5000;
app.use(cors());
const path = require("path");
app.use(express.static(path.join(__dirname, "public")));

const AddAudio = require("./Audio/AddAudio");
const GetAudio = require("./Audio/GetAudio");
const DeleteAudio = require("./Audio/DeleteAudio");

app.post("/addAudio", AddAudio);
app.post("/getAudio", GetAudio);
app.post("/deleteAudio", DeleteAudio);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
