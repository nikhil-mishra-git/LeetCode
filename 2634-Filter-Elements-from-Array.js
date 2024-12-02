/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {

    let filteredArr = []
    let index = 0

    for(let i = 0;i< arr.length ;i++){
        if(fn(arr[i],i)){
            filteredArr[index] = arr[i]
            index++
        } 
    }

    return filteredArr
};

function greaterThan10(n){
    let result =  n > 10 ? true : false
    return result
}

function firstIndex(n, i){
    let result = i === 0 ? n : ""
    return result
}

function plusOne(n){
    if(n!=0){
        return n + 1
    }
}