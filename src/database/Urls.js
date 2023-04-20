require("dotenv").config();
const mongoose = require("mongoose");

//Connect database
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

//Model
const urlSchema = new mongoose.Schema({
  original: String,
});

let Url = mongoose.model("Url", urlSchema);

module.exports = {Url};
