function simplifyPath(path: string): string {
  const stack: string[] = [];

  for (const subpath of path.split("/")) {
    if (["", "."].includes(subpath)) {
      continue;
    } else if (subpath === "..") {
      stack.pop();
    } else {
      stack.push(subpath);
    }
  }
  return "/" + stack.join("/");
}
