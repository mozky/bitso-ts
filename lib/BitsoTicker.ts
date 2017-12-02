import ISerializable from './ISerializable'

export default class BitsoTicker implements ISerializable<BitsoTicker> {
    private mLast: string
    private mHigh: string
    private mLow: string
    private mVwap: string
    private mVolume: string
    private mBid: string
    private mAsk: string
    private createdAt: string
    private mBook: string

    public deserialize(input: any): BitsoTicker {
        this.mBook = input.book
        this.mVolume = input.volume
        this.mHigh = input.high
        this.mLast = input.last
        this.mLow = input.low
        this.mVwap = input.vwap
        this.mAsk = input.ask
        this.mBid = input.bid
        this.createdAt = input.created_at
        return this
    }

    public getBook(): string {
        return this.mBook
    }

    public setBook(mBook: string): void {
        this.mBook = mBook
    }

    public getVolume(): string {
        return this.mVolume
    }

    public setVolume(mVolume: string): void {
        this.mVolume = mVolume
    }

    public getHigh(): string {
        return this.mHigh
    }

    public setHigh(mHigh: string): void {
        this.mHigh = mHigh
    }

    public getLast(): string {
        return this.mLast
    }

    public setLast(mLast: string): void {
        this.mLast = mLast
    }

    public getLow(): string {
        return this.mLow
    }

    public setLow(mLow: string): void {
        this.mLow = mLow
    }

    public getVwap(): string {
        return this.mVwap
    }

    public setVwap(mVwap: string): void {
        this.mVwap = mVwap
    }

    public getAsk(): string {
        return this.mAsk
    }

    public setAsk(mAsk: string): void {
        this.mAsk = mAsk
    }

    public getBid(): string {
        return this.mBid
    }

    public setBid(mBid: string): void {
        this.mLast = mBid
    }

    public getCreatedAt(): string {
        return this.createdAt
    }

    public setCreatedAt(createdAt: string): void {
        this.createdAt = createdAt
    }
}
