/**
 *   Return the second largest number in the array.
 *   @param {Number[]} nums - An array of numbers.
 *   @return {Number} The second largest number in the array.
 **/
function getSecondLargest(nums) {
  // Complete the function
  let max1 = -Infinity,
    max2 = -Infinity,
    n = nums.length;
  for (let i = 0; i < n; i++) {
    if (nums[i] > max1) {
      max2 = max1;
      max1 = nums[i];
    } else if (nums[i] > max2 && nums[i] !== max1) {
      max2 = nums[i];
    }
  }
  return max2;
}
