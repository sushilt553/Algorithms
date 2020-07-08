// function largestContiguousSum(arr) {
//     let subArrays = findSubArray(arr);

//     let result = [];
//     let resultSum = 0;
//     for (let i = 0; i < subArrays.length; i++) {
//         let sum = findSum(subArrays[i]);
//         if (sum > resultSum) {
//             result = subArrays[i];
//             resultSum = sum;
//         }
//     }
//     return result;
// }

// function findSubArray(array) {
//     let subs = [];

//     for (let i = 0; i < array.length; i++) {
//         for (let j = i + 1; j <= array.length; j++) {
//             subs.push(array.slice(i, j));
//         }
//     }
//     return subs;
// }

// function findSum(arr) {
//     return arr.reduce((acc, ele) => acc + ele);
// }

function largestContiguousSum(arr) {
    let currentSum = 0;
    let maxSum = arr[0] || 0;

    for (let i = 0; i < arr.length; i++) {
        currentSum += arr[i];
        if (maxSum < currentSum) maxSum = currentSum;
        if (currentSum < 0) currentSum = 0;
    }
    return maxSum;
}

console.log(largestContiguousSum([1,-1,-2, 20]))