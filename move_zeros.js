function moveZeros(arr) {
    let left = 0;
    let right = arr.length - 1;

    let bool = true;

    while (bool) {
        while (arr[left] !== 0 && left !== right ) left++;
    
        while (arr[right] === 0 && left !== right) right--;

        if (left === right) {
            bool = false;
        }
        
        [arr[left], arr[right]] = [arr[right], arr[left]];
    }
    return arr;
}

console.log(moveZeros([1,2,0,3,4,0,5,6,0]))