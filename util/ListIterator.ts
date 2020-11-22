import Iterator from "./Iterator"
interface ListIterator<E> extends Iterator<E> {
    add(e: E): void;
    hasPrevious(): boolean;
    nextIndex(): number;
    previous(): E;
    previousIndex(): number;
    set(e: E): void;
}