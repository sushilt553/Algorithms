function countingSort(arr, max) {
    if (arr.length <= 1) return arr;

    let buckets = new Array(max + 1).fill(0);

    for (let i = 0; i < arr.length; i++) {
        buckets[arr[i]]++;
    }
    let result = [];

    for (let i = 0; i < buckets.length; i++) {
        while (buckets[i] > 0) {
            result.push(i);
            buckets[i]--;
        }
    }
    return result;
}


module.exports = {
    countingSort
};