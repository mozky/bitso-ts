"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var rm = require("typed-rest-client/RestClient");
var BitsoOrderBook_1 = require("./BitsoOrderBook");
var BitsoTicker_1 = require("./BitsoTicker");
var Book_1 = require("./Book");
var BookInfo_1 = require("./BookInfo");
var Bitso = /** @class */ (function () {
    function Bitso(key, secret, log, production) {
        this.BITSO_BASE_URL_PRODUCTION = 'https://api.bitso.com';
        this.BITSO_BASE_URL_DEVELOPMENT = 'https://dev.bitso.com';
        this.key = key;
        this.secret = secret;
        this.log = log ? log : true;
        this.baseUrl = production ? this.BITSO_BASE_URL_PRODUCTION : this.BITSO_BASE_URL_DEVELOPMENT;
    }
    // Public Functions
    Bitso.prototype.getAvailableBooks = function () {
        return __awaiter(this, void 0, void 0, function () {
            var rest, res, books;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        rest = new rm.RestClient('nodejs', this.BITSO_BASE_URL_PRODUCTION);
                        return [4 /*yield*/, rest.get('/v3/available_books/')];
                    case 1:
                        res = _a.sent();
                        books = [];
                        // TODO: I dont like this method, the upper function should
                        // deserialize the payload also, still need to find a way of doing this
                        if (res.statusCode === 200 && res.result && res.result.success) {
                            res.result.payload.map(function (book) {
                                books.push(new BookInfo_1.default().deserialize(book));
                            });
                        }
                        return [2 /*return*/, books];
                }
            });
        });
    };
    Bitso.prototype.getTickers = function () {
        return __awaiter(this, void 0, void 0, function () {
            var rest, res, tickers;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        rest = new rm.RestClient('nodejs', this.BITSO_BASE_URL_PRODUCTION);
                        return [4 /*yield*/, rest.get('/v3/ticker')];
                    case 1:
                        res = _a.sent();
                        tickers = [];
                        if (res.statusCode === 200 && res.result && res.result.success) {
                            res.result.payload.map(function (ticker) {
                                tickers.push(new BitsoTicker_1.default().deserialize(ticker));
                            });
                        }
                        return [2 /*return*/, tickers];
                }
            });
        });
    };
    Bitso.prototype.getTicker = function (book) {
        return __awaiter(this, void 0, void 0, function () {
            var rest, bookie, res, ticker;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        rest = new rm.RestClient('nodejs', this.BITSO_BASE_URL_PRODUCTION);
                        bookie = new Book_1.default(book);
                        return [4 /*yield*/, rest.get("/v3/ticker?book=" + new Book_1.default(book).getTicker())];
                    case 1:
                        res = _a.sent();
                        ticker = new BitsoTicker_1.default();
                        if (res.statusCode === 200 && res.result && res.result.success) {
                            ticker.deserialize(res.result.payload);
                        }
                        return [2 /*return*/, ticker];
                }
            });
        });
    };
    Bitso.prototype.getOrderBook = function (book, aggregate) {
        return __awaiter(this, void 0, void 0, function () {
            var rest, bookie, res, orderBook;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        rest = new rm.RestClient('nodejs', this.BITSO_BASE_URL_PRODUCTION);
                        bookie = new Book_1.default(book);
                        return [4 /*yield*/, rest.get("/v3/order_book?book=" + new Book_1.default(book).getTicker() + "&aggregate=" + (aggregate ? 'true' : 'false'))];
                    case 1:
                        res = _a.sent();
                        orderBook = new BitsoOrderBook_1.default();
                        if (res.statusCode === 200 && res.result && res.result.success) {
                            orderBook.deserialize(res.result.payload);
                        }
                        return [2 /*return*/, orderBook];
                }
            });
        });
    };
    return Bitso;
}());
exports.default = Bitso;
