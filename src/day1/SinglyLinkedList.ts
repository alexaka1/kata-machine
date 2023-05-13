type Node<T> = { value: T; next?: Node<T>; };
export default class SinglyLinkedList<T> {
    public length: number;
    private head?: Node<T>;
    private tail?: Node<T>;

    constructor() {
        this.length = 0;
        this.head = this.tail = undefined;
    }

    prepend(item: T): void {
        const node: Node<T> = {value: item, next: this.head};
        if (!this.head) {
            this.tail = node;
        }
        this.head = node;
        this.length++;
    }

    insertAt(item: T, idx: number): void {
        // best case
        if (idx === 0) {
            this.prepend(item);
            return;
        } else if (idx >= this.length) {
            this.append(item);
            return;
        }
        this.length++;
        // worst case
        let current = this.head;
        let next: Node<T> | undefined = current;
        for (let i = 1; i <= idx && current; i++) {
            next = current?.next;
            if (i === idx) {
                const next: Node<T> = {value: item, next: current?.next};
                current.next = {next: next, value: item};
            }
            current = next;
        }
    }

    append(item: T): void {
        this.length++;
        const next: Node<T> = {value: item, next: undefined};
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
        let prev = this.head;
        let current = this.head?.next;
        while (current != null) {
            if (current.value === item) {
                const value = current.value;
                prev!.next = current.next;
                this.length--;
                return value;
            }
            prev = current;
            current = current.next;
        }
        return undefined;
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
        for (let i = 1; i < idx; i++) {
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
            const next = this.head?.next;
            if (next != null) {
                this.head = next;
            }
            this.length--;
            return value;
        }
        let current = this.head;
        let prev = this.head;
        for (let i = 1; i <= idx && current; i++) {
            current = current.next;
            if (i === idx) {
                prev!.next = current?.next;
                this.length--;
                return current?.value;
            }
            prev = current;
        }
        return undefined;
    }

}
