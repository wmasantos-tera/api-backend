const mongoose = require("mongoose");
const addressInfo = require("../../src/model/zipCodeModel");

module.exports = async () => {
    await mongoose.connect('mongodb://localhost/api-backend');
    console.log("Mongo connected with success...");

    //Carregando Modelos
    //Nome do modelo no mongoose, o modelo propriamente dito, nome do modelo na collection do mongo
    mongoose.model("addressInfo", addressInfo, "addressInfo");
}
