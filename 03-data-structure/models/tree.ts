export interface TreeNode<T> {
  value: T;
  left: TreeNode<T> | null;
  right: TreeNode<T> | null;
}

export enum TraverseType {
  DFS_InOrder,
  DFS_PreOrder,
  DFS_PostOrder,
  BFS,
}

export interface IBinaryTree<T> {
  setTree(tree: TreeNode<T>): this;
  traverse(traverseType: TraverseType): T[];
  getColumn(columnOrder: number): T[];
}

export type CompareFunction<T> = (a: T, b: T) => number;
