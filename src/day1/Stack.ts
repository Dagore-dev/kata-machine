type Node<T> = {
    value: T;
    previous?: Node<T>;
};

export default class Stack<T> {
    public length: number = 0;
    private head?: Node<T>;

    push(item: T): void {
        const node = { value: item } as Node<T>;
        this.length++;

        if (!this.head) {
            this.head = node;
            return;
        }

        node.previous = this.head;
        this.head = node;
    }
    pop(): T | undefined {
        if (!this.head) {
            return undefined;
        }

        this.length--;
        const node = this.head;
        this.head = this.head.previous;

        return node.value;
    }
    peek(): T | undefined {
        return this.head?.value;
    }
}
