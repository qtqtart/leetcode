import type { TreeNode } from "@/utils/tree-node";

// tree-node

function maxDepth(root: TreeNode | null): number {
  const stack = [{ node: root, depth: 1 }];
  let count = 0;

  while (stack.length) {
    const { node, depth } = stack.pop();

    if (!node) {
      continue;
    }

    count = Math.max(count, depth);
    stack.push({ node: node.left, depth: depth + 1 });
    stack.push({ node: node.right, depth: depth + 1 });
  }
  return count;
}
