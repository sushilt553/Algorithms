var maxScore = function(s) {
    let max = 0;
    for (let i = 0; i < s.length; i++) {
        let left = s.slice(0, i + 1);
        let right = s.slice(i);
        let sum = calculateSum(left, right);
        if (sum > max) max = sum;
    }
    return max;
}

var calculateSum = function(left, right) {
    let sum = 0;
    for (let i = 0; i < left.length; i++) {
        if (left[i] === "0") sum++;
    }

    for (let i = 0; i < right.length; i++) {
        if (right[i] === "1") sum++;
    }

    return sum;
}

console.log(maxScore("011101"))