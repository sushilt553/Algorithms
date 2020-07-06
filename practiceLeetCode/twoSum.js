var twoSum = function(nums, target) {
    let hash = {};
    for (let i = 0; i < nums.length; i++) {
        hash[nums[i]] = i;
    }

    for (let i = 0; i < nums.length; i++) {
        let rem =  target - nums[i];

        if (hash[rem] && i !== hash[rem]) return [nums[i], rem];
    }
}

var twoSum = function(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums.length; j++) {
            if (nums[i] + nums[j] === target && j > i) {
                return [nums[i], nums[j]]
            }
        }
    }
}

console.log(twoSum([2,7,11,15], 9))