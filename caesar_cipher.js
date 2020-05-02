function caesarCipher(str, shift) {
    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    let newStr = "";

    for (let i = 0; i < str.length; i++) {
        let idx = alphabet.indexOf(str[i]);
        let newIdx = idx + shift;
        let newChar = alphabet[newIdx % 26];
        newStr += newChar;
    }
    return newStr;
}

console.log(caesarCipher("cde", 2))
console.log(caesarCipher("abz", 27));