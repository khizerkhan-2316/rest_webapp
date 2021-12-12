const axios = require('axios');

const getRequest = async (url) => {
  try {
    const { data: response } = await axios.get(url);
    return response;
  } catch (error) {
    return error;
  }
};

export default getRequest;
