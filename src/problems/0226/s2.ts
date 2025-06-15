import type { TreeNode } from "@/utils/tree-node";

// tree-node

function invertTree(root: TreeNode | null): TreeNode | null {
  if (!root) {
    return null;
  }

  const stack = [root];

  while (stack.length) {
    const node = stack.pop()!;
    [node.left, node.right] = [node.right, node.left];

    if (node.left) {
      stack.push(node.left);
    }
    if (node.right) {
      stack.push(node.right);
    }
  }
  return root;
}
