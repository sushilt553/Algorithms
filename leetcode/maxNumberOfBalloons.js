var maxNumberOfBalloons = function(text) {
    if (text.length < 7) return 0
    let hash = {};

    for (let i = 0; i < text.length; i++) {
        if (hash[text[i]]) {
            hash[text[i]]++;
        }else{
            hash[text[i]] = 1;
        }
    }

    let ballonCount = 0;

    while (hash["a"] > 0 && hash["b"] > 0 && hash["n"] > 0 && hash["l"] > 1 && hash["o"] > 1) {
        ballonCount++;
        hash["b"]--;
        hash["a"]--;
        hash["l"] -= 2;
        hash["o"] -= 2;
        hash["n"]--;
    }
    return ballonCount;
}

console.log(maxNumberOfBalloons("balloon"));
console.log(maxNumberOfBalloons("nlaebolko"));
console.log(maxNumberOfBalloons("loonbalxballpoon"));