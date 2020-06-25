// Give a string s, count the number of non - empty(contiguous) substrings that have the same number of 0's and 1's, and all the 0's and all the 1's in these substrings are grouped consecutively.
// Substrings that occur multiple times are counted the number of times they occur.
// Example 1:
// Input: "00110011"
// Output: 6
// Explanation: There are 6 substrings that have equal number of consecutive 1's and 0's: "0011", "01", "1100", "10", "0011", and "01".
// Notice that some of these substrings repeat and are counted the number of times they occur.
// Also, "00110011" is not a valid substring because all the 0's (and 1's) are not grouped together.

var countBinarySubstrings = function (s) {
    let count = 1, sum = 0, prevCount = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === s[i + 1]) {
            count += 1;
        }
        else {
            if (prevCount) {
                sum += prevCount <= count ? prevCount : count;
            }
            prevCount = count;
            count = 1;
        }
    }
    return sum;
};

console.log(countBinarySubstrings("010001"))
console.log(countBinarySubstrings("000111"))