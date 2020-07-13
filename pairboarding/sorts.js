const sort1 = (arr) => {
    let sortedArr = [];
    for (let i = 1; i <= arr.length; i++) {
        sortedArr.push(i);
    }
    return sortedArr;
}

const sort2 = (arr) => {
    let max = Math.max(...arr);
    let buckets = new Array(max + 1).fill(0);

    for (let i = 0; i <= arr.length; i++) {
        buckets[arr[i]]++;
    }

    let sortedArr = [];

    for (let i = 0; i < buckets.length; i++) {
        while (buckets[i]) {
            sortedArr.push(i);
            buckets[i]--;
        }
    }
    return sortedArr;
}

console.log(sort1([1,3,2,4,7,6,5]));
console.log(sort2([1,3,2,4,7,6,5]));