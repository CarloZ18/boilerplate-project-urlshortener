const dns = require("dns");
const shortUrlService = require("../services/shortUrlService");

const getUrl = (req, res) => {
  res.sendFile(process.cwd() + "/views/index.html");
};

const addUrl = (req, res) => {
  const newUrl = shortUrlService.addUrl();
 res.send({
  original_url:newUrl
 })
};

const shortUrl = (req, res) => {
  const shortUrl = shortUrlService.shortUrl();
  let url = `${req.body.url}`.slice(8);
  dns.lookup(url, (err, address) => {
    if (err || address == null) {
      res.json({
        error: "Invalid URL",
      });
    } else {
      res.json({
        original_url: `${req.body.url}`,
        short_url: 1,
      });
    }
  });
};

module.exports = {
  getUrl, 
  addUrl,
  shortUrl,
};
