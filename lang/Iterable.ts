import Iterator from '../util/Iterator.ts'
import Consumer from '../util/function/Consumer.ts'
import Spliterator from '../util/Spliterator.ts'
export default interface Iterable<T> {
    Iterator(): Iterator<T>;
    forEach(action: Consumer<T>): void;
    spliterator(): Spliterator<T>
}