var uniqueOccurrences = function(arr) {
    let hash = {};

    for (let i = 0; i < arr.length; i++) {
        if (hash[arr[i]]) {
            hash[arr[i]]++;
        }else{
            hash[arr[i]] = 1;
        }
    }
    let values = Object.values(hash);

    let set = new Set();

    for (let i = 0; i < values.length; i++) {
        if (set.has(values[i])) return false;
        set.add(values[i]);
    }
    return true;
}

console.log(uniqueOccurrences([1,2,2,1,1,3]))
console.log(uniqueOccurrences([1,2,2,2,1,1]))