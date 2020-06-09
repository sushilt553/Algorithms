const minSubsequence = (nums) => {
    nums = nums.sort((a, b) => b - a);
    let sum = nums.reduce((acc, ele) => acc + ele);
    let sequences = [];
    let currentSum = 0;
    while (currentSum <= sum) {
        let value = nums.shift();
        sequences.push(value);
        currentSum += value
        sum -= value;
    }
    return sequences;
}

console.log(minSubsequence([4, 3, 10, 9, 8]));