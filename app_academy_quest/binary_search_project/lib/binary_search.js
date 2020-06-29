// function binarySearch(array, target) {
//     if (array.length === 0) return false;

//     let midIdx = Math.floor(array.length / 2);
//     let leftArr = array.slice(0, midIdx);
//     let rightArr = array.slice(midIdx + 1);

//     if (array[midIdx] > target) {
//         return binarySearch(leftArr, target);
//     }else if (array[midIdx] < target) {
//         return binarySearch(rightArr, target);
//     }else{
//         return true
//     }
// }

function binarySearch(array, target) {
    if (array.length === 0) return false;

    let leftIdx = 0;
    let rightIdx = array.length;

    while (leftIdx <= rightIdx) {
        let midIdx = Math.floor((leftIdx + rightIdx) / 2);

        if (array[midIdx] > target) {
            rightIdx = midIdx - 1;
        }else if (array[midIdx] < target) {
            leftIdx = midIdx + 1;
        }else if (array[midIdx] === target) {
            return true;
        }
    }
    return false;
}

function binarySearchIndex(array, target) {

}


module.exports = {
    binarySearch,
    binarySearchIndex
};