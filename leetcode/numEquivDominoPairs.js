function numEquivDominoPairs(dominoes) {
    let count = 0;    
    for (let i = 0; i < dominoes.length; i++) {
        for (let j = 0; j < dominoes.length; j++) {
            if (j > i) {
                let first = dominoes[i][0];
                let second = dominoes[i][1];
                let third = dominoes[j][0];
                let fourth = dominoes[j][1];

                if ((first === third && second === fourth) || (first === fourth && second === third)) count++;
            }
        }
    }
    return count;
}