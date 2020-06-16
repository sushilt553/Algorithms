var lengthOfLongestSubstring = function(s) {
    let max = 0;

    for (let i = 0; i < s.length; i++) {
        let count = 1;
        let set = new Set();
        set.add(s[i]);
        let j = i + 1;
        while (!set.has(s[j]) && j < s.length) {
            set.add(s[j]);
            count++;
            j++;
        }
        if (max < count) max = count;        
    }
    return max;
}

console.log(lengthOfLongestSubstring("abcabcbb"));