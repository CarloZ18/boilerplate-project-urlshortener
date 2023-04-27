const express = require("express");
const router = express.Router();
const shortUrlController = require("../../controllers/shortUrlController");

router.get("/", shortUrlController.getAllUrls);
router.post("/api/shorturl", shortUrlController.createShortUrl);
router.get("/api/shorturl/:id", shortUrlController.getNewUrl);

module.exports = router;
