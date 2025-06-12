// sliding window

function findMaxAverage(nums: number[], k: number): number {
  let l = 0;
  let sum = 0;
  let max = -Infinity;

  for (let r = 0; r < nums.length; r++) {
    sum += nums[r];
    if (r - l + 1 === k) {
      max = Math.max(max, sum);
      sum -= nums[l];
      l++;
    }
  }
  return max / k;
}
