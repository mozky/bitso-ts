"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Transaction_1 = require("./Transaction");
var BitsoTransactions = /** @class */ (function () {
    function BitsoTransactions() {
    }
    BitsoTransactions.prototype.deserialize = function (input) {
        this.mTransactionsList = input.map(function (transaction) {
            return new Transaction_1.default().deserialize(transaction);
        });
        return this;
    };
    return BitsoTransactions;
}());
exports.default = BitsoTransactions;
