import type { TreeNode } from "@/utils/tree-node";

// binary-tree

function hasPathSum(root: TreeNode | null, target: number): boolean {
  if (!root) {
    return false;
  }

  const stack = [{ node: root, curr: 0 }];

  while (stack.length) {
    const { node, curr } = stack.pop();

    if (!node) {
      continue;
    }

    const v = curr + node.val;

    if (!node.left && !node.right && v === target) {
      return true;
    }

    stack.push({ node: node.left, curr: v });
    stack.push({ node: node.right, curr: v });
  }
  return false;
}
