// hashmap

function twoSum(nums: number[], target: number) {
  const map = new Map<number, number>();

  for (let i = 0; i < nums.length; i++) {
    const curr = target - nums[i];

    if (map.has(curr)) {
      return [map.get(curr), i];
    }
    map.set(nums[i], i);
  }
  return [];
}
