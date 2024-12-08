/**
 * @param {number[]} arr
 * @return {boolean}
 */
var checkIfExist = function(arr) {
    let visit = [];
    
    for (let i = 0; i < arr.length; i++) {
        let num = arr[i];
        
        for (let j = 0; j < visit.length; j++) {
            if (visit[j] === num * 2 || (num % 2 === 0 && visit[j] === num / 2)) {
                return true;
            }
        }
        
        visit[visit.length] = num;
    }
    
    return false;
};

