function weightedRandomIndex(arr) {
    let sum = arr.reduce((acc, ele) => acc + ele);
    const val = Math.floor(Math.random() * sum);

    let cumulativeSum = 0;

    for (let i = 0; i < arr.length; i++) {
        cumulativeSum += arr[i];

        if (val < cumulativeSum) return i;
    }
    return cumulativeSum;
}

console.log(weightedRandomIndex([4,6,8]))