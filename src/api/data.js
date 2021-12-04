const axios = require("axios");

const countryData = async (url) => {
  try {
    const { data: response } = await axios.get(url);
    return response;
  } catch (error) {
    return error;
  }
};

export default countryData;
