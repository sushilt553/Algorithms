var subtractProductAndSum = function(n) {
    let [product, sum] = productSum(n);
    return product - sum;
}

function productSum(num) {
    let product = 1;
    let sum = 0;
    let n;
    while (num > 0) {
        n = num % 10;
        sum += n;
        product *= n;
        num = Math.floor(num / 10);
    }
    return [product, sum];
}

console.log(subtractProductAndSum(234));
console.log(subtractProductAndSum(4421));