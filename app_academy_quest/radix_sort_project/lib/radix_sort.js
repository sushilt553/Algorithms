function findNumber(num, place) {
    return Number(String(num).split("").reverse()[place]);
}

function numberLength(num) {
    return String(num).length;
}

function maxLength(arr) {
    let max = numberLength(arr[0]);

    for (let i = 1; i < arr.length; i++) {
        let currentLength = numberLength(arr[i]);
        if (currentLength > max) max = currentLength;
    }

    return max;
}

function radixSort(arr) {

    if (!Array.isArray(arr)) return null;

    for (let i = 0; i < maxLength(arr); i++) {
        let buckets = new Array(10).fill().map(() => new Array());
        for (let j = 0; j < arr.length; j++) {
            if (numberLength(arr[j]) > i) {
                let num = findNumber(arr[j], i);
                buckets[num].push(arr[j]);
            }else{
                buckets[0].push(arr[j]);
            }
        }
        arr = [].concat(...buckets);
    }

    return arr;
}

module.exports = {
    radixSort
};