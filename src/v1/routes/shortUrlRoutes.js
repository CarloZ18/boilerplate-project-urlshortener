const express = require("express");
const router = express.Router();
const shortUrlController = require("../../controllers/shortUrlController");

router.get("/", shortUrlController.getUrl);

router.get("/", shortUrlController.addUrl);

router.post("/api/shorturl", shortUrlController.shortUrl);

module.exports = router;
