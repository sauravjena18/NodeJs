"use strict";
exports.__esModule = true;
var express = require("express");
// Steps to create the sub modules 
var transactions = express.Router();
transactions.get('/', function (req, res) {
    res.status(200).json({ 'message': 'Welcome to transactions module' });
    res.end();
});
transactions.get('/transactions', function (req, res) {
    res.status(200).json({ 'message': 'Please wait while your transactions is on progress....' });
    res.end();
});
exports["default"] = transactions;
