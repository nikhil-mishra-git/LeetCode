/**
 * @param {string} s
 * @param {number[]} spaces
 * @return {string}
 */
var addSpaces = function(s, spaces) {
    let newString = ""
    let indexCount = 0

    for(let i=0;i<s.length;i++){
        if(i === spaces[indexCount]){
            newString += " "
            indexCount++
        }
        newString += s[i]
    }
    return newString
};