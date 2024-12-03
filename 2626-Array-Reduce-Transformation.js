/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function(nums, fn, init) {
    let count = init
        if (nums === null){
            return count
        }else{
        for(let i = 0;i<nums.length;i++){
            count = fn(count,nums[i])
        }
     }
    return count
};

function sum(count,nums){
    return count + nums
 }
function sum(accum, curr){
    return count + nums * nums
}