"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var crypto = require("crypto");
var PersonalAccessTokenCredentialHandler = /** @class */ (function () {
    function PersonalAccessTokenCredentialHandler(key, secret, httpMethod, requestPath, jsonPayload) {
        if (jsonPayload === void 0) { jsonPayload = ''; }
        this.key = key;
        this.secret = secret;
        this.nonce = new Date().getTime();
        this.httpMethod = httpMethod;
        this.requestPath = requestPath;
        this.jsonPayload = jsonPayload;
        this.token = this.createAuthorizationHeader();
    }
    PersonalAccessTokenCredentialHandler.prototype.prepareRequest = function (options) {
        options.headers['Authorization'] = this.token;
    };
    // This handler cannot handle 401
    PersonalAccessTokenCredentialHandler.prototype.canHandleAuthentication = function (res) {
        return false;
    };
    PersonalAccessTokenCredentialHandler.prototype.handleAuthentication = function (httpClient, protocol, options, objs, finalCallback) {
    };
    PersonalAccessTokenCredentialHandler.prototype.createAuthorizationHeader = function () {
        var data = this.nonce + this.httpMethod + this.requestPath + this.jsonPayload;
        var signature = crypto.createHmac('sha256', this.secret).update(data).digest('hex');
        return "Bitso " + this.key + ":" + this.nonce + ":" + signature;
    };
    return PersonalAccessTokenCredentialHandler;
}());
exports.default = PersonalAccessTokenCredentialHandler;
