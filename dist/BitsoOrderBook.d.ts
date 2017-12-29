import ISerializable from './ISerializable';
export default class BitsoOrderBook implements ISerializable<BitsoOrderBook> {
    private mOrderDate;
    private mSequence;
    private mAsks;
    private mBids;
    deserialize(input: any): BitsoOrderBook;
}
