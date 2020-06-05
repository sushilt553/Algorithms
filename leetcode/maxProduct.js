//O(n)
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

//O(nlogn)
var maxProduct = function(nums) {
    let sorted = nums.sort((a, b) => a - b);
    return (sorted[sorted.length - 1] - 1) * (sorted[sorted.length - 2] - 1);
}

//O(n)
var maxProduct = function(nums) {
    let m1 = nums[0]; 
    let m2 = nums[0];

    for (let i = 0; i < nums.length; i++) {
        m2 = Math.max(m2, Math.min(nums[i], m1));
        m1 = Math.max(m1, nums[i]);
    }
    return (m1 - 1) * (m2 - 1);
}

console.log(maxProduct([3,4,5,2]));
console.log(maxProduct([1,5,4,5]));