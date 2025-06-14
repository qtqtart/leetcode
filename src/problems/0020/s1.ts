// stack

function isValid(str: string): boolean {
  const map = new Map<string, string>([
    ["(", ")"],
    ["{", "}"],
    ["[", "]"],
  ]);
  const stack: string[] = [];

  for (const char of str) {
    if (map.has(char)) {
      stack.push(char);
    } else {
      if (stack.length === 0) {
        return false;
      }
      if (char !== map.get(stack.pop())) {
        return false;
      }
    }
  }
  return stack.length === 0;
}
