const express = require("express");
const service = require("./service.js");

const app = express();
const port = 3000;




app.get("/", (req, res) => {
    service.getAllList(req, res);
});

app.listen(port, () => {
    console.log("Server Running...");
});

