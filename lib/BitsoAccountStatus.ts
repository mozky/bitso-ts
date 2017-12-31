import ISerializable from './ISerializable'

export default class BitsoAccountStatus implements ISerializable<BitsoAccountStatus> {
    private clientId: string
    private status: string
    private dailyLimit: number
    private monthlyLimit: number
    private dailyRemaining: number
    private monthlyRemaining: number
    private cellphoneNumber: string
    private officialId: string
    private proofOfResidency: string
    private signedContract: string
    private originOfFunds: string
    private firstName: string
    private lastName: string
    private isCellphoneNumberVerified: boolean
    private email: string
    private referralCode: string

    public deserialize(input: any): BitsoAccountStatus {
        this.clientId = input.client_id
        this.status = input.status
        this.dailyLimit = input.daily_limit
        this.monthlyLimit = input.monthly_limit
        this.dailyRemaining = input.daily_remaining
        this.monthlyRemaining = input.monthly_remaining
        this.cellphoneNumber = input.cellphone_number_stored
        this.officialId = input.official_id
        this.proofOfResidency = input.proof_of_residency
        this.signedContract = input.signed_contract
        this.originOfFunds = input.origin_of_funds
        this.firstName = input.first_name
        this.lastName = input.last_name
        this.isCellphoneNumberVerified = input.cellphone_number === 'verified' ? true : false
        this.email = input.email_stored
        this.referralCode = input.referral_code
        return this
    }

}
