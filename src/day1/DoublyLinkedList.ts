type Node<T> = {
    value: T;
    next?: Node<T>;
    previous?: Node<T>;
};

export default class DoublyLinkedList<T> {
    public length: number = 0;
    private head?: Node<T>;
    private tail?: Node<T>;

    prepend(item: T): void {
        const node = { value: item } as Node<T>;
        this.length++;
        if (!this.head) {
            this.head = this.tail = node;
            return;
        }

        node.next = this.head;
        this.head.previous = node;
        this.head = node;
    }
    insertAt(item: T, idx: number): void {
        if (idx > this.length) {
            throw new Error("Index out of bounds.");
        } else if (idx === this.length) {
            this.append(item);
            return;
        } else if (idx === 0) {
            this.prepend(item);
            return;
        }

        const currentNode = this.getAt(idx) as Node<T>;

        this.length++;
        const node = { value: item } as Node<T>;

        // Create the new links.
        node.next = currentNode;
        node.previous = currentNode.previous;

        // Update existing links.
        currentNode.previous = node;
        if (node.previous) {
            node.previous.next = currentNode;
        }
    }
    append(item: T): void {
        const node = { value: item } as Node<T>;
        this.length++;
        if (!this.tail) {
            this.head = this.tail = node;
        }

        node.previous = this.tail;
        this.tail.next = node;
        this.tail = node;
    }
    remove(item: T): T | undefined {
        let currentNode = this.head;
        for (let i = 0; currentNode && i < this.length; i++) {
            if (currentNode.value === item) {
                break;
            }
            currentNode = currentNode.next;
        }

        if (!currentNode) {
            return;
        }

        return this.removeNode(currentNode);
    }
    get(idx: number): T | undefined {
        const node = this.getAt(idx);
        return node?.value;
    }
    removeAt(idx: number): T | undefined {
        const node = this.getAt(idx);
        if (!node) {
            return;
        }

        return this.removeNode(node);
    }
    private getAt(idx: number): Node<T> | undefined {
        let currentNode = this.head;
        for (let i = 0; currentNode && i < idx; i++) {
            currentNode = currentNode?.next;
        }

        return currentNode;
    }
    private removeNode(node: Node<T>): T | undefined {
        this.length--;
        if (this.length === 0) {
            const out = this.head?.value;
            this.head = this.tail = undefined;
            return out;
        }

        if (node.previous) {
            node.previous.next = node.next;
        }

        if (node.next) {
            node.next.previous = node.previous;
        }

        if (node === this.head) {
            this.head = node.next;
        }

        if (node === this.tail) {
            this.tail = node.previous;
        }

        node.previous = node.next = undefined;
        return node.value;
    }
}
