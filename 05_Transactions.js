"use strict";
exports.__esModule = true;
//Created the Sub Module.
var express = require("express");
var transactions = express.Router();
transactions.get("/", function (req, res) {
    res.status(200).json({ 'Message': 'transcations soon' });
});
transactions.get('/pierre', function (req, res) {
    res.status(200).json({ 'Message': "Welcome to pieree for Nodejs" });
});
exports["default"] = transactions;
