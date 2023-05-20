export default class MinHeap {
    public length: number;
    private data: number[];

    constructor() {
        this.length = 0;
        this.data = [];
    }

    insert(value: number): void {
        this.data[this.length] = value;
        this.heapifyUp(this.length);
        this.length++;
    }

    delete(): number {
        if (this.length === 0) {
            return -1;
        }
        const out = this.data[0];
        this.length--;
        if (this.length === 0) {
            this.data = [];
            return out;
        }
        this.data[0] = this.data[this.length];
        this.heapifyDown(0);
        return out;
    }

    private heapifyDown(idx: number) {
        if (idx >= this.length) {
            return;
        }
        const lIdx = this.leftChild(idx);
        if (lIdx >= this.length) {
            return;
        }
        const rIdx = this.rightChild(idx);
        const lV = this.data[lIdx];
        const rV = this.data[rIdx];
        const v = this.data[idx];
        if (lV > rV && v > rV) {
            this.swap(idx, rV, rIdx, v);
            this.heapifyDown(rIdx);
        } else if (rV > lV && v > lV) {
            this.swap(idx, lV, lIdx, v);
            this.heapifyDown(lIdx);
        }
    }

    private heapifyUp(idx: number): void {
        if (idx === 0) {
            return;
        }
        const p = this.parent(idx);
        const parent = this.data[p];
        const v = this.data[idx];
        if (parent > v) {
            this.swap(idx, parent, p, v);
            this.heapifyUp(p);
        }
    }

    private swap(lIdx: number, rV: number, rIdx: number, lV: number) {
        this.data[lIdx] = rV;
        this.data[rIdx] = lV;
    }

    private parent(idx: number): number {
        return Math.floor((idx - 1) / 2);
    }

    private leftChild(idx: number): number {
        return idx * 2 + 1;
    }

    private rightChild(idx: number): number {
        return idx * 2 + 2;
    }
}
