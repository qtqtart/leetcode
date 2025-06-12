// sliding window

function minSubArrayLen(target: number, nums: number[]): number {
  let l = 0;
  let sum = 0;
  let min = Infinity;

  for (let r = 0; r < nums.length; r++) {
    sum += nums[r];
    while (sum >= target) {
      min = Math.min(min, r - l + 1);
      sum -= nums[l];
      l++;
    }
  }
  return min === Infinity ? 0 : min;
}
