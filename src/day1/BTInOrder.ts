export default function in_order_search(head: BinaryNode<number>): number[] {
    const path: number[] = [];
    walk(head, path);

    return path;
}

function walk(current: BinaryNode<number> | null, path: number[]): void {
    if (current == null) {
        return;
    }

    walk(current.left, path);

    path.push(current.value);

    walk(current.right, path);
}
