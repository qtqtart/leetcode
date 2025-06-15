import type { TreeNode } from "@/utils/tree-node";

// tree-node

function isSymmetric(root: TreeNode | null): boolean {
  if (!root) {
    return true;
  }

  const stack = [root.left, root.right];

  while (stack.length) {
    const r = stack.pop();
    const l = stack.pop();

    if (!r && !l) {
      continue;
    }

    if (!r || !l || r.val !== l.val) {
      return false;
    }

    stack.push(l.left);
    stack.push(r.right);
    stack.push(l.right);
    stack.push(r.left);
  }
  return true;
}
