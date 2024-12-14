/**
 * @param {number[]} nums
 * @return {number}
 */
var continuousSubarrays = function (nums) {
    let start = 0;
    let count = 0;
    const maxDeque = [];
    const minDeque = [];
    for (let end = 0; end < nums.length; end++) {
        while (maxDeque.length > 0 && nums[maxDeque[maxDeque.length - 1]] <= nums[end]) {
            maxDeque.pop();
        }
        maxDeque.push(end);
        while (minDeque.length > 0 && nums[minDeque[minDeque.length - 1]] >= nums[end]) {
            minDeque.pop();
        }
        minDeque.push(end);
        while (nums[maxDeque[0]] - nums[minDeque[0]] > 2) {
            start++;
            if (maxDeque[0] < start) maxDeque.shift();
            if (minDeque[0] < start) minDeque.shift();
        }
        count += end - start + 1;
    }
    return count;
};