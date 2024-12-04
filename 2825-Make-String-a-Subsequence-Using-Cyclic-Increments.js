/**
 * @param {string} str1
 * @param {string} str2
 * @return {boolean}
 */
var canMakeSubsequence = function (str1, str2) {
    let str1Index = 0;
    let str2Index = 0;
    const nextCyclicChar = (char) =>
        String.fromCharCode(char.charCodeAt(0) + 1 > 122 ? 97 : char.charCodeAt(0) + 1);
		
    while (str1[str1Index] !== undefined && str2[str2Index] !== undefined) {
        if (
            str1[str1Index] === str2[str2Index] ||
            nextCyclicChar(str1[str1Index]) === str2[str2Index]
        ) {
            str2Index++;
        }
        str1Index++;
    }
	
    return str2[str2Index] === undefined ? true : false;
};