export default function pre_order_search(head: BinaryNode<number>): number[] {
    const path: number[] = [];
    walk(head, path);

    return path;
}

function walk(current: BinaryNode<number> | null, path: number[]): void {
    if (current == null) {
        return;
    }

    path.push(current.value);

    walk(current.left, path);
    walk(current.right, path);
}
