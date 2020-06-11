var getNoZeroIntegers = function(n) {
    let result = [];
    let num = n - 1;
    if (num % 10 === 0) {
        num -= 1;
        result.push(2); 
        result.push(num);
    }else{
        result.push(1);
        result.push(num);
    }
    return result;
}

console.log(getNoZeroIntegers(2));
console.log(getNoZeroIntegers(11));
console.log(getNoZeroIntegers(10000));