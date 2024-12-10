/**
 * @param {string} s
 * @return {number}
 */
function maximumLength(s) {
  let n = s.length;
  let longestLength = -1;

  for (let length = 1; length <= n; length++) {
    let substringsCount = {};

    for (let i = 0; i <= n - length; i++) {
      let sub = "";

      for (let j = i; j < i + length; j++) {
        sub += s[j];
      }

      let isSpecial = true;
      for (let k = 1; k < sub.length; k++) {
        if (sub[k] !== sub[0]) {
          isSpecial = false;
          break;
        }
      }

      if (isSpecial) {
        if (!substringsCount[sub]) {
          substringsCount[sub] = 0;
        }
        substringsCount[sub]++;
      }
    }

    for (let sub in substringsCount) {
      if (substringsCount[sub] >= 3) {
        longestLength = Math.max(longestLength, length);
      }
    }
  }

  return longestLength;
}
