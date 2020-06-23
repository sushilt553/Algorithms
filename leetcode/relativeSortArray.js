var relativeSortArray = function(arr1, arr2) {
    let hash = {};

    for (let i = 0; i < arr1.length; i++) {
        if (!hash[arr1[i]]) hash[arr1[i]] = 0;

        hash[arr1[i]]++;
    }

    let sortedArr = Object.keys(hash);
    let newArr = [];

    for (let i = 0; i < arr2.length; i++) {
        let ele = arr2[i];

        while (hash[ele]) {
            newArr.push(ele);
            hash[ele]--;
        }
    }

    sortedArr.forEach((ele) => {
        if (!newArr.includes(ele)) {
            while (hash[ele]) {
                newArr.push(Number(ele));
                hash[ele]--;
            }
        }
    }) 
    return newArr;
}

var relativeSortArray = function(arr1, arr2) {

    let hash = {};
    let restArr = [];
    let result = [];

    for (let i = 0; i < arr2.length; i++) {
        hash[arr2[i]] = 0;
    }

    for (let i = 0; i < arr1.length; i++) {
        if (hash[arr1[i]] >= 0) {
            hash[arr1[i]]++;
        }else{
            restArr.push(arr1[i]);
        }
    }

    for (let i = 0; i < arr2.length; i++) {
        while (hash[arr2[i]]) {
            result.push(arr2[i]);
            hash[arr2[i]]--;
        }
    }

    return result.concat(restArr.sort((a, b) => a - b));
    
}


let arr1 = [2, 3, 1, 3, 2, 4, 6, 7, 9, 2, 19];
let arr2 = [2, 1, 4, 3, 9, 6];

console.log(relativeSortArray(arr1, arr2));