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

var smallerNumbersThanCurrent = function(nums) {
    let arr = Array.from(nums);
    let sorted = nums.sort((a, b) => b - a);
    let hash = {};
    let result = [];

    for (let i = 0; i < sorted.length; i++) {
        hash[sorted[i]] = sorted.length - 1 - i;
    }

    arr.forEach((ele) => result.push(hash[ele]));
    return result;
}

console.log(smallerNumbersThanCurrent([8,1,2,2,3]));