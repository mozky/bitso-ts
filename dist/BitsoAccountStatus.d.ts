import ISerializable from './ISerializable';
export default class BitsoAccountStatus implements ISerializable<BitsoAccountStatus> {
    private clientId;
    private status;
    private dailyLimit;
    private monthlyLimit;
    private dailyRemaining;
    private monthlyRemaining;
    private cellphoneNumber;
    private officialId;
    private proofOfResidency;
    private signedContract;
    private originOfFunds;
    private firstName;
    private lastName;
    private isCellphoneNumberVerified;
    private email;
    private referralCode;
    deserialize(input: any): BitsoAccountStatus;
}
