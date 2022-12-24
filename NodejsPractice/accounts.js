"use strict";
exports.__esModule = true;
var express = require("express");
var accounts = express.Router();
accounts.get('/', function (req, res) {
    res.status(200).json({ 'message': 'welcome to accounts module' });
    res.end();
});
accounts.post('/accounts', function (req, res) {
    res.status(200).json({ 'message': 'Accounts will be opened soon...' });
});
exports["default"] = accounts;
