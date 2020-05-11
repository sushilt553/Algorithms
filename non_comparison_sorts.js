function sortArr(arr) {
    let start = 1;
    let end = arr.length;
    let newArr = [];
    for (let i = start; i <= end; i++) {
        newArr.push(i);
    }
    return newArr;
}

//Counting Sort algorithm
function sortArr1(arr, max) {
    let buckets = new Array(max + 1).fill(0);

    arr.forEach(ele => buckets[ele]++);
    
    let newArr = [];
    for (let i = 0; i < buckets.length; i++) {
        while (buckets[i] > 0) {
            newArr.push(i);
            buckets[i]--;
        }
    }
    return newArr;
}

// console.log(sortArr([5,3,4,1,2]));
console.log(sortArr1([12,5,6,1,2], 12));

function makeBuckets() {
    return new Array(27).fill().map(() => new Array())
}


function maxLength(strings) {
    let length = 0;

    strings.forEach((str) => {
        if (str.length > length) {
            length = str.length;
        }
    })
    return length;
}


function sort3(arr) {
    if (arr.length === 0) return arr;

    let sortedArr = [];
    let max = maxLength(arr);
    let alphabet = "abcdefghijklmnopqrstuvwxyz"

    for (let i = max - 1; i >= 0; i--) {
        let buckets = makeBuckets();
        for (let j = 0; j < arr.length; j++) {
            if (arr[j].length > i) {
                let char = arr[j][i];
                let index = alphabet.indexOf(char) + 1;
                buckets[index].push(arr[j]);
            } else {
                buckets[0].push(arr[j]);
            }
        }
        sortedArr = [].concat(...buckets);
    }

    return sortedArr;
}
