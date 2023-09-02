export default class MinHeap {
    public length: number = 0;
    private data: number[] = [];

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

    private heapifyDown(idx: number): void {
        const left = this.leftChild(idx);
        const right = this.rightChild(idx);

        if (idx >= this.length || left >= this.length) {
            return;
        }

        const value = this.data[idx];

        if (
            this.data[left] > this.data[right] &&
            this.data[idx] > this.data[right]
        ) {
            this.data[idx] = this.data[right];
            this.data[right] = value;

            this.heapifyDown(right);
        } else if (
            this.data[right] > this.data[left] &&
            this.data[idx] > this.data[left]
        ) {
            this.data[idx] = this.data[left];
            this.data[left] = value;

            this.heapifyDown(left);
        }
    }

    private leftChild(idx: number): number {
        return idx * 2 + 1;
    }

    private rightChild(idx: number): number {
        return idx * 2 + 2;
    }

    private heapifyUp(idx: number): void {
        if (idx === 0) {
            return;
        }

        const value = this.data[idx];
        const parent = this.parent(idx);
        const parentValue = this.data[parent];

        if (parentValue > value) {
            this.data[idx] = parentValue;
            this.data[parent] = value;

            this.heapifyUp(parent);
        }
    }

    private parent(idx: number): number {
        return Math.floor((idx - 1) / 2);
    }
}
