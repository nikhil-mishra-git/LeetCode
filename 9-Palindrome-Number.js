/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let inp = x
    let num = 0
    while(inp > 0){
        let temp = inp % 10
        num = num*10 + temp
        inp = (inp - temp)/10
    }
    return x == num ? true : false
};