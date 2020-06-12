var replaceElements = function(arr) {
    let newArr = [];
    let maxEle;
    while (arr.length > 0) {
        arr.shift();
        maxEle = findMax(arr);
        newArr.push(maxEle);
    }
    newArr[newArr.length - 1] = -1;
    return newArr;
}

var findMax = function(arr) {
    return Math.max(...arr);
}

console.log(replaceElements([17,18,5,4,6,1]));