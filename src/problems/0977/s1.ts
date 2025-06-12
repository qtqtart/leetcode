// two pointers

function sortedSquares(nums: number[]) {
  const n = nums.length;
  const ans = new Array(n).fill(0);

  let l = 0;
  let r = n - 1;

  for (let i = n - 1; i >= 0; i--) {
    if (Math.abs(nums[l]) < Math.abs(nums[r])) {
      ans[i] = nums[r] * nums[r];
      r--;
    } else {
      ans[i] = nums[l] * nums[l];
      l++;
    }
  }
  return ans;
}
