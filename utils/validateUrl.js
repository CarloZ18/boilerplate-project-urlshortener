const dns = require("dns");
const validateUrl = (url) => {
  dns.lookup(url, (err, address) => {
   return address
  });
};

module.exports=validateUrl