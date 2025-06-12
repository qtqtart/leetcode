// two pointer

function moveZeroes(nums: number[]): void {
  const n = nums.length;
  let j = 0;
  for (let i = 0; i < n; i++) {
    if (nums[i] !== 0) {
      [nums[j], nums[i]] = [nums[i], nums[j]];
      j++;
    }
  }
}
