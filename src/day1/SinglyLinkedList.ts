export default class SinglyLinkedList<T> {
    public length: number;
    private head: LinkedElement<T>;
    private tail: LinkedElement<T>;

    constructor() {
        this.length = 0;
    }

    prepend(item: T): void {
        // this is the only time this.head is accessed and could actually be undefined, despite TS not complaining, but that is actually the value we want
        this.head = {value: item, next: this.head};
        if (this.length === 0) {
            this.tail = this.head;
        }
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
        // worst case
        let current: LinkedElement<T> = this.head;
        for (let i = 1; i < this.length; i++) {
            const temp = current.next;
            if (temp == null) {
                current.next = {value: item, next: undefined};
                return;
            }
            if (i === idx) {
                const next = temp.next;
                current.next = {next: next, value: item};
            }
            current = temp;
        }
    }

    append(item: T): void {
        const next: LinkedElement<T> = {value: item, next: undefined};
        if (this.length === 0) {
            this.head = next;
            this.tail = next;
        } else {
            this.tail.next = next;
            this.tail = next;
        }
    }

    remove(item: T): T | undefined {
        if (this.length === 0) {
            return undefined;
        }
        if (this.head.value === item) {
            return this.removeAt(0);
        }
        let prev = this.head;
        let current = this.head.next;
        while (current != null) {
            if (current.value === item) {
                const value = current.value;
                prev.next = current.next;
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
            return this.head.value;
        }
        if (idx === this.length - 1) {
            return this.tail.value;
        }
        // worst case
        let current: LinkedElement<T> = this.head;
        for (let i = 1; i < this.length; i++) {
            const temp = current.next;
            if (temp == null) {
                return undefined;
            }
            if (i === idx) {
                return temp.value;
            }
            current = temp;
        }
        return undefined;
    }

    removeAt(idx: number): T | undefined {
        if (this.length === 0) {
            return undefined;
        }
        if (this.length <= idx) {
            return undefined;
        }
        if (idx === 0) {
            const value = this.head.value;
            const next = this.head.next;
            if (next != null) {
                this.head = next;
            }
            this.length--;
            return value;
        }
        let current: LinkedElement<T> = this.head;
        for (let i = 1; i < this.length; i++) {
            const temp = current.next;
            if (temp != null) {
                if (i === idx) {
                    const next = temp.next;
                    current.next = temp.next;
                    this.length--;
                    return;
                }
                current = temp;
            }
        }
        return undefined;
    }

}
type LinkedElement<T> = { value: T; next: LinkedElement<T> | undefined; };
