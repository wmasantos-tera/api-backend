const mongoose = require("mongoose");

module.exports = {
    get,
    save,
    update,
    remove,
}

async function get(zipCode){
    const zipCodeModel = mongoose.model('addressInfo');

    if (zipCode)
        return zipCodeModel.findOne({zipCode: zipCode});
    else
        return zipCodeModel.find({});
}

async function save(payload){
    const zipCodeModel = mongoose.model('addressInfo');
    return new zipCodeModel(payload).save();
}

async function update(zipCodeParam, payload){
    const zipCodeModel = mongoose.model('addressInfo');
    return zipCodeModel.findOneAndUpdate({zipCode: zipCodeParam}, payload);
}

async function remove(zipCodeParam){
    const zipCodeModel = mongoose.model('addressInfo');
    return zipCodeModel.deleteMany({zipCode: zipCodeParam});
}
