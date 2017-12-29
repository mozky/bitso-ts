"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BitsoOrderBook = /** @class */ (function () {
    function BitsoOrderBook() {
    }
    BitsoOrderBook.prototype.deserialize = function (input) {
        this.mOrderDate = input.updated_at;
        this.mSequence = input.sequence;
        this.mAsks = input.asks;
        this.mBids = input.bids;
        return this;
    };
    return BitsoOrderBook;
}());
exports.default = BitsoOrderBook;
