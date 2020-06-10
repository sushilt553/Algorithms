var removePalindromeSub = function(s) {
    if (s.length === 0) return 0;
    let left = 0;
    let right = s.length - 1;

    while (left < right) {
        if (s[left] === s[right]) {
            left++;
            right--;
        }else{
            return 2;
        }
    }
    return 1;
}

console.log(removePalindromeSub("ababa"))
console.log(removePalindromeSub("abb"))
console.log(removePalindromeSub("baabb"))