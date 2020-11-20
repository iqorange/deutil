export default interface Consumer<T> {
    accept(t: T): void;
    forEach(after: Consumer<T>): void;
}