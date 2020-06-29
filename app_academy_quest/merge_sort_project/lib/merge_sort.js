function merge(array1, array2) {
    let merged = [];

    while (array1.length || array2.length) {
        let first = array1.length > 0 ? array1[0] : Infinity;
        let second = array2.length > 0 ? array2[0] : Infinity;

        let next;

        if (first < second) {
            next = array1.shift();
        }else{
            next = array2.shift();
        }
        merged.push(next);
    }
    return merged;
}

function mergeSort(array) {
    if (array.length <= 1) return array;

    let midIdx = Math.floor(array.length / 2);
    let leftArr = array.slice(0, midIdx);
    let rightArr = array.slice(midIdx);

    let sortedLeft = mergeSort(leftArr);
    let sortedRight = mergeSort(rightArr);

    return merge(sortedLeft, sortedRight);
}

module.exports = {
    merge,
    mergeSort
};