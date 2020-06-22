function countCharacters(words, chars) {
    let count = 0;

    
    for (let i = 0; i < words.length; i++) {
        let word = words[i];
        let charsCount = createHash(chars);

        if (checkWord(word, charsCount)) {
            count += word.length;
        }
    }
    return count;
}

function createHash(word) {
    let hash = {};

    for (let i = 0; i < word.length; i++) {
        if (hash[word[i]]) {
            hash[word[i]]++;
        }else{
            hash[word[i]] = 1;
        }
    }
    return hash;
}

function checkWord(word, hash) {
    
    for (let i = 0; i < word.length; i++) {
        if (!hash[word[i]] || hash[word[i]] === 0) return false;
        hash[word[i]]--;
    }

    return true;
}


console.log(countCharacters(["cat", "bt", "hat", "tree"], "atach"))

let words = ["hello", "world", "leetcode"]
let chars = "welldonehoneyr"

console.log(countCharacters(words, chars))