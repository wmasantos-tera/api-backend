const init = require("./server.js");

init()
.catch((error) => {
    console.log("Error on startup the API", error);
})
