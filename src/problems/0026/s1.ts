// two pointers

function removeDuplicates(nums: number[]): number {
  const n = nums.length;
  let k = 0;

  for (let i = 0; i < n; i++) {
    if (nums[i] !== nums[k]) {
      k++;
      nums[k] = nums[i];
    }
  }
  return k + 1;
}
