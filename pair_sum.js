function pairSum(arr, k) {
    let sortedArr = arr.sort((a, b) => a - b);

    let newArr = [];

    for (let i = 0; i < sortedArr.length; i++) {
        for (let j = 0; j < sortedArr.length; j++) {
            let sum = sortedArr[i] + sortedArr[j]
            if ( sum === k && j > i) {
                newArr.push([sortedArr[i], sortedArr[j]]);
            }
        }
    }
    return newArr;
}

console.log(pairSum([1,2,3,3,4,5], 6));