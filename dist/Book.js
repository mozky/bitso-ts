"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Book = /** @class */ (function () {
    function Book(ticker) {
        if (ticker in Ticker) {
            for (var t in Ticker) {
                if (ticker === t) {
                    this.ticker = Ticker[t];
                }
            }
        }
        else {
            this.ticker = Ticker.BTC_MXN;
        }
    }
    Book.prototype.getTicker = function () {
        return this.ticker;
    };
    return Book;
}());
exports.default = Book;
var Ticker;
(function (Ticker) {
    Ticker["BTC_MXN"] = "btc_mxn";
    Ticker["ETH_MXN"] = "eth_mxn";
    Ticker["XRP_BTC"] = "xrp_btc";
    Ticker["XRP_MXN"] = "xrp_mxn";
    Ticker["ETH_BTC"] = "eth_btc";
    Ticker["BCH_BTC"] = "bch_btc";
    Ticker["LTC_BTC"] = "ltc_btc";
    Ticker["LTC_MXN"] = "ltc_mxn";
})(Ticker || (Ticker = {}));
