const axios = require("axios").default;

module.exports = async () => {
  const result = await axios.get("https://aws.random.cat/meow");
  return result.data.file;
};
