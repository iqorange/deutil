import Collection from './Collection.ts'

export default interface Queue<E> extends Collection<E> {
    add(e: E): boolean;
    offer(e: E): boolean;
    remove(): E;
    poll(): E;
    element(): E;
    peek(): E;
}