require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const bodyParser = require("body-parser");
const dns = require("dns");

const options = {
  // Setting family as 6 i.e. IPv6
  family: 6,
  hints: dns.ADDRCONFIG | dns.V4MAPPED,
};
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
    dns.lookup(req.body.url, options, (err, addresses) =>
      addresses !== ""
        ? res.json({
            original_url: req.body.url,
            short_url: 1,
          })
        : res.json({
            error: "Invalid URL",
          })
    );
  });

app.listen(port, function () {
  console.log(`Listening on port ${port}`);
});
