const sort1 = (arr) => {
    let sortedArr = [];
    for (let i = 1; i <= arr.length; i++) {
        sortedArr.push(i);
    }
    return sortedArr;
}

console.log(sort1([1,3,2,4,7,6,5]));