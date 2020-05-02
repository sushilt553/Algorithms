// function largestContiguousSubsum(arr) {
//     let subArr = subarrays(arr);
//     let max = -Infinity;

//     subArr.forEach((arr) => {
//         let subarrSum = arr.reduce((a, b) => a + b)
//         if ( subarrSum > max) {
//             max = subarrSum
//         }
//     })
//     return max;
// }

// function subarrays(arr) {
//     let subs = [];

//     for (let i = 0; i < arr.length; i++) {
//         for (let j = i + 1; j <= arr.length; j++) {
//             let subarr = arr.slice(i, j);
//             subs.push(subarr);
//         }
//     }
//     return subs;
// }

function largestContiguousSubsum(arr) {
    let max = arr[0] || 0;
    let sum = 0;

    for (let i = 1; i < arr.length; i++) {
        sum += arr[i];
        if (sum > max) {
            max = sum;
        }else if (sum < 0) {
            sum = 0;
        }
    }
    return max;
}

console.log(largestContiguousSubsum([-1,10,3]));