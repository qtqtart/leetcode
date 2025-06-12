// set + sliding window

function findRepeatedDnaSequences(str: string): string[] {
  const seen = new Set<string>();
  const repeated = new Set<string>();

  for (let i = 0; i <= str.length - 10; i++) {
    const substr = str.slice(i, i + 10);
    if (seen.has(substr)) {
      repeated.add(substr);
    } else {
      seen.add(substr);
    }
  }
  return [...repeated];
}
