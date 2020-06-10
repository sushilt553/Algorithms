var sortString = function(s) {
    let hash = {};
    let result = "";

    for (let i = 0; i < s.length; i++) {
        if (hash[s[i]]) {
            hash[s[i]]++;
        }else{
            hash[s[i]] = 1;
        }
    }

    let hasChars = () => {
        return Object.keys(hash).some((ele) => hash[ele] > 0);
    }

    let increasing = (m = true) => {
        let k = Object.keys(hash).sort().filter((ele) => hash[ele] > 0);
        k = (m === false) ? k.reverse() : k;

        k.forEach((ele) => {
            result += ele;
            hash[ele]--;
        })
    }

    while(hasChars()) {
        increasing()
        if (hasChars()) {
            increasing(false);
        }
    }
    return result;
}

