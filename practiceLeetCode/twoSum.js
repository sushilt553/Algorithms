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

console.log(twoSum([2,7,11,15], 9))