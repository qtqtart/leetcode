export class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;

  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val !== undefined ? val : 0;
    this.left = left !== undefined ? left : null;
    this.right = right !== undefined ? right : null;
  }
}
