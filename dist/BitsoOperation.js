"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BitsoOperation = /** @class */ (function () {
    function BitsoOperation() {
    }
    BitsoOperation.prototype.deserialize = function (input) {
        this.entryId = input.eid;
        this.operationDescription = input.operation;
        this.operationDate = input.created_at;
        this.afterOperationBalances = input.balance_updates;
        this.details = input.details;
        return this;
    };
    return BitsoOperation;
}());
exports.default = BitsoOperation;
