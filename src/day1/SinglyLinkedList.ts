type Node<T> = { value: T; next?: Node<T> };
export default class SinglyLinkedList<T> {
    public length: number;
    private head?: Node<T>;
    private tail?: Node<T>;

    constructor() {
        this.length = 0;
        this.head = this.tail = undefined;
    }

    prepend(item: T): void {
        this.length++;
        const node: Node<T> = { value: item, next: this.head };
        if (!this.head) {
            this.tail = node;
        }
        this.head = node;
    }

    insertAt(item: T, idx: number): void {
        // best case
        if (idx === 0) {
            this.prepend(item);
            return;
        } else if (idx === this.length) {
            this.append(item);
            return;
        }
        // worst case
        const node: Node<T> = { value: item };
        let current = this.head;
        for (let i = 0; i < idx && current; i++) {
            current = current.next;
        }
        if (current) {
            this.length++;
            const next = current?.next;
            current.next = node;
            node.next = next;
        }
    }

    append(item: T): void {
        this.length++;
        const next: Node<T> = { value: item, next: undefined };
        if (!this.tail) {
            this.tail = this.head = next;
        } else {
            this.tail.next = next;
            this.tail = next;
        }
    }

    remove(item: T): T | undefined {
        if (this.length === 0) {
            return undefined;
        }
        if (this.head?.value === item) {
            return this.removeAt(0);
        }
        let curr = this.head;
        let prev: Node<T> | undefined = undefined;
        for (let i = 0; i < this.length && curr; i++) {
            if (curr.value === item) {
                break;
            }
            prev = curr;
            curr = curr.next;
        }
        if (!(curr && prev)) {
            return undefined;
        }
        this.length--;
        prev.next = curr.next;
        curr.next = undefined;
        return curr.value;
    }

    get(idx: number): T | undefined {
        // best case
        if (this.length === 0) {
            return undefined;
        }
        if (idx === 0) {
            return this.head?.value;
        }
        if (idx === this.length - 1) {
            return this.tail?.value;
        }
        // worst case
        let current = this.head;
        for (let i = 0; i < idx; i++) {
            current = current?.next;
        }
        return current?.value;
    }

    removeAt(idx: number): T | undefined {
        if (this.length === 0) {
            return undefined;
        }
        if (this.length <= idx) {
            return undefined;
        }
        if (idx === 0) {
            const value = this.head?.value;
            this.head = this.head?.next;
            this.length--;
            return value;
        }
        let current = this.head;
        let prev = this.head;
        for (let i = 0; i < idx && current; i++) {
            prev = current;
            current = current.next;
        }
        if (!(prev && current)) {
            return undefined;
        }
        this.length--;
        prev.next = current?.next;
        current.next = undefined;
        return current?.value;
    }
}
