import Iterator from "./Iterator"
interface ListIterator<E> extends Iterator<E> {
    add(e: E): void;
    hasNext(): boolean;
    hasPrevious(): boolean;
    next(): E;
    nextIndex(): number;
    previous(): E;
    previousIndex(): number;
    remove(): void;
    set(e: E): void;
}