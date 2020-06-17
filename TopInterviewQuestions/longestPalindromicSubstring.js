var longestPalindrome = function(s) {
    if (s.length === 0) return "";
    let nonReversed = s;    
    let reversed = s.split("").reverse().join("");
    let nonReversedSubs = substrings(nonReversed);
    let reversedSubs = substrings(reversed);

    let hash = {};

    for (let i = 0; i < reversedSubs.length; i++) {
        if (nonReversedSubs.includes(reversedSubs[i]) && isPalindrome(reversedSubs[i])) hash[reversedSubs[i].length] = reversedSubs[i];
    }

    let maxLength = Math.max(...Object.keys(hash));
    return hash[maxLength];
}

function substrings(str) {
    let subs = [];

    for (let i = 0; i < str.length; i++) {
        for (let j = i + 1; j <= str.length; j++) {
            let s = str.slice(i, j);
            subs.push(s);
        }
    }
    return subs;
}

function isPalindrome(str) {
    let start = 0;
    let end = str.length - 1;

    while (start <= end) {
        if (str[start] !== str[end]) return false;
        start++;
        end--;
    }
    return true;
}

console.log(longestPalindrome("abac"))