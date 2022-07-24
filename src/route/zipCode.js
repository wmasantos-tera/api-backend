let express = require("express");
let zipCodeController = require("../controller/zipCodeController");

let route = express.Router();

route.get("/zipcode", zipCodeController.getZipCode);
route.post("/zipcode", zipCodeController.saveZipCode);
route.put("/zipcode/:zipCodeParam", zipCodeController.updateZipCode);
route.delete("/zipcode/:zipCodeParam", zipCodeController.removeZipCode);

module.exports = route;
