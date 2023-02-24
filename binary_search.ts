function search(nums: number[], target: number): number {
    let left = 0, right = nums.length - 1;
    while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (nums[mid] === target) return mid;
    if (target < nums[mid]) right = mid - 1;
    if (target > nums[mid]) left = mid + 1;
  }
  return -1;
};

console.log(search([-1,0,3,5,9,12], 2)) // -1
console.log(search([-1,0,3,5,9,12], 12)) // 5
