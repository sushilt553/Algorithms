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
let arr1 = [2, 3, 1, 3, 2, 4, 6, 7, 9, 2, 19];
let arr2 = [2, 1, 4, 3, 9, 6];

console.log(relativeSortArray(arr1, arr2));