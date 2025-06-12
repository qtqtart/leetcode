// two pointers

function reverseString(str: string[]): void {
  let l = 0;
  let r = str.length - 1;

  while (l < r) {
    [str[l], str[r]] = [str[r], str[l]];
    l++;
    r--;
  }
}
