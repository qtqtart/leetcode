function isValidBST(root: TreeNode | null): boolean {
  const stack = [
    {
      node: root,
      l: -Infinity,
      r: Infinity,
    },
  ];

  while (stack.length) {
    const { node, l, r } = stack.pop();

    if (!node) {
      continue;
    }
    if (node.val <= l || node.val >= r) {
      return false;
    }
    stack.push({ node: node.left, l, r: node.val });
    stack.push({ node: node.right, l: node.val, r });
  }
  return true;
}
