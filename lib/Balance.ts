export default class Balance {
    private mCurrency: string
    private mTotal: number
    private mLocked: number
    private mAvailable: number

    public deserialize(input: any): Balance {
        this.mCurrency = input.currency
        this.mTotal = input.total
        this.mLocked = input.locked
        this.mAvailable = input.available
        return this
    }

}
