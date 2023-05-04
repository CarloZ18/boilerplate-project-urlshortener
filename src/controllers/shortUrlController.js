const shortUrlService = require("../services/shortUrlService");
const validateUrl = require("../../utils/validateUrl");
const { v4: uuidv4 } = require("uuid");
const getAllUrls = (req, res) => {
  res.sendFile(process.cwd() + "/views/index.html");
  shortUrlService.findAllUrls();
};

const getNewUrl = async (req, res) => {
  const urlInBD = await shortUrlService.findUrlbyId(req.params.id);
  res.redirect(urlInBD);
};

const createShortUrl = async (req, res) => {
  let sliceUrl = `${req.body.url}`.slice(8);
  const { url } = req.body;
  //Verificación de url válida
  if (validateUrl(sliceUrl) !== null) {
    let urlId = uuidv4().slice(0, 5);
    let newUrl = {
      original: url,
      short: `${req.hostname}/api/shorturl/${urlId}`,
      id: urlId,
    };
    const dataShortUrl = await shortUrlService.createShortUrl(newUrl);
    res.send({
      original_url: req.body.url,
      short_url: dataShortUrl,
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
