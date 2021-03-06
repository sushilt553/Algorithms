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

//recursive memoization

function canWin(arr, pos = 0, seen = {}) {
    if (pos < 0 || pos >= arr.length || seen[pos]) return false;
    if (arr[pos] === 0) return true;

    seen[pos] = true;

    return canWin(arr, pos + arr[pos], seen) || canWin(arr, pos - arr[pos], seen);
}

console.log(canWin([1,0,1], 0));
console.log(canWin([1,2,0], 0));
