import Iterator from './Iterator'
import Consumer from './function/Consumer'
export default interface Iterable<T> {
    Iterator: Iterator<T>;
    forEach(action: Consumer<T>): void;

}