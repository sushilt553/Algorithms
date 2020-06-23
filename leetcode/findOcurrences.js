var findOcurrences = function(text, first, second) {
    text = text.split(" ");
    let result = [];

    for (let i = 0; i < text.length - 2; i++) {
        let word = text[i];

        if (word === first && text[i + 1] === second) {
            result.push(text[i + 2]);
        }
    }

    return result;
}

console.log(findOcurrences("alice is a good girl she is a good student", "a", "good"))
console.log(findOcurrences("we will we will rock you", "we", "will"))