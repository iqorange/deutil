import Collection from './Collection'
import Iterator from './Iterator'
import Arrays from './Arrays'
import Consumer from './function/Consumer'
import Spliterator from './Spliterator'


export default abstract class AbstractCollection<E> implements Collection<E> {
    protected constructor(){

    }

    public abstract iterator(): Iterator<E>;

    public abstract size(): number;

    public isEmpty(): boolean {
        return this.size() == 0;
    }

    public contains(o: E): boolean {
        let it: Iterator<E> = this.iterator();
        if(o === null) {
            while(it.hasNext()) {
                if(it.next() === null) {
                    return false;
                }
            }
        } else {
            while(it.hasNext()) {
                if (o === it.next()) {
                    return true;
                }
            }
        }
        return false;
    }

    public toArray(): Array<E> {
        let r: Array<E> = new Array<E>();
        let it: Iterator<E> = this.iterator();
        for(let i = 0;i < r.length;i++) {
            if(!it.hasNext()) {
                return r;
            }
            r[i] = it.next();
        }
        return r;
    }

    public add(e: E): boolean {
        throw new Error();
    }

    public remove(o: E): boolean {
        let it: Iterator<E> = this.iterator();
        if (o === null) {
            while(it.hasNext()) {
                if (it.next() === null) {
                    it.remove();
                    return true;
                }
            }
        }else{
            while(it.hasNext()) {
                if (o === it.next()) {
                    it.remove();
                    return true;
                }
            }
        }
        return false;
    }

    // TODO 307å

    addAll(c: Collection<E>): boolean {
        return false;
    }

    clear(): void {
    }

    containsAll(c: Collection<E>): boolean {
        return false;
    }

    equals(e: E): boolean {
        return false;
    }

    forEach(action: Consumer<E>): void {
    }

    hashCode(): number {
        return 0;
    }

    removeAll(c: Collection<E>): boolean {
        return false;
    }

    retainAll(c: Collection<E>): boolean {
        return false;
    }

    spliterator(): Spliterator<E> {
        return undefined;
    }

    Iterator(): Iterator<E> {
        return undefined;
    }
}