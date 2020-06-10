var numberOfSteps = function(num) {
    let count = 0;

    while (num !== 0) {
        if (num % 2 === 0) {
            num = num / 2;
            count++;
        }else{
            num = num - 1;
            count++;
        }
    }
    return count;
}

console.log(numberOfSteps(14));
console.log(numberOfSteps(8));
console.log(numberOfSteps(123));