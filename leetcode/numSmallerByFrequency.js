function numSmallerByFrequency (queries, words) {
    let newQueries = queries.map((ele) => findSmallestValue(ele));
    let newWords = words.map((ele) => findSmallestValue(ele));

    let result = [];

    for (let i = 0; i < newQueries.length; i++) {
        let count = 0;
        for (let j = 0; j < newWords.length; j++) {
            if (newQueries[i] < newWords[j]) count++;
        }
        result.push(count);
    }
    return result;
}

function findSmallestValue(str) {
    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    let char = str[0];
    let index = alphabet.indexOf(char);
    for (let i = 1; i < str.length; i++) {
        let idx = alphabet.indexOf(str[i]);
        if (idx < index) {
            char = str[i];
            index = idx;
        }
    }

    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === char) count++;
    }

    return count;
}

console.log(numSmallerByFrequency(["cbd"], ["zaaaz"]))
console.log(numSmallerByFrequency(["bbb", "cc"], ["a", "aa", "aaa", "aaaa"]))