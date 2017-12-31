"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Transaction = /** @class */ (function () {
    function Transaction() {
    }
    Transaction.prototype.deserialize = function (input) {
        this.date = input.created_at;
        this.tid = input.tid;
        this.price = input.price;
        this.amount = input.amount;
        this.side = input.maker_side;
        this.book = input.book;
        return this;
    };
    return Transaction;
}());
exports.default = Transaction;
