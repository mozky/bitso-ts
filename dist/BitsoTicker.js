"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BitsoTicker = /** @class */ (function () {
    function BitsoTicker() {
    }
    BitsoTicker.prototype.deserialize = function (input) {
        this.mBook = input.book;
        this.mVolume = input.volume;
        this.mHigh = input.high;
        this.mLast = input.last;
        this.mLow = input.low;
        this.mVwap = input.vwap;
        this.mAsk = input.ask;
        this.mBid = input.bid;
        this.createdAt = input.created_at;
        return this;
    };
    BitsoTicker.prototype.getBook = function () {
        return this.mBook;
    };
    BitsoTicker.prototype.setBook = function (mBook) {
        this.mBook = mBook;
    };
    BitsoTicker.prototype.getVolume = function () {
        return this.mVolume;
    };
    BitsoTicker.prototype.setVolume = function (mVolume) {
        this.mVolume = mVolume;
    };
    BitsoTicker.prototype.getHigh = function () {
        return this.mHigh;
    };
    BitsoTicker.prototype.setHigh = function (mHigh) {
        this.mHigh = mHigh;
    };
    BitsoTicker.prototype.getLast = function () {
        return this.mLast;
    };
    BitsoTicker.prototype.setLast = function (mLast) {
        this.mLast = mLast;
    };
    BitsoTicker.prototype.getLow = function () {
        return this.mLow;
    };
    BitsoTicker.prototype.setLow = function (mLow) {
        this.mLow = mLow;
    };
    BitsoTicker.prototype.getVwap = function () {
        return this.mVwap;
    };
    BitsoTicker.prototype.setVwap = function (mVwap) {
        this.mVwap = mVwap;
    };
    BitsoTicker.prototype.getAsk = function () {
        return this.mAsk;
    };
    BitsoTicker.prototype.setAsk = function (mAsk) {
        this.mAsk = mAsk;
    };
    BitsoTicker.prototype.getBid = function () {
        return this.mBid;
    };
    BitsoTicker.prototype.setBid = function (mBid) {
        this.mLast = mBid;
    };
    BitsoTicker.prototype.getCreatedAt = function () {
        return this.createdAt;
    };
    BitsoTicker.prototype.setCreatedAt = function (createdAt) {
        this.createdAt = createdAt;
    };
    return BitsoTicker;
}());
exports.default = BitsoTicker;
