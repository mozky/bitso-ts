import Balance from './Balance'
import ISerializable from './ISerializable'

export default class BitsoBalance implements ISerializable<BitsoBalance> {
    private mBalances: Balance[]

    public deserialize(input: any): BitsoBalance {
        this.mBalances = input.balances.map((balance: any) => {
            return new Balance().deserialize(balance)
        })
        return this
    }

}
