function canWin(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (checkLeft(arr, i, 0) || checkRight(arr, i, 0)) {
            // console.log(checkLeft(arr, i, 0))
            // console.log(checkRight(arr, i, 0))
            return true;
        }
    }
    return false;
}

function checkLeft(arr, idx, val = 0) {
    let index = idx - arr[idx]
    if (index < 0 || arr[idx] === 0) return false;
    return arr[index] === val;
}

function checkRight(arr, idx, val = 0) {
    let index = idx + arr[idx];
    if (index >= arr.length || arr[idx] === 0) return false;
    return arr[index] === val;
}

console.log(canWin([1,0,1], 0));
console.log(canWin([1,2,0], 0));
