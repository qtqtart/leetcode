// stack

function removeStars(str: string): string {
  const stack: string[] = [];

  for (const char of str) {
    if (char !== "*") {
      stack.push(char);
    } else {
      stack.pop();
    }
  }
  return stack.join("");
}
