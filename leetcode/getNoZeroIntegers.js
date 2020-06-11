var getNoZeroIntegers = function(n) {
    let result = [];
    let num = n - 1;
    if (checkZero(num)) {
        let i = 1
        while (checkZero(num) || checkZero(i)){
            num -= 1;
            ++i; 
        }
        result.push(i);
        result.push(num)
    }else{
        result.push(1);
        result.push(num);
    }
    return result;
}

var checkZero = (n) => {
    let s = String(n);
    for (let i = 0; i < s.length; i++) {
        if (s[i] === "0") return true;
    }
    return false;
}

console.log(getNoZeroIntegers(2));
console.log(getNoZeroIntegers(11));
console.log(getNoZeroIntegers(10000));
console.log(getNoZeroIntegers(1010));