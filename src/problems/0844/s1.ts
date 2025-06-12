// two pointers

function validate(str: string, i: number) {
  let count = 0;

  while (i >= 0) {
    if (str[i] === "#") {
      count++;
      i--;
    } else if (count > 0) {
      count--;
      i--;
    } else {
      break;
    }
  }
  return i;
}

function backspaceCompare(str1: string, str2: string): boolean {
  let l = str1.length - 1;
  let r = str2.length - 1;

  while (l >= 0 || r >= 0) {
    l = validate(str1, l);
    r = validate(str2, r);

    if ((l >= 0 && r < 0) || (r >= 0 && l < 0)) {
      return false;
    }
    if (str1[l] !== str2[r]) {
      return false;
    }

    l--;
    r--;
  }
  return true;
}
