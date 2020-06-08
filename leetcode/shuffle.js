const shuffle = (nums, n) => {
    let shuffledArr = [];
    let j = n;
    for (let i = 0; i < n; i++) {
        shuffledArr.push(nums[i]);
        shuffledArr.push(nums[j]);
        j++;
    }
    return shuffledArr;
}

console.log(shuffle([2, 5, 1, 3, 4, 7], 3));
console.log(shuffle([1, 2, 3, 4, 4, 3, 2, 1], 4));