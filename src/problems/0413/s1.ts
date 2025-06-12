// sliding window

function numberOfArithmeticSlices(nums: number[]): number {
  let count = 0;
  let ans = 0;

  for (let i = 2; i < nums.length; i++) {
    if (nums[i] - nums[i - 1] === nums[i - 1] - nums[i - 2]) {
      count++;
      ans += count;
    } else {
      count = 0;
    }
  }
  return ans;
}
