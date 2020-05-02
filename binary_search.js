function binarySearch(arr, target) {
    if (arr.length === 0) return -1;

    let midIdx = Math.floor(arr.length / 2);
    let left = arr.slice(0, midIdx);
    let right = arr.slice(midIdx + 1);

    if (target < arr[midIdx]) {
        return binarySearch(left, target);
    }else if (target > arr[midIdx]) {
        let foundIdx = binarySearch(right, target);
        if (foundIdx === -1) {
            return -1;
        }else{
            return midIdx + foundIdx + 1;
        }
    }else {
        return midIdx
    }
}

function binarySearch(arr, target) {

    let midIdx = Math.floor(arr.length / 2);
    let left = arr.slice(0, midIdx);
    let right = arr.slice(midIdx + 1);
}

console.log(binarySearch([1,2,3,4,5,6], 4))
console.log(binarySearch([1,2,3,4,5,6], 7))