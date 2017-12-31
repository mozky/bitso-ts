"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Balance = /** @class */ (function () {
    function Balance() {
    }
    Balance.prototype.deserialize = function (input) {
        this.mCurrency = input.currency;
        this.mTotal = input.total;
        this.mLocked = input.locked;
        this.mAvailable = input.available;
        return this;
    };
    return Balance;
}());
exports.default = Balance;
