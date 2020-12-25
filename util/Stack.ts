export default class Stack<E> {
    private stack: Array<E>;
    constructor(){
        this.stack = new Array<E>();
    }

    public push(item: E): E {
        this.stack.push(item);
        return item;
    }

    public pop(): E {
        return this.stack.pop();
    }

    public peek(): E {
        return this.stack[this.stack.length - 1];
    }

    public empty(): boolean {
        return this.stack.length === 0;
    }

    public search(o: E): number {
        return this.stack.indexOf(o);
    }
}