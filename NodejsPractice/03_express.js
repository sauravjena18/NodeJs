"use strict";
//import expess module
exports.__esModule = true;
var express = require("express");
var app = express();
app.get('/', function (req, res) {
    res.status(200).json({ 'message': 'Default get Request' });
    res.end();
});
app.listen(8080, function () {
    console.log('Server started successfully... on 8080 port');
});
