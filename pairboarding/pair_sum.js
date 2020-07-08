// function pairSum1(arr, k) {
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

function pairSum2(arr, k) {
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

function pairSum3(arr, k) {
    let seen = new Set();
    let pairs = new Set();

    for (let i = 0; i < arr.length; i++) {
        let rem = k - arr[i];
        if (seen.has(rem)) {
            pairs.add([Math.min(rem, arr[i]), Math.max(rem, arr[i])]);
        }

        seen.add(arr[i]);
    }
    return pairs;
}

// console.log(pairSum1([1,2,-1], 0))
console.log(pairSum2([1,2,-1], 0))
console.log(pairSum3([1,2,-1], 0))
console.log("next")
// console.log(pairSum1([1,2,-1,-1], 0))
console.log(pairSum2([1,2,-1,-1], 0))
console.log(pairSum3([1,2,-1,-1], 0))
console.log("next")
// console.log(pairSum1([1,2,-1,-1,-2], 0))
console.log(pairSum2([1,2,-1,-1,-2], 0))
console.log(pairSum3([1,2,-1,-1,-2], 0))
console.log("next")
// console.log(pairSum1([1,2,-1,-1,-2], -1))
console.log(pairSum2([1,2,-1,-1,-2], -1))
console.log(pairSum3([1,2,-1,-1,-2], -1))