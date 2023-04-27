const shortUrlService = require("../services/shortUrlService");
const validateUrl = require("../../utils/validateUrl");

const getAllUrls = (req, res) => {
  res.sendFile(process.cwd() + "/views/index.html");
  shortUrlService.findAllUrls();
};

const getNewUrl =  (req, res) => {
  const urlInBD=  shortUrlService.findUrlbyId(req.params.id)
  res.redirect(urlInBD);
};

const createShortUrl = (req, res) => {
  let sliceUrl = `${req.body.url}`.slice(8);
  //Verificación de url válida
  if (validateUrl(sliceUrl) !== null) {
    let urlId = Math.floor(Math.random() * (100 - 1) + 1);
    let newUrl = {
      original: req.body.url,
      short: `${req.hostname}/api/shorturl/${urlId}`,
      id: urlId,
    };
    shortUrlService.createShortUrl(newUrl, urlId);
    res.send({
      original_url: req.body.url,
      short_url: urlId,
    });
  } else {
    res.send({
      error: "Invalid Url",
    });
  }
};


module.exports = {
  getAllUrls,
  getNewUrl,
  createShortUrl,
};
