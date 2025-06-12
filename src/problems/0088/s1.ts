// two pointers

function merge(
  nums1: number[],
  lnums1: number,
  nums2: number[],
  lnums2: number,
): void {
  let l = lnums1 - 1;
  let r = lnums2 - 1;
  let i = lnums1 + lnums2 - 1;

  while (l >= 0 && r >= 0) {
    if (nums1[l] > nums2[r]) {
      nums1[i] = nums1[l];
      l--;
    } else {
      nums1[i] = nums2[r];
      r--;
    }
    i--;
  }

  while (r >= 0) {
    nums1[i] = nums2[r];
    r--;
    i--;
  }
}
