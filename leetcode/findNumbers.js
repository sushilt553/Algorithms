var findNumbers = function(nums) {
    let count = 0;

    nums.forEach((ele) => {
        if (countEvens(ele)) count++;
    })

    return count;
}

var countEvens = function(n) {
    let count = 0;
    while (n > 0) {
        count++;
        n = Math.floor(n / 10);
    }
    if (count % 2 === 0) {
        return true;
    }else{
        return false;
    }
}

console.log(findNumbers([12,345,2,6,7896]));