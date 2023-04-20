const Url = require("../database/Urls");

const getUrl = async () => {
  try {
    const url = await Url.find({});
    return console.log(url);
  } catch (err) {
    return console.log(err);
  }
};

const addUrl = async (req, res) => {
  try {
    let url = await Url.create(req.query.url);
    url.save((err, data) => {
      err ? console.error(err) : console.log(`${data} saved to database`);
      done(null, data);
    });
  } catch (err) {
    return console.log(err);
  }
};
const shortUrl = async () => {
  return;
};

module.exports = {
  getUrl,
  addUrl,
  shortUrl,
};
