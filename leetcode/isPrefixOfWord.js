var isPrefixOfWord = function(sentence, searchWord) {
    let arr = sentence.split(" ");

    for (let i = 0; i < arr.length; i++) {
       if (checkPrefix(arr[i], searchWord)) return i + 1
    }
    
    return -1;
}

function checkPrefix(str, target) {
    for (let i = 0; i < target.length; i++) {
        if (str[i] !== target[i]) return false;
    }
    return true;
}

console.log(isPrefixOfWord("I love eating burger", "burg"));
console.log(isPrefixOfWord("this problem is an easy problem", "pro"));