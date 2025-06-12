// sliding window

function longestOnes(nums: number[], k: number): number {
  let l = 0;
  let count = 0;
  let max = 0;

  for (let r = 0; r < nums.length; r++) {
    if (nums[r] === 0) {
      count++;
    }

    while (count > k) {
      if (nums[l] === 0) {
        count--;
      }
      l++;
    }
    max = Math.max(max, r - l + 1);
  }
  return max;
}
