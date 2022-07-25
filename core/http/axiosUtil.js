let axios = require("axios");

module.exports = {
    get
}

async function get(url) {
    return await axios.get(url);
}
