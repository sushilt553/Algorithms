var isPrefixOfWord = function(sentence, searchWord) {
    let arr = sentence.split(" ");

    for (let i = 0; i < arr.length; i++) {
       if (arr[i].includes(searchWord)) return i + 1;
    }
    
    return -1;
}

console.log(isPrefixOfWord("I love eating burger", "burg"));
console.log(isPrefixOfWord("this problem is an easy problem", "pro"));