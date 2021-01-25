// @ts-ignore
import Iterator from '../util/Iterator.ts'
// @ts-ignore
import Consumer from '../util/function/Consumer.ts'
// @ts-ignore
import Spliterator from '../util/Spliterator.ts'
export default interface Iterable<T> {
    Iterator(): Iterator<T>;
    forEach(action: Consumer<T>): void;
    spliterator(): Spliterator<T>
}