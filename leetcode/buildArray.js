var buildArray = function(target, n) {
    let result = [];
    let newArr = [];
    let j = 0;
    for (let i = 1; i <= n; i++) {
        if (checkArr(target, newArr)) return result;
        result.push('push')
        newArr.push(i);
        if (target[j] !== i) {
            result.push("pop");
            newArr.pop(i);
            continue;
        }       
        j++;
    }

    return result;
}

var checkArr = function (arr1, arr2) {
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) return false;
    }
    return true;
}

console.log(buildArray([1,3], 3));
console.log(buildArray([1,2,3], 3));
console.log(buildArray([1,2], 4));
console.log(buildArray([2,3,4], 4));