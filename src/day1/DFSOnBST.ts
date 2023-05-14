function search(head: BinaryNode<number> | null, needle: number): boolean {
    if (head === null) {
        return false;
    }
    if (head.value === needle) {
        return true;
    }
    return search(head.left, needle) || search(head.right, needle);
}

export default function dfs(head: BinaryNode<number>, needle: number): boolean {
    return search(head, needle);
}
