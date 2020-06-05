var canBeEqual = function(target, arr) {
    let hash = {};

    for (let i = 0; i < target.length; i++) {
        let num = target[i];
        if (hash[num]) {
            hash[num]++;
        }else{
            hash[num] = 1;
        }
    }

    for (let i = 0; i < arr.length; i++) {
        let num = arr[i];
        if (hash[num]) {
            hash[num]--;
        } else {
            hash[num] = 1;
        }
    }

    for (let key in hash) {
        if (hash[key]) return false;
    }

    return true;
}

console.log(canBeEqual([1,2,3,4], [2,4,1,3]));
console.log(canBeEqual([1,2,3,4], [2,4,1,5]));