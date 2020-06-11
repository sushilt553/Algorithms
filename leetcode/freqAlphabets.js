var freqAlphabets = function(s) {
    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    let string = "";

    for (let i = 0; i < s.length; i++) {
        let str = s[i];
        let next = s[i + 2];
        if (next === "#") {
            string += alphabet[Number(s.slice(i, i + 2)) - 1]
            i += 2;
        }else{
            string += alphabet[Number(str - 1)];
        }
    }
    return string;
}

console.log(freqAlphabets("10#11#12"));
console.log(freqAlphabets("25#"));