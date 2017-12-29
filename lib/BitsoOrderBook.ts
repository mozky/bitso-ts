import ISerializable from './ISerializable'

export default class BitsoOrderBook implements ISerializable<BitsoOrderBook> {
    private mOrderDate: string
    private mSequence: number
    private mAsks: any
    private mBids: any

    public deserialize(input: any): BitsoOrderBook {
        this.mOrderDate = input.updated_at
        this.mSequence = input.sequence
        this.mAsks = input.asks
        this.mBids = input.bids
        return this
    }

}
