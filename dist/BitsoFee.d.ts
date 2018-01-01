import ISerializable from './ISerializable';
export default class BitsoFee implements ISerializable<BitsoFee> {
    private mTradeFees;
    private mWithdrawalFees;
    deserialize(input: any): BitsoFee;
}
