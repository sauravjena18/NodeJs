"use strict";
exports.__esModule = true;
var express = require("express");
var app = express();
app.get("/ashokit", function (req, res) {
    res.status(200).json({ 'Message': 'Welcome to Express using Typescript' });
    res.end();
});
app.listen(8080, function () {
    console.log('Server started Succesfully at 8080');
});
