let express = require("express");
let route = express.Router();
let zipCode = require("./zipCode");

route.use("/", zipCode);

module.exports = route;
