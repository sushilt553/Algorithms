function digitalRoot(num) {
    if (num < 10) return num;

    while (num > 10) {
        num = helper(num);
    };

    return num;
}

function helper(n) {
    let sum = 0;

    while (n > 0) {
        let num = n % 10;
        sum += num;
        n = Math.floor(n / 10);
    }
    return sum;
}

console.log(digitalRoot(12345))