require("dotenv").config();
const mongoose = require("mongoose");

//Connect database
mongoose.connect(
  "mongodb+srv://CarloZ:153624@cluster0.g7rgryz.mongodb.net/fcc-shorturl-project?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);
//Model
const urlSchema = new mongoose.Schema({
  original: {
    type: String,
    required: true,
  },
  short: String,
  id: Number,
});

let Url = mongoose.model("Url", urlSchema);

module.exports = Url;
