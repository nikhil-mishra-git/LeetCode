/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} multiplier
 * @return {number[]}
 */
var getFinalState = function(nums, k, multiplier) {
    for (let i = 0; i < k; i++) {
        let min = Math.min(...nums);
        for (let j = 0; j < nums.length; j++) {
            if (nums[j] === min) {
                nums[j] *= multiplier;
                break;
            }
        }
    }
    return nums;
};
