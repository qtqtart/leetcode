import type { TreeNode } from "@/utils/tree-node";

function invertTree(root: TreeNode | null): TreeNode | null {
  function dfs(node: TreeNode | null): void {
    if (!node) {
      return;
    }

    [node.left, node.right] = [node.right, node.left];
    dfs(node.left);
    dfs(node.right);
    return;
  }
  dfs(root);
  return root;
}
