let express = require("express");
let masterRouter = require("./src/route/index");
let mongoDB = require("./core/mongoConnection");

const init = async () => {

    let app = express();

    app.use(express.json());

    app.use("/api", masterRouter);

    app.get("/api/healthCheck", (req, res) => {
        return res.json({
            status: 'OK',
            when: new Date()
        });
    });

    await mongoDB();

    app.listen(3000, () => {
        console.log("Api start up on port", 3000);
    });
};

module.exports = init;
