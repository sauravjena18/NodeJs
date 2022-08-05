"use strict";
exports.__esModule = true;
var express = require("express");
var _05_Transactions_1 = require("./05_Transactions");
var _06_accounts_1 = require("./06_accounts");
var app = express();
app.use('/module1', _05_Transactions_1["default"]);
app.use('/module2', _06_accounts_1["default"]);
app.listen(8080, function () {
    console.log('Server Started at 8080 Port');
});
