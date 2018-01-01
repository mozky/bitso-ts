import { empty, set } from '@typed/hashmap'
import Balance from './Balance'
import ISerializable from './ISerializable'

export default class BitsoFee implements ISerializable<BitsoFee> {
    private mTradeFees: any
    private mWithdrawalFees: any

    public deserialize(input: any): BitsoFee {
        this.mTradeFees = empty<string, IFee>()
        input.fees.map((fee: any) => {
            this.mTradeFees = set(fee.book, {
                mBook: fee.book,
                mFeeDecimal: fee.fee_decimal,
                mTradeFees: fee.fee_percent,
            }, this.mTradeFees)
        })

        this.mWithdrawalFees = empty<string, string>()

        for (const key in input.withdrawal_fees) {
            if (!input.withdrawal_fees.hasOwnProperty(key)) { continue }

            const fee = input.withdrawal_fees[key]
            this.mWithdrawalFees = set(key, fee, this.mWithdrawalFees)
        }

        return this
    }

}

interface IFee {
    mBook: string
    mFeeDecimal: number
    mFeePercent: number
}
