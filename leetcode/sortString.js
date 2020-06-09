var sortString = function(s) {
    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    let result = "";

    while (result.length !== s.length) {
        let smallestChar = minChar(alphabet, s);
        result += smallestChar;
    }
}

var minChar = (alphabet, s) => {
    let min = s[0];

    for (let i = 0; i < s.length; i++) {
        if (alphabet.indexOf(s[i]) < alphabet.indexOf(min)) min = s[i];
    }
    return min;
}

let alphabet = "abcdefghijklmnopqrstuvwxyz";
console.log(minChar(alphabet, "dddfffbbbccc"))