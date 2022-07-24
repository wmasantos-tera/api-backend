const mongoose = require("mongoose");

const addressInfo = mongoose.Schema({
    zipCode: {type: String},
    address: {type: String},
    complement: {type: String},
    neighborhood: {type: String},
    locality: {type: String},
    state: {type: String}
});

module.exports = addressInfo;
