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
  //Verificación de url válida
  if (await validateUrl(sliceUrl) !== null) {
    console.log(await validateUrl(sliceUrl))
    const { url } = req.body;
    let urlId = uuidv4().slice(0, 5);
    let newUrl = {
      original: url,
      short: `${req.hostname}/api/shorturl/${urlId}`,
      id: urlId,
    };
    const dataShortUrl = await shortUrlService.createShortUrl(newUrl);
    res.send({
      original_url: url,
      short_url: dataShortUrl,
    });
  } else {
    res.send({
      error: "invalid url",
    });
  }
};

module.exports = {
  getAllUrls,
  getNewUrl,
  createShortUrl,
};
