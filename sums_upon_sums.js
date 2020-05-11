// I give you a scrambled list of n unique integers between o and n. Tell me what number is missing.

function whichMissing1(arr) {
    let sortedArr = arr.sort((a, b) => a - b);

    for (let i = 0; i < sortedArr.length; i++) {
        if (sortedArr[i] !== i) return i;
    }

    return arr.length;
}

console.log(whichMissing1([4,2,1,5,0]));