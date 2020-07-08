// const binarySearch = (arr, target) => {
//     if (arr.length === 0) return false;

//     let midIdx = Math.floor(arr.length / 2);
//     let leftArr = arr.slice(0, midIdx);
//     let rightArr = arr.slice(midIdx + 1);

//     if (arr[midIdx] === target) {
//         return true;
//     }else if (target < arr[midIdx]) {
//         return binarySearch(leftArr, target);
//     }else{
//         return binarySearch(rightArr, target);
//     }
// }

// const binarySearch = (arr, target) => {
//     let start = 0; 
//     let end = arr.length;

//     while (start <= end) {
//         let midIdx = Math.floor((start + end) / 2);

//         if (arr[midIdx] === target) {
//             return true;
//         }else if (target < arr[midIdx]) {
//             end = midIdx - 1;
//         }else{
//             start = midIdx + 1
//         }
//     }
//     return false;
// }

// const binarySearch1 = (arr, target) => {
//     if (arr.length === 0) return -1;

//     let midIdx = Math.floor(arr.length / 2);
//     let leftArr = arr.slice(0, midIdx);
//     let rightArr = arr.slice(midIdx + 1);

//     if (arr[midIdx] === target) {
//         return midIdx;
//     }else if (target < arr[midIdx]) {
//         return binarySearch1(leftArr, target);
//     }else{
//         let foundIdx = binarySearch1(rightArr, target);

//         if (foundIdx === -1) {
//             return -1;
//         }else{
//             return foundIdx + midIdx + 1;
//         }
//     }
// }

const binarySearch2 = (arr, target) => {
    let start = 0;
    let end = arr.length;

    while (start <= end) {
        let midIdx = Math.floor((start + end) / 2);

        if (arr[midIdx] === target) {
            return midIdx;
        }else if (target < arr[midIdx]) {
            end = midIdx - 1;
        }else{
            start = midIdx + 1;
        }
    }
    return -1;
}

// console.log(binarySearch([1,2,3,4,5], 4))
// console.log(binarySearch([1,2,3,4,5], 6))
// console.log(binarySearch([1,2,3,4,5], 3))

// console.log(binarySearch1([1,2,3,4,5], 4))
// console.log(binarySearch1([1,2,3,4,5], 6))
// console.log(binarySearch1([1,2,3,4,5], 3))

console.log(binarySearch2([1,2,3,4,5], 4))
console.log(binarySearch2([1,2,3,4,5], 6))
console.log(binarySearch2([1,2,3,4,5], 3))