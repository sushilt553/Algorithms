function sortArr(arr) {
    let start = 1;
    let end = arr.length;
    let newArr = [];
    for (let i = start; i <= end; i++) {
        newArr.push(i);
    }
    return newArr;
}

console.log(sortArr([5,3,4,1,2]));