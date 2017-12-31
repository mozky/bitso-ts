export default class Transaction {
    private date: string
    private tid: string
    private price: number
    private amount: number
    private side: string
    private book: string

    public deserialize(input: any): Transaction {
        this.date = input.created_at
        this.tid = input.tid
        this.price = input.price
        this.amount = input.amount
        this.side = input.maker_side
        this.book = input.book
        return this
    }

}
