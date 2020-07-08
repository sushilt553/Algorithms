function uniqSubs(word) {
    let set = new Set();

    for (let i = 0; i < word.length; i++) {
        for (let j = i + 1; j <= word.length; j++) {
            let sub = word.slice(i, j);
            if (!set.has(sub)) set.add(sub);
        }
    }
    return set;
}

console.log(uniqSubs("abab"))