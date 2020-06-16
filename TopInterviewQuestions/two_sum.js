var twoSum = function(arr, target) {

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[i] + arr[j] === target && j > i) {
                return [i, j];
            }
        }
    }
}

var twoSum = function(arr, target) {
    let hash = {};

    for (let i = 0; i < arr.length; i++) {
        hash[arr[i]] = i;
    }

    for (let i = 0; i < arr.length; i++) {
        let remaining = target - arr[i];
        if (hash[remaining] && hash[remaining] !== i) return [i, hash[remaining]];
    }
}

console.log(twoSum([2,7,11,15], 9))