function caesarCipher(msg, amt) {
    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    let result = "";

    for (let i = 0; i < msg.length; i++) {
        if (msg[i] === " ") {
            result += " ";
            continue;
        };
        let idx = alphabet.indexOf(msg[i]);
        let newIdx = idx + amt;
        let newChar = alphabet[newIdx % alphabet.length];
        result += newChar;
    }
    return result;
}

console.log(caesarCipher("abc", 2));
console.log(caesarCipher("abcz", 2));