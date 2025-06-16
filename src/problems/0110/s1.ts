import type { TreeNode } from "@/utils/tree-node";

//binary-tree

function getHeight(root: TreeNode | null): number {
  if (!root) {
    return 0;
  }

  const l = getHeight(root.left);
  const r = getHeight(root.right);

  if (l === -1) {
    return -1;
  }
  if (r === -1) {
    return -1;
  }
  if (Math.abs(l - r) > 1) {
    return -1;
  }
  return Math.max(l, r) + 1;
}

function isBalanced(root: TreeNode | null): boolean {
  return getHeight(root) !== -1;
}
