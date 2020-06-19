var balancedStringSplit = function(s) {

}

var substrings = function(str) {
    let subs = {};

    for (let i = 0; i < str.length; i++) {
        for (let j = i + 1; j <= str.length; j++) {
            let ele = str.slice(i, j);
            subs[ele] = count(ele);
        }
    }
    return subs;
}

var count = function(str) {
    let obj = {};

    for (let i = 0; i < str.length; i++) {
        if (obj[str[i]] && str[i] === "L") {
            obj[str[i]]++;
        }else if (obj[str[i]] && str[i] === "R") {
            obj[str[i]]++;
        }else if (str[i] === "L") {
            obj[str[i]] = 1;
        }else if (str[i] === "R"){
            obj[str[i]] = 1;
        }
    }
    return obj;
}

console.log(count("RRRLL"))