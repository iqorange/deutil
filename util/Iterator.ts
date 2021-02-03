import Consumer from './function/Consumer.ts'
export default interface Iterator<E> {
    forEachRemaining(action: Consumer<E>): void;
    hasNext(): boolean;
    next(): E;
    remove(): void;
}