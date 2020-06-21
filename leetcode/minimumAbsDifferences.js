var minAbsoluteDifference = function(arr) {
    let sortedArr = arr.sort((a, b) => a - b);

    let minValue = Math.abs(sortedArr[1] - sortedArr[0]);
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            let ele = Math.abs(arr[j] - arr[i]);

            if (ele === minValue && j > i) {
                result.push([arr[i], arr[j]]);
            }
        }
    }
    return result;
}


console.log(minAbsoluteDifference([4,2,1,3]))
