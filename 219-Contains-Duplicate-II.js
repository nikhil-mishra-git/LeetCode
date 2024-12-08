/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    let indexMap = {};
    let isDistinct = false

    for (let i = 0; i < nums.length; i++) {
        let value = nums[i];

        if (indexMap[value] !== undefined) {
            if (i - indexMap[value] <= k) {
                isDistinct = true
                return isDistinct;
            }
        }

        indexMap[value] = i;
    }

    return isDistinct;
};