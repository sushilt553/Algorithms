function longestPalindrome(str) {
    let maxLength = 0;
    let index;

    for (let i = 0; i < str.length; i++) {
        for (let j = i + 1; j <= str.length; j++) {
            let sub = str.slice(0, j);
            if (sub === sub.split("").reverse().join("") && sub.length > maxLength) {
                maxLength = sub.length;
                index = [i, j - 1];
            }
        }
    }
    return index;
}

console.log(longestPalindrome('acapella'));
console.log(longestPalindrome('a'));


