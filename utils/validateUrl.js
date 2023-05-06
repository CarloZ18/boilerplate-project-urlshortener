const dns = require("dns");
const validateUrl = async (url) => {
  try {
    const address = await dns.promises.lookup(url);
    return address.address ;
  } catch (err) {
    // Manejar el error de consulta DNS si es necesario
    console.error(err); // Devolver false si hay un error
  }
};

module.exports = validateUrl;
