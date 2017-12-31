"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Balance_1 = require("./Balance");
var BitsoBalance = /** @class */ (function () {
    function BitsoBalance() {
    }
    BitsoBalance.prototype.deserialize = function (input) {
        this.mBalances = input.balances.map(function (balance) {
            return new Balance_1.default().deserialize(balance);
        });
        return this;
    };
    return BitsoBalance;
}());
exports.default = BitsoBalance;
