const PORT = 3000;
var express = require("express");
var app = express();

app.use(express.static("./"))

app.listen(3000, () => {
    console.log("stated server");
})