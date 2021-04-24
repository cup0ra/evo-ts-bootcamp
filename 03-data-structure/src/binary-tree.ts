import { IBinaryTree, TreeNode, TraverseType } from "./models/tree";

export class BinaryTree<T> implements IBinaryTree<T> {
  private root: TreeNode<T>;
  constructor(tree: TreeNode<T>) {
    this.root = tree;
  }

  setTree(tree: TreeNode<T>): this {
    this.root = tree;
    return this;
  }

  private inOrder(node: TreeNode<T> | null): T[] {
    return !node
      ? []
      : [...this.inOrder(node.left), node.value, ...this.inOrder(node.right)];
  }
  private preOrder(node: TreeNode<T> | null): T[] {
    return !node
      ? []
      : [node.value, ...this.preOrder(node.left), ...this.preOrder(node.right)];
  }

  private postOrder(node: TreeNode<T> | null): T[] {
    return !node
      ? []
      : [
          ...this.postOrder(node.left),
          ...this.postOrder(node.right),
          node.value,
        ];
  }

  private bfs(node: TreeNode<T>): T[] {
    const queue: TreeNode<T>[] = [node];
    let result: T[] = [];
    while (queue.length) {
      let curr = queue.shift();
      if (!curr) return result;
      result.push(curr.value);
      if (curr.left) {
        queue.push(curr.left);
      }
      if (curr.right) {
        queue.push(curr.right);
      }
    }
    return result;
  }

  traverse(traverseType: TraverseType): T[] {
    switch (traverseType) {
      case TraverseType.DFS_InOrder:
        return this.inOrder(this.root);
      case TraverseType.DFS_PostOrder:
        return this.postOrder(this.root);
      case TraverseType.DFS_PreOrder:
        return this.preOrder(this.root);
      case TraverseType.BFS:
        return this.bfs(this.root);
    }
  }

  getColumn(columnOrder: number): T[] {
    const getColumnValue = (
      node: TreeNode<T> | null,
      columnNumber: number
    ): T[] => {
      return !node
        ? []
        : [
            ...(columnNumber === columnOrder ? [node.value] : []),
            ...getColumnValue(node.left, columnNumber - 1),
            ...getColumnValue(node.right, columnNumber + 1),
          ];
    };
    return getColumnValue(this.root, 0);
  }
}
