import Queue from "./Queue";

export default function bfs(head: BinaryNode<number>, needle: number): boolean {
    const q = new Queue<BinaryNode<number> | null>();
    q.enqueue(head);
    let current;

    while (q.length) {
        current = q.deque();
        if (current == null) {
            continue;
        }

        if (current?.value === needle) {
            return true;
        }

        q.enqueue(current.left);
        q.enqueue(current.right);
    }

    return false;
}
