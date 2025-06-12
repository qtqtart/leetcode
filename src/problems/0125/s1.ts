// two pointers

function normalize(str: string) {
  return str.toLowerCase().replace(/[^a-z0-9]/g, "");
}

function isPalindrome(str: string) {
  let l = 0;
  let r = str.length - 1;
  const nstr = normalize(str);

  while (l < r) {
    if (nstr[l] !== nstr[r]) {
      return false;
    }
    l++;
    r--;
  }
  return true;
}
