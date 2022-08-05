"use strict";
exports.__esModule = true;
var express = require("express");
var accounts = express.Router();
accounts.get('/', function (req, res) {
    res.status(200).json({ 'Message': 'Welcome to Accounts Module.' });
});
accounts.post('/', function (req, res) {
    res.status(200).json({ 'Message': 'Account will add soon' });
});
exports["default"] = accounts;
