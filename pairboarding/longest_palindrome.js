function longestPalindrome(str) {
    let start = 0;
    let end = 0;
    let length = 0;

    for (let i = 0; i < str.length; i++){
        for (let j = i + 1; j <= str.length; j++) {
            let sub = str.slice(i, j);
            
            if (checkPalindrome(sub) && sub.length > length) {
                start = i;
                end = j - 1;
                length = sub.length
            }
        }
    }
    return [start, end];
}

function checkPalindrome(str) {
    let start = 0;
    let end = str.length - 1;

    while (start < end) {
        if (str[start] !== str[end]) return false;
        start++;
        end--;
    }
    return true;
}

console.log(longestPalindrome("acapellall"))