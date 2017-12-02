import ISeriarizable from './ISerializable'

export default class BookInfo implements ISeriarizable<BookInfo> {
    private mBook: string
    private mMinAmount: string
    private mMaxAmount: string
    private mMinPrice: string
    private mMaxPrice: string
    private mMinValue: string
    private mMaxValue: string

    public deserialize(input: any) {
        this.mBook = input.book
        this.mMinAmount = input.minimum_amount
        this.mMaxAmount = input.maximum_amount
        this.mMinPrice = input.minimum_price
        this.mMaxPrice = input.maximum_price
        this.mMinValue = input.minimum_value
        this.mMaxValue = input.maximum_value
        return this
    }

    public getBook(): string {
        return this.mBook
    }

    public setBook(mBook: string): void {
        this.mBook = mBook
    }

    public getMinAmount(): string {
        return this.mMinAmount
    }

    public setMinAmount(mMinAmount: string): void {
        this.mMinAmount = mMinAmount
    }

    public gemMaxAmount(): string {
        return this.mMaxAmount
    }

    public setMaxAmount(mMaxAmount: string): void {
        this.mMaxAmount = mMaxAmount
    }

    public getMinPrice(): string {
        return this.mMinPrice
    }

    public setMinPrice(mMinPrice: string): void {
        this.mMinPrice = mMinPrice
    }

    public getMaxPrice(): string {
        return this.mMaxPrice
    }

    public setMaxPrice(mMaxPrice: string) {
        this.mMaxPrice = mMaxPrice
    }

    public getMinValue(): string {
        return this.mMinValue
    }

    public setMinValue(mMinValue: string) {
        this.mMinValue = mMinValue
    }

    public getMaxValue(): string {
        return this.mMaxValue
    }

    public setMaxValue(mMaxValue: string) {
        this.mMaxValue = mMaxValue
    }
}
