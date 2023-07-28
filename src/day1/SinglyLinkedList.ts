type Node<T> = {
    value: T;
    next?: Node<T>;
};

export default class SinglyLinkedList<T> {
    public length: number = 0;
    private head?: Node<T>;
    private tail?: Node<T>;

    prepend(item: T): void {
        const node = { value: item } as Node<T>;
        this.length++;

        if (!this.head || !this.tail) {
            this.head = this.tail = node;
            return;
        }

        node.next = this.head;
        this.head = node;
    }
    insertAt(item: T, idx: number): void {}
    append(item: T): void {
        const node = { value: item } as Node<T>;
        this.length++;

        if (!this.head || !this.tail) {
            this.head = this.tail = node;
            return;
        }

        this.tail.next = node;
        this.tail = node;
    }
    remove(item: T): T | undefined {
        if (this.head?.value === item) {
            this.length--;
            this.head = this.head.next;
            if (this.length === 0) {
                this.tail = undefined;
            }

            return item;
        }

        let currentNode = this.head;
        while (currentNode?.next) {
            if (currentNode.next.value === item) {
                this.length--;
                currentNode.next = currentNode.next.next;
                if (!currentNode.next) {
                    this.tail = currentNode;
                }

                return item;
            } else {
                currentNode = currentNode.next;
            }
        }

        return undefined;
    }
    get(idx: number): T | undefined {
        if (idx < 0 || idx >= this.length) {
            return undefined;
        }

        if (idx === 0) {
            return this.head?.value;
        }

        if (idx === this.length - 1) {
            return this.tail?.value;
        }

        return this.getNode(idx)?.value;
    }
    removeAt(idx: number): T | undefined {
        if (idx >= this.length) {
            return undefined;
        }

        if (idx === 0) {
            this.length--;
            const node = this.head;

            if (this.length === 0) {
                this.head = this.tail = undefined;
            } else {
                this.head = this.head?.next;
            }

            return node?.value;
        }

        const previousNode = this.getNode(idx - 1);
        if (!previousNode || !previousNode.next) {
            return undefined;
        }
        this.length--;
        const nodeToDelete = previousNode.next;
        previousNode.next = nodeToDelete.next;
        if (!nodeToDelete.next) {
            this.tail = previousNode;
        }

        return nodeToDelete.value;
    }
    private getNode(idx: number): Node<T> | undefined {
        if (idx < 0 || idx >= this.length) {
            return undefined;
        }

        let i = 0;
        let currentNode = this.head;
        while (i < idx) {
            currentNode = currentNode?.next;
            i++;
        }

        return currentNode;
    }
}
