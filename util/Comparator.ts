export default interface Comparator<T> {
    compare(o1: T, o2: T): number;
    equals(obj: T);
    reversed(): Comparator<T>;
    thenComparing(other: Comparator<T>): Comparator<T>;
    reverseOrder(): Comparator<T>;
    naturalOrder(): Comparator<T>;
    nullsFirst(comparer: Comparator<T>): Comparator<T>;
    nullsLast(comparer: Comparator<T>): Comparator<T>;
}