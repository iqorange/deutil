import Consumer from './function/Consumer'
interface Spliterator<T> {
    tryAdvance(action: Consumer<T>): boolean;
    forEachRemaining(action: Consumer<T>): void;
    trySplit(): Spliterator<T>;
    estimateSize(): number;
    getExactSizeIfKnown(): number;
    characteristics(): number;
    hasCharacteristics(characteristics:number): boolean;
    getComparator(t: T): Consumer<T>;
    // TODO
}