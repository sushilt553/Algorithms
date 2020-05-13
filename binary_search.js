// function binarySearch(arr, target) {
//     if (arr.length === 0) return -1;

//     let midIdx = Math.floor(arr.length / 2);
//     let left = arr.slice(0, midIdx);
//     let right = arr.slice(midIdx + 1);

//     if (target < arr[midIdx]) {
//         return binarySearch(left, target);
//     }else if (target > arr[midIdx]) {
//         let foundIdx = binarySearch(right, target);
//         if (foundIdx === -1) {
//             return -1;
//         }else{
//             return midIdx + foundIdx + 1;
//         }
//     }else {
//         return midIdx
//     }
// }


// function binarySearch(arr, target) {

//     while (arr.length > 0) {
//         let midIdx = Math.floor(arr.length / 2);
//         let left = arr.slice(0, midIdx);
//         let right = arr.slice(midIdx + 1);
//         if (target < arr[midIdx]) {
//             arr = left;
//         }else if (target > arr[midIdx]) {
//             arr = right
//         }else{
//             return true;
//         }
//     }
//     return false;
// }

function binarySearch(arr, target) {
    let start = 0;
    let end = arr.length - 1;

    while (start <= end) {
        let mid = Math.floor((start + end) / 2);
        if (target === mid) {
            return mid;
        }else if(target < arr[mid]) {
            end = mid - 1;
        }else{
            start = mid + 1;
        }
    }
    return -1;
}

console.log(binarySearch([1,2,3,4,5,6], 3))
// console.log(binarySearch([1,2,3,4,5,6], 5))
console.log(binarySearch([1,2,3,4,5,6], -1))