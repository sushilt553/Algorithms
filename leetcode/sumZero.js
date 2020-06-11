var sumZero = function(n) {
    let result = [];

    for (let i = 0; i < n; i++) {
        if (i === n - 1) {
            let total = sum(result);
            result.push(-total);
            break;
        }
        result.push(i);
    }
    return result;
}

var sum = function(arr) {
    return arr.reduce((acc, ele) => acc + ele);
}

console.log(sumZero(5));
console.log(sumZero(3));