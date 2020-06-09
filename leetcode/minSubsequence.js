const minSubsequence = (nums) => {
    let sum = nums.reduce((acc, ele) => acc + ele);
    let sequences = [];
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j <= nums.length; j++) {
            let subArr = nums.slice(i, j);
            let currentSum = subArr.reduce((acc, ele) => acc + ele);
            let remaining = sum;
            subArr.forEach((ele) => remaining -= ele);
            
            if (currentSum > remaining) {
                sequences.push(subArr);
            }
        }
    }

    let minLength = sequences[0].length;
    let subArr = sequences[0];

    for (let i = 0; i < sequences.length; i++) {
        if (sequences[i].length < minLength) {
            minLength = sequences[i].length;
            subArr = sequences[i];
        }
    }

    return subArr.sort((a, b) => b - a);
}

console.log(minSubsequence([4, 3, 10, 9, 8]));