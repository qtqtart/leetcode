import type { TreeNode } from "@/utils/tree-node";

//binary-tree

function maxDepth(root: TreeNode | null): number {
  function dfs(node: TreeNode | null): number {
    if (!node) {
      return 0;
    }

    const l = dfs(node.left);
    const r = dfs(node.right);
    return Math.max(l, r) + 1;
  }

  return dfs(root);
}
