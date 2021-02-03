import List from "./List.ts";
import Deque from "./Deque.ts";
import Collection from "./Collection.ts";

export default class LinkedList<E> implements List<E>, Deque<E>{
    size:number = 0;
    first: Node<E>;
    last: Node<E>;

    constructor(c: Collection<E>) {
        if (c){
            this.addAll(c)
        }
    }
}

class Node<E>{
    item: E;
    next: Node<E>;
    prev: Node<E>;

    constructor(prev: Node<E>, element: E, next: Node<E>) {
        this.item = element;
        this.next = next;
        this.prev = prev;
    }
}