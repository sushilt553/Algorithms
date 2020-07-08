function longest_common_substring(str1, str2) {
    let subs1 = substrings(str1);
    let subs2 = substrings(str2);
    let longestSubstring = "";

    for (let i = 0; i < subs1.length; i++) {
        if (subs2.includes(subs1[i])) {
            if (longestSubstring.length < subs1[i].length) longestSubstring = subs1[i];
        }
    }
    return longestSubstring;
}

function substrings(str) {
    let subs = [];

    for (let i = 0; i < str.length; i++) {
        for (let j = i + 1; j <= str.length; j++) {
            let sub = str.slice(i, j);
            subs.push(sub);
        }
    }
    return subs;
}
console.log(longest_common_substring("abcd", "bcd"))