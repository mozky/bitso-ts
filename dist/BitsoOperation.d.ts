import ISerializable from './ISerializable';
export default class BitsoOperation implements ISerializable<BitsoOperation> {
    private entryId;
    private operationDescription;
    private operationDate;
    private afterOperationBalances;
    private details;
    deserialize(input: any): BitsoOperation;
}
