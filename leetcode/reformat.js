const reformat = (s) => {
    let alphas = "";
    let nums = "";
    let shuffled = "";

    let alphabet = "abcdefghijklmnopqrstuvwxyz";

    for (let i = 0; i < s.length; i++) {
        if (alphabet.includes(s[i])) {
            alphas += s[i];
        }else{
            nums += s[i];
        }
    }

    if (Math.abs(alphas.length - nums.length) > 1) return "";

    if (alphas.length > nums.length) {
        for (let i = 0; i < alphas.length; i++) {
            let char1;
            let char2;
            if (nums[i]) {
                char1 = nums[i];
            }else{
                char1 = ""
            }
            shuffled += alphas[i] + char1;
        }
    }else if (nums.length > alphas.length) {
        for (let i = 0; i < nums.length; i++) {
            let char2;
            if (alphas[i]) {
                char2 = alphas[i];
            }else{
                char2 = "";
            }
            shuffled += nums[i] + char2;
        }
    }else {
        for (let i = 0; i < nums.length; i++) {
            shuffled += nums[i] + alphas[i];
        }
    }
    
    return shuffled;
}

console.log(reformat("a0b1c2"));
console.log(reformat("leetcode"));