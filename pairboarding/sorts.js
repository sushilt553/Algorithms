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

function sort3(arr) {
    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    let sortedArr = [];

    for (let i = 0; i < longestStr(arr); i++) {
        let buckets = new Array(27).fill().map(() => new Array());
        for (let j = 0; j < arr.length; j++) {
            if (i < arr[j].length) {
                let index = alphabet.indexOf(arr[j][arr[j].length - 1 - i]) + 1;
                buckets[index].push(arr[j]);
            }else{
                buckets[0].push(arr[j]);
            }
        }
        sortedArr = [].concat(...buckets);
    }
    return sortedArr;
}

function longestStr(arr) {
    let max = 0;

    for (let i = 0; i < arr.length; i++) {
        if (max < arr[i].length) {
            max = arr[i].length;
        }
    }
    return max;
}

console.log(sort1([1,3,2,4,7,6,5]));
console.log(sort2([1,3,2,4,7,6,5]));
console.log(sort3(["abcd","ef", "ghi"]));