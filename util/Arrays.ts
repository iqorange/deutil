export default class Arrays {
    private constructor(){
        const MIN_ARRAY_SORT_GRAN = 1 << 13;
    }

    public static sort(arr: number[]): void {
        arr.sort((a: number, b: number) => { return a - b });
    }

    public sort(arr: number[] | string[], compareFn?: (a: number | string, b: number | string) => number): void {
        if (compareFn) {
            arr.sort(compareFn);
        }
    }

    static rangeCheck(arrayLength: number, fromIndex: number, toIndex: number): void {
        if (fromIndex > toIndex) {
            throw new Error("fromIndex(" + fromIndex + ") > toIndex(" + toIndex + ")");
        }
        if (fromIndex < 0) {
            throw new Error(fromIndex.toString());
        }
        if (toIndex > arrayLength) {
            throw new Error(toIndex.toString());
        }
    }

    private static swap(x: number[] | boolean[] | string[], a: number, b: number): void {
        let t = x[a];
        x[a] = x[b];
        x[b] = t;
    }

    // TODO 1132
}