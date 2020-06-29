function quickSort(array) {
    if (array.length <= 1) return array;

    let pivotEle = array.shift();
    let leftArr = array.filter((ele) => ele < pivotEle);
    let rightArr = array.filter((ele) => ele >= pivotEle);

    return quickSort(leftArr).concat([pivotEle], quickSort(rightArr));

}


module.exports = {
    quickSort
};