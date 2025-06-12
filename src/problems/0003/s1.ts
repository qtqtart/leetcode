// set + sliding window

function lengthOfLongestSubstring(str: string): number {
  const set = new Set<string>();
  let l = 0;
  let max = 0;

  for (let r = 0; r < str.length; r++) {
    while (set.has(str[r])) {
      set.delete(str[l]);
      l++;
    }

    set.add(str[r]);
    max = Math.max(max, r - l + 1);
  }
  return max;
}
