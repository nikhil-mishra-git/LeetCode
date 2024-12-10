/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let crr_sum = 0
    let Max_sum = -Infinity

    for(let i=0;i<nums.length;i++){
        crr_sum += nums[i]
        Max_sum = Math.max(crr_sum,Max_sum)

        if(crr_sum < 0){crr_sum = 0} 
    }
    return Max_sum
};