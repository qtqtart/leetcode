function maxArea(nums: number[]) {
  let max = -Infinity;
  let l = 0;
  let r = nums.length - 1;

  while (l < r) {
    const curr = Math.min(nums[l], nums[r]) * (r - l);
    max = Math.max(max, curr);

    if (nums[l] < nums[r]) {
      l++;
    } else {
      r--;
    }
  }
  return max;
}
