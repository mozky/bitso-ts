import ISerializable from './ISerializable';
export default class BitsoBalance implements ISerializable<BitsoBalance> {
    private mBalances;
    deserialize(input: any): BitsoBalance;
}
