import ISeriarizable from './ISerializable'
import ISerializable from './ISerializable'

export default class BitsoOrderBook implements ISerializable<BitsoOrderBook> {
    private mOrderDate: string
    private mSequence: number

    public deserialize(input: any): BitsoOrderBook {
        return this
    }
}
