export default class ArrayList<T> {
    public length: number;
    public capacity: number;
    private array: Array<T>;

    constructor(capacity: number = 3) {
        this.length = 0;
        this.capacity = capacity;
        this.array = Array(capacity);
    }

    prepend(item: T): void {
        if (this.length >= this.capacity) {
            const copy = Array((this.capacity * 3) << 1);
            copy[0] = item;
            for (let i = 0; i < this.length; i++) {
                copy[i + 1] = this.array[i];
            }
            return;
        }
        this.ltrShiftUntil(0);
        this.length++;
        this.array[0] = item;
    }

    private ltrShiftUntil(idx: number) {
        for (let i = this.length - 1; i >= idx;/**/) {
            this.array[i + 1] = this.array[i--];
        }
    }

    insertAt(item: T, idx: number): void {
        if (this.length >= this.capacity) {
            const copy = Array((this.capacity * 3) << 1);
            copy[idx] = item;
            for (let i = 0; i < idx; i++) {
                copy[i] = this.array[i];
            }
            for (let i = idx; i < this.length; i++) {
                copy[i + 1] = this.array[i];
            }
            return;
        }
        this.length++;
        this.ltrShiftUntil(idx + 1);
        this.array[idx] = item;

    }

    append(item: T): void {
        this.increaseSize();
        this.array[this.length++] = item;
    }

    private increaseSize() {
        if (this.length >= this.capacity) {
            const copy = Array((this.capacity * 3) << 1);
            for (let i = 0; i < this.length; i++) {
                copy[i] = this.array[i];
            }
            this.array = copy;
        }
    }

    remove(item: T): T | undefined {
        let removed: T | undefined = undefined;
        let i = 0;
        for (; i < this.length; i++) {
            if (this.array[i] === item) {
                removed = this.array[i];
                break;
            }
        }
        if (removed) {
            this.rtlShiftUntil(i);
            this.length--;
        }
        return removed;
    }

    get(idx: number): T | undefined {
        if (idx >= this.length) {
            return undefined;
        }
        return this.array[idx];
    }

    removeAt(idx: number): T | undefined {
        const removed = this.get(idx);
        if (removed) {
            this.rtlShiftUntil(idx);
            this.length--;
        }
        return removed;
    }

    private rtlShiftUntil(idx: number) {
        for (let i = idx; i < this.length; /**/) {
            this.array[i] = this.array[++i];
        }
    }
}