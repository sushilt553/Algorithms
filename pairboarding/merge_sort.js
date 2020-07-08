function mergeSort(arr) {
    if (arr.length <= 1) return arr;

    let midIdx = Math.floor(arr.length / 2);
    let leftArr = arr.slice(0, midIdx);
    let rightArr = arr.slice(midIdx);

    let sortedLeft = mergeSort(leftArr);
    let sortedRight = mergeSort(rightArr);

    return merge(sortedLeft, sortedRight);
}

function merge(left,right) {
    let merged = [];

    while (left.length || right.length) {
        let first = (left.length) ? left[0] : Infinity;
        let second = (right.length) ? right[0] : Infinity;

        let next;
        if (first < second) {
            next = left.shift();
        }else{
            next = right.shift();
        }
        merged.push(next);
    }
    return merged;
}

console.log(mergeSort([1]))
console.log(mergeSort([3,2]))
console.log(mergeSort([5,4,3,2,5,4,3,2,1]))