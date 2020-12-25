import Collection from "./Collection"
import Iterator from "./Iterator"
import Spliterator from "./Spliterator";

export default interface Set<E> extends Collection<E>{
    size(): number;
    isEmpty(): boolean;
    contains(o: E): boolean;
    iterator(): Iterator<E>;
    toArray(): Array<E>;
    toArray(a: Array<E>): Array<E>;
    add(e: E): boolean;
    remove(o: E): boolean;
    containsAll(c: Collection<E>): boolean;
    addAll(c: Collection<E>): boolean;
    retainAll(c: Collection<E>): boolean;
    removeAll(c: Collection<E>): boolean;
    clear(): void;
    equals(o: E): boolean;
    hashCode(): number;
    spliterator(): Spliterator<E>;
    of(): Set<E>;
    of(e1: E): Set<E>;
    of(e1: E, e2: E): Set<E>;
    of(e1: E, e2: E, e3: E): Set<E>;
    of(e1: E, e2: E, e3: E, e4: E): Set<E>;
    of(e1: E, e2: E, e3: E, e4: E, e5: E): Set<E>;
    of(e1: E, e2: E, e3: E, e4: E, e5: E, e6: E): Set<E>;
    of(e1: E, e2: E, e3: E, e4: E, e5: E, e6: E, e7: E): Set<E>;
    of(e1: E, e2: E, e3: E, e4: E, e5: E, e6: E, e7: E, e8: E): Set<E>;
    of(e1: E, e2: E, e3: E, e4: E, e5: E, e6: E, e7: E, e8: E, e9: E): Set<E>;
    of(e1: E, e2: E, e3: E, e4: E, e5: E, e6: E, e7: E, e8: E, e9: E, e10: E): Set<E>;
    of(elements: Array<E>): Set<E>;
    copyOf(coll: Collection<E>): Set<E>;
}