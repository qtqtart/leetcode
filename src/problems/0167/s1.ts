// hashmap

function twoSum(nums: number[], target: number) {
  const map = new Map<number, number>();

  for (let i = 0; i < nums.length; i++) {
    const curr = target - nums[i];

    if (map.has(curr)) {
      return [map.get(curr), i + 1];
    } else {
      map.set(nums[i], i + 1);
    }
  }
}
