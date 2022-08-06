"use strict";
//Read the get Parameters using express
exports.__esModule = true;
var express = require("express");
var app = express();
//authorization
var auth = function (req, res, next) {
    var allHeaders = req.headers;
    if (allHeaders.token == "admin") {
        next();
    }
    else {
        res.status(401).json({ auth: 'fail' });
    }
};
//Default request
app.get('/', function (req, res) {
    res.sendFile('C:/Users/Saurav.Jena.DESKTOP-EEGMJ2V/Desktop/NodeJs/NodeJs/index.html');
});
app.get('/sample/:uname/:pwd', function (req, res) {
    if (req.params.uname = "saurav" && req.params.pwd == "saurav@123") {
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
    console.log('Server Started at 8080');
});
