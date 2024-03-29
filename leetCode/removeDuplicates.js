/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let count = 0; // Count to track the current index for placing unique elements
    
    for (let i = 0; i < nums.length; i++) {
        if (count < 2 || nums[i] > nums[count - 2]) {
            nums[count] = nums[i];
            count++;
        }
    }
    
    return count;
};