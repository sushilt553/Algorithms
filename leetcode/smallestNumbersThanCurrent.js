var smallestNumbersThanCurrent = function(nums) {
    let result = [];

    for (let i = 0; i < nums.length; i++) {
        let count = 0;
        let num = nums[i];
        for (let j = 0; j < nums.length; j++) {
            if (num > nums[j] && i !== j) count++;
        }
        result.push(count);
    }
    return result;
}

console.log(smallestNumbersThanCurrent([8,1,2,2,3]));