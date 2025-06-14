function removeDuplicates(str: string): string {
  const stack: string[] = [];

  for (const char of str) {
    if (char !== stack[stack.length - 1]) {
      stack.push(char);
    } else {
      stack.pop();
    }
  }
  return stack.join("");
}
