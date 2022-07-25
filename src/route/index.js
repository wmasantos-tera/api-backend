let express = require("express");
let route = express.Router();
let zipCode = require("./zipCode");

route.use("/zipcode", zipCode);

module.exports = route;
