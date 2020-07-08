// function pairSum(arr, k) {
//     let hash = {};
//     let result = [];

//     for (let i = 0; i < arr.length; i++) {
//         hash[arr[i]] = i;
//     }

//     for (let i = 0; i < arr.length; i++) {
//         let rem = k - arr[i];

//         if (hash[rem] && hash[rem] !== i) {
//             if (rem > arr[i]) {
//                 result.push([arr[i], rem]);
//             }else{
//                 result.push([rem, arr[i]]);
//             }
//         }
//     }

//     return result;
// }

function pairSum(arr, k) {
    let sortedArr = arr.sort((a, b)=> a - b);
    let result = [];

    for (let i = 0; i < sortedArr.length; i++) {
        for (let j = 0; j < sortedArr.length; j++) {
            if (sortedArr[j] + sortedArr[i] === k&& j > i) {
                result.push([sortedArr[i], sortedArr[j]]);
            }
        }
    }
    return result;
}

console.log(pairSum([1,2,3,1,2], 3))