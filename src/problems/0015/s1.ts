// two pointers + sort

function threeSum(nums: number[]) {
  const n = nums.length;
  const ans: number[][] = [];

  nums.sort((a, b) => a - b);

  for (let i = 0; i < n - 2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }

    const target = -nums[i];
    let l = i + 1;
    let r = n - 1;

    while (l < r) {
      const curr = nums[l] + nums[r];

      if (curr < target) {
        l++;
      }
      if (curr > target) {
        r--;
      }
      if (curr === target) {
        while (l < r && nums[l] === nums[l + 1]) {
          l++;
        }
        while (l < r && nums[r] === nums[r - 1]) {
          r--;
        }
        l++;
        r--;
      }
    }
  }
  return ans;
}
