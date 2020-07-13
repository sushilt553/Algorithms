function canWin(arr, pos = 0, seen = {}) {
    if (pos < 0 || pos > arr.length - 1 || seen[pos]) return false;
    if (arr[pos] === 0) return true;

    seen[pos] = true;

    return canWin(arr, pos + arr[pos], seen) || canWin(arr, pos - arr[pos], seen);
}

console.log(canWin([1,2,0], 0));
console.log(canWin([1,0,1], 0));