"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BitsoAccountStatus = /** @class */ (function () {
    function BitsoAccountStatus() {
    }
    BitsoAccountStatus.prototype.deserialize = function (input) {
        this.clientId = input.client_id;
        this.status = input.status;
        this.dailyLimit = input.daily_limit;
        this.monthlyLimit = input.monthly_limit;
        this.dailyRemaining = input.daily_remaining;
        this.monthlyRemaining = input.monthly_remaining;
        this.cellphoneNumber = input.cellphone_number_stored;
        this.officialId = input.official_id;
        this.proofOfResidency = input.proof_of_residency;
        this.signedContract = input.signed_contract;
        this.originOfFunds = input.origin_of_funds;
        this.firstName = input.first_name;
        this.lastName = input.last_name;
        this.isCellphoneNumberVerified = input.cellphone_number === 'verified' ? true : false;
        this.email = input.email_stored;
        this.referralCode = input.referral_code;
        return this;
    };
    return BitsoAccountStatus;
}());
exports.default = BitsoAccountStatus;
