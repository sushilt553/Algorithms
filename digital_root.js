function digitalRoot(num) {
    if (num < 10) return num;
    while (num >= 10) {
        num = digitalRootSum(num);
    }
    return num;
}

function digitalRootSum(n) {
    let sum = 0;

    while (n > 0) {
        let num = n % 10;
        sum += num;
        n = Math.floor(n / 10);
    }

    return sum;
}

// console.log(digitalRoot(9));
// console.log(digitalRoot(10));
// console.log(digitalRoot(12));

