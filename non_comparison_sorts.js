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
