const minStartValue = (nums) => {
    let minStartValue = 1;
    let currentSum = minStartValue;

    let loop = true;
    while (loop) {
        loop = false;

        for (let i = 0; i < nums.length; i++) {
            currentSum += nums[i];
            if (currentSum < 1) {
                minStartValue += 1;
                currentSum = minStartValue;
                loop = true;
                break;
            }
        }
    }
    return minStartValue;
}

console.log(minStartValue([-3, 2, -3, 4, 2]));