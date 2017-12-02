import ISeriarizable from './ISerializable';
export default class BookInfo implements ISeriarizable<BookInfo> {
    private mBook;
    private mMinAmount;
    private mMaxAmount;
    private mMinPrice;
    private mMaxPrice;
    private mMinValue;
    private mMaxValue;
    deserialize(input: any): BookInfo;
    getBook(): string;
    setBook(mBook: string): void;
    getMinAmount(): string;
    setMinAmount(mMinAmount: string): void;
    gemMaxAmount(): string;
    setMaxAmount(mMaxAmount: string): void;
    getMinPrice(): string;
    setMinPrice(mMinPrice: string): void;
    getMaxPrice(): string;
    setMaxPrice(mMaxPrice: string): void;
    getMinValue(): string;
    setMinValue(mMinValue: string): void;
    getMaxValue(): string;
    setMaxValue(mMaxValue: string): void;
}
