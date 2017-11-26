"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Bitso = /** @class */ (function () {
    function Bitso(key, secret, log, production) {
        this.BITSO_BASE_URL_PRODUCTION = "https://api.bitso.com";
        this.BITSO_BASE_URL_DEVELOPMENT = "https://dev.bitso.com";
        this.key = key;
        this.secret = secret;
        this.log = log ? log : true;
        this.baseUrl = production ? this.BITSO_BASE_URL_PRODUCTION : this.BITSO_BASE_URL_DEVELOPMENT;
    }
    return Bitso;
}());
exports.Bitso = Bitso;
