// @ts-ignore
import Iterator from "./Iterator.ts"
export default interface ListIterator<E> extends Iterator<E> {
    add(e: E): void;
    hasPrevious(): boolean;
    nextIndex(): number;
    previous(): E;
    previousIndex(): number;
    set(e: E): void;
}