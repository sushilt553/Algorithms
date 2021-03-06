// function isPalindrome(str) {
//     let start = 0;
//     let end = str.length - 1;

//     while (start <= end) {
//         if (str[start] !== str[end]) return false;
//         start++;
//         end--;
//     }

//     return true;
// }

function isPalindrome(str) {
    return str.split("").reverse().join("") === str;
}

console.log(isPalindrome("a"))
console.log(isPalindrome("aba"))
console.log(isPalindrome("abc"))
console.log(isPalindrome("abba"))