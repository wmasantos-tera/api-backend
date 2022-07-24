let zipCodeRepository = require("../repository/zipCodeRepository");

module.exports = {
    getZipCode,
    saveZipCode,
    updateZipCode,
    removeZipCode
}

async function getZipCode(req, res){
    let zipCode = req.query.zipCode;

    let result = await zipCodeRepository.get(zipCode);

    if(zipCode && !result)
        res.status(404);

    return res.json({
        status: 'executed',
        content: result
    });
}

async function saveZipCode(req, res){
    let zipCodePayload = req.body;

    let result = await zipCodeRepository.save(zipCodePayload);

    res.status(201);
    return res.json({
        status: 'saved',
        content: result
    });
}

async function updateZipCode(req, res){
    let zipCodePayload = req.body;
    let zipCodeParam = req.params.zipCodeParam;

    let result = await zipCodeRepository.update(zipCodeParam, zipCodePayload);

    if(!result)
        res.status(404);

    return res.json({
        status: result ? 'updated' : 'zipCode not found',
        content: result
    });
}

async function removeZipCode(req, res){
    let zipCodeParam = req.params.zipCodeParam;

    let resultSearch = await zipCodeRepository.get(zipCodeParam);

    if(!resultSearch) {
        res.status(404);
        return res.json({
            status: 'zipCode notfound'
        });
    }

    let resultRemove = await zipCodeRepository.remove(zipCodeParam);

    return res.json({
        status: 'deleted',
        content: resultRemove
    });
}
