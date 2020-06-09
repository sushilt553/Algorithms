function findLucky(arr) {
    let hash = {};

    for (let i = 0; i < arr.length; i++) {
        let num = arr[i];
        if (hash[num]) {
            hash[num] += 1;
        }else{
            hash[num] = 1;
        }
    }
    
    let array = [];
    for (let key in hash) {
        if (String(hash[key]) === key) array.push(key);
    }

    return Math.max(...array);
}

console.log(findLucky([2, 2, 3, 4]));