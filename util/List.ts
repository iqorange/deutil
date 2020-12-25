import Collection from "./Collection"
import Iterator from "./Iterator"
import Comparator from "./Comparator"
import ListIterator from "./ListIterator";
import Spliterator from "./Spliterator";

export default interface List<E> extends Collection<E> {
    size(): number;
    isEmpty(): boolean;
    contains(o: E): boolean;
    iterator(): Iterator<E>;
    toArray(): Array<E>;
    add(o: E): boolean;
    remove(o: E): boolean;
    containsAll(c: Collection<E>): boolean;
    addAll(c: Collection<E>): boolean;
    addAll(index: number, c: Collection<E>): boolean;
    removeAll(c: Collection<E>): boolean;
    retainAll(c: Collection<E>): boolean;
    replaceAll(c: Collection<E>): boolean;
    sort(c: Comparator<E>): void;
    sort(fn: Function): void;
    clear(): void;
    equals(o: E): boolean;
    hashCode(): number;
    get(index: number): E;
    set(index: number,element: E): E;
    add(index: number, element: E): void;
    remove(index: number): E;
    indexOf(o: E): number;
    lastIndexOf(o: E): number;
    listIterator(): ListIterator<E>;
    listIterator(index: number): ListIterator<E>;
    subList(fromIndex: number, toIndex: number): List<E>;
    spliterator(): Spliterator<E>;
    of(): List<E>;
    of(e1: E): List<E>;
    of(e1: E, e2: E): List<E>;
    of(e1: E, e2: E, e3: E): List<E>;
    of(e1: E, e2: E, e3: E, e4: E): List<E>;
    of(e1: E, e2: E, e3: E, e4: E, e5: E): List<E>;
    of(e1: E, e2: E, e3: E, e4: E, e5: E, e6: E): List<E>;
    of(e1: E, e2: E, e3: E, e4: E, e5: E, e6: E, e7: E): List<E>;
    of(e1: E, e2: E, e3: E, e4: E, e5: E, e6: E, e7: E, e8: E): List<E>;
    of(e1: E, e2: E, e3: E, e4: E, e5: E, e6: E, e7: E, e8: E, e9: E): List<E>;
    of(e1: E, e2: E, e3: E, e4: E, e5: E, e6: E, e7: E, e8: E, e9: E, e10: E): List<E>;
    of(elements: Array<E>): List<E>;
    copyOf(coll: Collection<E>): List<E>;
}