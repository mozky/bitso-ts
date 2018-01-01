import ISerializable from './ISerializable'

export default class BitsoOperation implements ISerializable<BitsoOperation> {
    private entryId: string
    private operationDescription: string
    private operationDate: string
    private afterOperationBalances: any
    private details: any

    public deserialize(input: any): BitsoOperation {
        this.entryId = input.eid
        this.operationDescription = input.operation
        this.operationDate = input.created_at
        this.afterOperationBalances = input.balance_updates
        this.details = input.details
        return this
    }

}
