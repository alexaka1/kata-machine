export default class Queue<T> {
    public length: number;

    private readonly array: T[];

    constructor() {
        this.length = 0;
        this.array = [];
    }

    enqueue(item: T): void {
        this.length = this.array.push(item);
    }

    deque(): T | undefined {
        const val = this.array.shift();
        this.length = this.array.length;
        return val;
    }

    peek(): T | undefined {
        if (this.length < 1){
            return undefined;
        }
        return this.array[this.length - 1];
    }
}