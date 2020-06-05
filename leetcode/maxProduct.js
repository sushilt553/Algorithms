var maxProduct = function(nums) {
    let max = 1;

    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums.length; j++) {
            let num = (nums[i] - 1) * (nums[j] - 1);
            if (num > max && j > i) {
                max = num;
            }
        }
    }
    return max;
}

console.log(maxProduct([3,4,5,2]));
console.log(maxProduct([1,5,4,5]));