var checkIfExist = function(arr) {
    let doubledArr = arr.map((ele) => ele * 2);

    for (let i = 0; i < doubledArr.length; i++) {
        if (arr.includes(doubledArr[i])) return true;
    }

    return false;
}

console.log(checkIfExist([10,2,5,3]));
console.log(checkIfExist([7,1,14,11]));
console.log(checkIfExist([3,1,7,11]));