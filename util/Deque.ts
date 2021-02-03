import Queue from "./Queue.ts";
import Collection from "./Collection.ts";

export default interface Deque<E> extends Queue<E>{
    addFirst(e: E): void;
    addLast(e: E): void;
    offerFirst(e: E): void;
    offerLast(e: E): void;
    removeFirst(): E;
    removeLast(): E;
    pollFirst(): E;
    pollLast(): E;
    getFirst(): E;
    getLast(): E;
    peekFirst(): E;
    peekLast(): E;
    removeFirstOccurrence(e: E): boolean;
    removeLastOccurrence(e: E): boolean;
    add(e: E): boolean;
    offer(e: E): boolean;
    remove(): E;
    element(): E;
    poll(): E;
    peek(): E;
    addAll(c: Collection<E>): boolean;
    push(e: E): void;
    pop(): E;
    remove(o: E): boolean;
    contains(o: E): boolean;
    size(): number;
    iterator(): Iterator<E>;
    descendingIterator(): Iterator<E>;
}