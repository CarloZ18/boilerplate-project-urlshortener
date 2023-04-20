require("dotenv").config();
const express = require("express");
const app = express();
const { bodyParser, cors } = require("./middleware");
const v1ShortUrlRouter = require("./src/v1/routes/shortUrlRoutes");

// Basic Configuration
const port = process.env.PORT || 3000;

app.use(bodyParser);
app.use(cors);
app.use("/public", express.static(`${process.cwd()}/public`));
app.use("/", v1ShortUrlRouter);


// Your first API endpoint
app.use("/api/shorturl", v1ShortUrlRouter);

app.listen(port, function () {
  console.log(`Listening on port ${port}`);
});
