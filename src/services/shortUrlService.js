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
    const IdUrl = await Url.findById(shortUrlId);
    return IdUrl.original;
  } catch (err) {
    return console.log(err);
  }
};

const createShortUrl = async (newUrl, newId) => {
  try {
    const originalUrl = await Url.find({ original: newUrl.original });
    if (originalUrl.length < 1) {
      const url = Url.create(newUrl);
      return url;
    } else {
      const updateUrl = Url.updateOne(
        { original: newUrl.original },
        { id: newId },
        { new: true }
      );
      return updateUrl;
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
