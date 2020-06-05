var maxPower = function(s) {
    let max = 0;

    for (let i = 0; i < s.length; i++) {
        let char = s[i];
        let count = 1;
        while (s[i + 1] === char) {
            count++;
            i++;
        }
        if (count > max) max = count;
    }
    return max;
}

console.log(maxPower("leetcode"));
console.log(maxPower("abbcccddddeeeeedcba"));
console.log(maxPower("triplepillooooow"));