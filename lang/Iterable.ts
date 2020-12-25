import Iterator from '../util/Iterator'
import Consumer from '../util/function/Consumer'
import Spliterator from '../util/Spliterator'
export default interface Iterable<T> {
    Iterator(): Iterator<T>;
    forEach(action: Consumer<T>): void;
    spliterator(): Spliterator<T>
}