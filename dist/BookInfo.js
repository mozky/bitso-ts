"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BookInfo = /** @class */ (function () {
    function BookInfo() {
    }
    BookInfo.prototype.deserialize = function (input) {
        this.mBook = input.book;
        this.mMinAmount = input.minimum_amount;
        this.mMaxAmount = input.maximum_amount;
        this.mMinPrice = input.minimum_price;
        this.mMaxPrice = input.maximum_price;
        this.mMinValue = input.minimum_value;
        this.mMaxValue = input.maximum_value;
        return this;
    };
    BookInfo.prototype.getBook = function () {
        return this.mBook;
    };
    BookInfo.prototype.setBook = function (mBook) {
        this.mBook = mBook;
    };
    BookInfo.prototype.getMinAmount = function () {
        return this.mMinAmount;
    };
    BookInfo.prototype.setMinAmount = function (mMinAmount) {
        this.mMinAmount = mMinAmount;
    };
    BookInfo.prototype.gemMaxAmount = function () {
        return this.mMaxAmount;
    };
    BookInfo.prototype.setMaxAmount = function (mMaxAmount) {
        this.mMaxAmount = mMaxAmount;
    };
    BookInfo.prototype.getMinPrice = function () {
        return this.mMinPrice;
    };
    BookInfo.prototype.setMinPrice = function (mMinPrice) {
        this.mMinPrice = mMinPrice;
    };
    BookInfo.prototype.getMaxPrice = function () {
        return this.mMaxPrice;
    };
    BookInfo.prototype.setMaxPrice = function (mMaxPrice) {
        this.mMaxPrice = mMaxPrice;
    };
    BookInfo.prototype.getMinValue = function () {
        return this.mMinValue;
    };
    BookInfo.prototype.setMinValue = function (mMinValue) {
        this.mMinValue = mMinValue;
    };
    BookInfo.prototype.getMaxValue = function () {
        return this.mMaxValue;
    };
    BookInfo.prototype.setMaxValue = function (mMaxValue) {
        this.mMaxValue = mMaxValue;
    };
    return BookInfo;
}());
exports.default = BookInfo;
