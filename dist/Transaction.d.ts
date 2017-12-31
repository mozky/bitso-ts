export default class Transaction {
    private date;
    private tid;
    private price;
    private amount;
    private side;
    private book;
    deserialize(input: any): Transaction;
}
