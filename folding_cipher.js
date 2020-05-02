function folding_cipher(str) {
    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    let obj = {};

    let i = 0; 
    let j = alphabet.length - 1;
    while (true) {
        if (i === alphabet.length) break;
        obj[alphabet[i]] = alphabet[j]
        i += 1;
        j -= 1;
    }
    
    let newStr = "";
    for (let i = 0; i < str.length; i++) {
        newStr += obj[str[i]];
    }
    return newStr;
}

console.log(folding_cipher("abc"));