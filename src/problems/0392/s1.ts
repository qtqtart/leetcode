// two pointer

function isSubsequence(subseq: string, str: string): boolean {
  let l = 0;
  let r = 0;

  while (l < subseq.length && r < str.length) {
    if (subseq[l] === str[r]) {
      l++;
    }
    r++;
  }
  return l === subseq.length;
}
