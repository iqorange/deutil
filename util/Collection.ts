import Iterable from '../lang/Iterable'
import Iterator from './Iterator'

export default interface Collection<E> extends Iterable<E> {
    size(): number;
    isEmpty(): boolean;
    contains(value: E): boolean;
    iterator(): Iterator<E>;
    toArray(): E[];
    toArray(a: E[]): E[];
    add(e: E): boolean;
    remove(e: E): boolean;
    containsAll(c: Collection<E>): boolean;
    addAll(c: Collection<E>): boolean;
    removeAll(c: Collection<E>): boolean;
    retainAll(c: Collection<E>): boolean;
    clear(): void;
    equals(e: E): boolean;
    hashCode(): number;
}
