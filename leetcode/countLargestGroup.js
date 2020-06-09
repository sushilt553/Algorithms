const countLargestGroup = (n) => {
    let hash = {};

    for (let i = 1; i <= n; i++) {
        let sum = findSum(i);
        if (hash[sum]) {
            hash[sum].push(i);
        }else{
            hash[sum] = [i];
        }
    }
    
    let countHash = {};

    for (let key in hash) {
        let length = hash[key].length;

        if (countHash[length]) {
            countHash[length] += 1;
        }else{
            countHash[length] = 1;
        }
    }

    return countHash[Math.max(...Object.keys(countHash))];
}

const findSum = (num) => {
    let sum = 0;

    while (num > 0) {
        let n = num % 10;
        sum += n;
        num = Math.floor(num / 10);
    }
    return sum;
}

console.log(countLargestGroup(13));
console.log(countLargestGroup(2));