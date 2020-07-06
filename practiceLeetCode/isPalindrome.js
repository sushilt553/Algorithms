function isPalindrome(x) {
    if (x < 0) return false;
    let reversed = "";
    let num = x;
    while (num > 0) {
        reversed += num % 10;
        num = Math.floor(num / 10);
    }

    if (Number(reversed) === x) {
        return true;
    }else{
        return false;
    }
}

function isPalindrome(x) {
    if ( x < 0 || (x % 10 === 0 && x !== 0)) return false;

    let reversed = 0;
    while (x > reversed) {
        reversed = reversed * 10 + (x % 10);
        x = Math.floor(x / 10);
    }

    return reversed === x || x === Math.floor(reversed / 10);
}

console.log(isPalindrome(121));
console.log(isPalindrome(1211));
console.log(isPalindrome(-121));