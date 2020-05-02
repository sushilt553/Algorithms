function longestCommonSubstring(str1, str2) {
    let subs1 = substrings(str1);
    let subs2 = substrings(str2);

    let common = [];

    subs1.forEach((sub) => {
        if (subs2.includes(sub)) common.push(sub);
    })
    let max = common[0];

    common.forEach((ele) => {
        if (max.length < ele.length) max = ele;
    })
    return max;
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

console.log(longestCommonSubstring("abcde", "bcde"));