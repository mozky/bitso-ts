"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var hashmap_1 = require("@typed/hashmap");
var BitsoFee = /** @class */ (function () {
    function BitsoFee() {
    }
    BitsoFee.prototype.deserialize = function (input) {
        var _this = this;
        this.mTradeFees = hashmap_1.empty();
        input.fees.map(function (fee) {
            _this.mTradeFees = hashmap_1.set(fee.book, {
                mBook: fee.book,
                mFeeDecimal: fee.fee_decimal,
                mTradeFees: fee.fee_percent,
            }, _this.mTradeFees);
        });
        this.mWithdrawalFees = hashmap_1.empty();
        for (var key in input.withdrawal_fees) {
            if (!input.withdrawal_fees.hasOwnProperty(key)) {
                continue;
            }
            var fee = input.withdrawal_fees[key];
            this.mWithdrawalFees = hashmap_1.set(key, fee, this.mWithdrawalFees);
        }
        return this;
    };
    return BitsoFee;
}());
exports.default = BitsoFee;
