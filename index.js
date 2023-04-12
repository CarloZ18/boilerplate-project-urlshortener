require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const bodyParser = require("body-parser");
const dns = require("dns");
// Basic Configuration
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false }));

app.use(cors());

app.use("/public", express.static(`${process.cwd()}/public`));

app.get("/", function (req, res) {
  res.sendFile(process.cwd() + "/views/index.html");
});

// Your first API endpoint
app
  .route("/api/shorturl")
  .get((req, res) => {
    res.json({
      original_url: req.query.url,
    });
  })
  .post((req, res) => {
    const checkUrl = dns.lookup(req.body.url, options, (err, addresses) =>
      console.log("addresses: %j", addresses)
    );

    if (checkUrl) {
      res.json({
        original_url: req.body.url,
        short_url: 1,
      });
    } else {
      res.json({
        error: "Invalid URL",
      });
    }
  });

app.listen(port, function () {
  console.log(`Listening on port ${port}`);
});
