let express = require("express");
let zipCodeController = require("../controller/zipCodeController");

let route = express.Router();

route.get("", zipCodeController.getZipCode);
route.post("", zipCodeController.saveZipCode);
route.put("/:zipCodeParam", zipCodeController.updateZipCode);
route.delete("/:zipCodeParam", zipCodeController.removeZipCode);

module.exports = route;
