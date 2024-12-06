/**
 * @param {number[]} banned
 * @param {number} n
 * @param {number} maxSum
 * @return {number}
 */
var maxCount = function(banned, n, maxSum) {
    let count = 0
    let sum = 0
    for(let i = 1;i <= n;i++){
        
        let isBanned = false
        for(let j = 0; j< banned.length; j++){
            if(i == banned[j]){
                isBanned = true
                break;
            }
        }

        if(!isBanned ){
            if(sum + i <= maxSum){
                count ++ 
                sum += i
            } else{
                break;
            }
        }
    }
    return count
};