type QNode<T> = {
    value: T,
    next?: QNode<T>
};
export default class Queue<T> {
    public length: number;
    private head?: QNode<T>
    private tail?: QNode<T>

    constructor() {
        this.length = 0;
        this.head = this.tail = undefined;
    }

    enqueue(item: T): void {
        this.length++;
        const node: QNode<T> = {value: item};
        if (!this.tail) {
            this.tail = this.head = node;
            return;
        }
        this.tail.next = node;
        this.tail = node;
    }

    deque(): T | undefined {
        if (!this.head) {
            return undefined;
        }
        this.length--;
        const head = this.head;
        this.head = this.head.next;
        head.next = undefined;
        if (this.length === 0) {
            this.tail = undefined;
        }
        return head.value;
    }

    peek(): T | undefined {
        return this.head?.value;
    }
}