var decompressRLElist = function (nums) {
    let result = [];

    for (let i = 0; i < nums.length; i++) {
        let freq = nums[2 * i];
        let val = nums[2 * i + 1];
        while (freq > 0) {
            result.push(val);
            freq--;
        }
    }
    return result;
};

console.log(decompressRLElist([1,2,3,4]));
console.log(decompressRLElist([1,1,2,3]));
