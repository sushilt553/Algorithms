// I give you a scrambled list of n unique integers between o and n. Tell me what number is missing.

function whichMissing1(arr) {
    let sortedArr = arr.sort((a, b) => a - b);

    for (let i = 0; i < sortedArr.length; i++) {
        if (sortedArr[i] !== i) return i;
    }

    return arr.length;
}

function whichMissing2(arr) {
    let max = Math.max(...arr);
    let set = new Set();

    for (let i = 0; i < arr.length; i++) {
        set.add(arr[i]);
    }

    for (let i = 0; i <= max; i++) {
        if (!set.has(i)) return i;
    }
    return max;
}

function whichMissing3(arr) {
    let sum = 0;
    for (let i = 0; i <= arr.length; i++) {
        sum += i
    }

    for (let i = 0; i < arr.length; i++) {
        sum -= arr[i]
    }
    return sum;
}

console.log(whichMissing1([4,2,1,5,0]));
console.log(whichMissing2([4,2,1,5,0]));
console.log(whichMissing3([4,2,1,5,0]));
console.log(whichMissing3([4,2,1,5,3]));
console.log(whichMissing3([0,2,1,5,3]));