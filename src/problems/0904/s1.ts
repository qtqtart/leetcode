// sliding window

function totalFruit(nums: number[]): number {
  const map = new Map<number, number>();
  let l = 0;
  let max = 0;

  for (let r = 0; r < nums.length; r++) {
    map.set(nums[r], (map.get(nums[r]) || 0) + 1);

    while (map.size > 2) {
      map.set(nums[l], (map.get(nums[l]) || 0) - 1);
      if (map.get(nums[l]) === 0) {
        map.delete(nums[l]);
      }
      l++;
    }
    max = Math.max(max, r - l + 1);
  }
  return max;
}
