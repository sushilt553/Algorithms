var minAbsoluteDifference = function(arr) {
    let sortedArr = arr.sort((a, b) => a - b);

    let minValue = findMinValue(sortedArr);
    let result = [];

    for (let i = 0; i < arr.length - 1; i++) {
        let ele = Math.abs(arr[i] - arr[i + 1]);
        if (ele === minValue) {
            result.push([arr[i], arr[i + 1]]);
        }
    }
    return result;
}

function findMinValue(arr) {
    let minVal = Infinity;

    for (let i = 0; i < arr.length - 1; i++) {
        let ele = Math.abs(arr[i] - arr[i + 1]);

        if (ele < minVal) minVal = ele;
    }
    return minVal
}

console.log(minAbsoluteDifference([4,2,1,3]))
