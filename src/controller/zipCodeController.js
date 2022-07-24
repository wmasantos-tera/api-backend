let zipCodeRepository = require("../repository/zipCodeRepository");
let axiosUtil = require("../../core/http/axiosUtil");

module.exports = {
    getZipCode,
    saveZipCode,
    updateZipCode,
    removeZipCode
}

async function getZipCode(req, res){
    let zipCode = req.query.q;

    let result = await zipCodeRepository.get(zipCode);

    if(zipCode && !result) {
        let axiosResult = await axiosUtil.get(`https://viacep.com.br/ws/${zipCode.replace("-", "")}/json`);
        if (axiosResult.data.erro)
            res.status(404);
        else {
            let shortcut = axiosResult.data;
            let payload = {
                zipCode: shortcut.cep,
                address: shortcut.logradouro,
                complement: shortcut.complemento,
                neighborhood: shortcut.bairro,
                locality: shortcut.localidade,
                state: shortcut.uf
            }

            let result = await zipCodeRepository.save(payload);

            res.status(201);
            return res.json({
                status: 'zipCode found and added by viaCep API',
                content: result
            });
        }
    }

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
