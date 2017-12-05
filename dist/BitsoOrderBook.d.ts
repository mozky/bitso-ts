import ISerializable from './ISerializable';
export default class BitsoOrderBook implements ISerializable<BitsoOrderBook> {
    private mOrderDate;
    private mSequence;
    deserialize(input: any): BitsoOrderBook;
}
