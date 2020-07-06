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

console.log(isPalindrome(121));
console.log(isPalindrome(1211));
console.log(isPalindrome(-121));