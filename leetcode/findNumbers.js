var findNumbers = function(nums) {
    let count = 0;

    nums.forEach((ele) => {
        if (ele % 2 === 0) count++;
    })

    return count;
}