// two pointers

function twoSum(nums: number[], target: number) {
  let l = 0;
  let r = nums.length - 1;

  while (l < r) {
    const sum = nums[r] + nums[l];

    if (sum < target) {
      l++;
    }
    if (sum > target) {
      r--;
    }
    if (sum === target) {
      return [l + 1, r + 1];
    }
  }
}
