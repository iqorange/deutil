import Iterator from '../util/Iterator'
import Consumer from '../util/function/Consumer'
export default interface Iterable<T> {
    Iterator: Iterator<T>;
    forEach(action: Consumer<T>): void;
    // TODO
}