function search(head: BinaryNode<number> | null, needle: number): boolean {
    if (head === null) {
        return false;
    }
    if (head.value === needle) {
        return true;
    }
    if (head.value < needle) {
        return search(head.right, needle);
    }
    return search(head.left, needle);
}

export default function dfs(head: BinaryNode<number>, needle: number): boolean {
    return search(head, needle);
}
