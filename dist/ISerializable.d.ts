export default interface ISerializable<T> {
    deserialize(input: any): T;
}
