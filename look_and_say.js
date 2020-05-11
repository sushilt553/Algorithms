function lookAndSay(arr) {
    let newArr = [];

    for (let i = 0; i < arr.length; i++) {
        let count = 1;
        let j = i + 1;
        while (arr[j] === arr[i]) {
            count++;
            j++;
        }
        newArr.push([count, arr[i]]);
    }
    return newArr;
}

console.log(lookAndSay([1]));
console.log(lookAndSay([1, 2]));