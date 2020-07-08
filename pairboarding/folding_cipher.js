function foldingCipher(str) {
    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    let hash = {};

    let start = 0;
    let end = alphabet.length - 1;

    while (start !== alphabet.length) {
        hash[alphabet[start]] = alphabet[end];
        start++;
        end--;
    }

    let result = "";

    for (let i = 0; i < str.length; i++) {
        result += hash[str[i]];
    }
    return result;
}

console.log(foldingCipher("aaadgj"))