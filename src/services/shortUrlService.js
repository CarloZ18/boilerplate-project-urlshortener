const Url = require("../database/Urls");

const findAllUrls = async () => {
  try {
    const allUrls = await Url.find();
    return allUrls;
  } catch (err) {
    console.log(err);
  }
};

const findUrlbyId = async (shortUrlId) => {
  try {
    const IdUrl = await Url.find({ id: shortUrlId });
    return IdUrl[0];
  } catch (err) {
    return console.log(err);
  }
};

const createShortUrl = async (newUrl) => {
  try {
    const originalUrl = await Url.find({ original: newUrl.original });
    if (originalUrl.length < 1) {
      await Url.create(newUrl);
      return newUrl;
    } else {
      return originalUrl[0];
    }
  } catch (err) {
    return console.log(err);
  }
};

module.exports = {
  findAllUrls,
  findUrlbyId,
  createShortUrl,
};
