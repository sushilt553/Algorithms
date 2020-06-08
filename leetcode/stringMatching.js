const stringMatching = (words) => {
    let subs = [];

    for (let i = 0; i < words.length; i++) {
        for (let j = 0; j < words.length; j++) {
            let word1 = words[i];
            let word2 = words[j];

            if (word1.includes(word2) && j !== i) subs.push(word2);
        }
    }
    return subs;
}

console.log(stringMatching(["mass", "as", "hero", "superhero"]));