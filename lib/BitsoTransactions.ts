import ISerializable from './ISerializable'
import Transaction from './Transaction'

export default class BitsoTransactions implements ISerializable<BitsoTransactions> {
    private mTransactionsList: Transaction[]

    public deserialize(input: any): BitsoTransactions {
        this.mTransactionsList = input.map((transaction: any) => {
            return new Transaction().deserialize(transaction)
        })
        return this
    }

}
