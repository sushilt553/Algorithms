var findSpecialInteger = function(arr) {
    let length = arr.length;
    let times = length * 0.25;
    let hash = {};

    for(let i = 0; i < arr.length; i++) {
        if (hash[arr[i]]) {
            hash[arr[i]]++;
        }else{
            hash[arr[i]] = 1;
        }
    }

    for (let key in hash) {
        if (hash[key] > times) return key;
    }
}

console.log(findSpecialInteger([1,2,2,6,6,6,6,7,10]))