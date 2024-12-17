/**
 * @param {string} s
 * @param {number} repeatLimit
 * @return {string}
 */
var repeatLimitedString = function(s, repeatLimit) {
    let charCount = {};

    for (let character of s) {
        charCount[character] = (charCount[character] || 0) + 1;
    }

    let sortedChars = Object.keys(charCount).sort().reverse();
    let output = '';

    while (sortedChars.length) {
        let currentChar = sortedChars[0]; 
        let maxRepeats = Math.min(repeatLimit, charCount[currentChar]); 

        output += currentChar.repeat(maxRepeats);
        charCount[currentChar] -= maxRepeats;

        if (charCount[currentChar] === 0) {
            sortedChars.shift();
        } else {
            if (sortedChars.length > 1) {
                let nextChar = sortedChars[1];
                output += nextChar;
                charCount[nextChar]--;
                if (charCount[nextChar] === 0) {
                    sortedChars.splice(1, 1);
                }
            } else {
                break;
            }
        }
    }

    return output;
};
