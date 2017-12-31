import ISerializable from './ISerializable';
export default class BitsoTransactions implements ISerializable<BitsoTransactions> {
    private mTransactionsList;
    deserialize(input: any): BitsoTransactions;
}
