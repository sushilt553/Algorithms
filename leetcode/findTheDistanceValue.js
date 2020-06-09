const findTheDistanceValue = function(arr1, arr2, d) {
    let count = 0;

    for (let i = 0; i < arr1.length; i++) {
        let result = true;
        for (let j = 0; j < arr2.length; j++) {
            let val = Math.abs(arr1[i] - arr2[j]);
            if (val > d) {
                continue;
            }else{
                result = false;
                break;
            }
        }
        if (result) count++;
    }
    return count;
}

console.log(findTheDistanceValue([4,5,8], [10,9,1,8], 2));
console.log(findTheDistanceValue([1,4,2,3], [-4,-3,6,10,20,30], 3));