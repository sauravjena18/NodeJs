"use strict";
exports.__esModule = true;
var express = require("express");
var app = express();
app.get('/', function (req, res) {
    res.sendFile('C:/Users/Saurav.Jena.DESKTOP-EEGMJ2V/Desktop/NodeJs/NodeJs/loginFormUsingExpress/index.html');
});
app.get('/login', function (req, res) {
    if (req.query.uname == "saurav" && req.query.pwd == "saurav@123") {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<h1>Login Successful....</h1>');
        res.end();
    }
    else {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<h2>You have entered wrong Credentials</h2>');
        res.end();
    }
});
app.listen(8080, function () {
    console.log('Server started at 8080 port');
});
