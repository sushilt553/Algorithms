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

function numEquivDominoPairs(dominoes) {
    let hash = {};

    for (let i = 0; i < dominoes.length; i++) {
        let dom = dominoes[i].sort((a, b) => a - b).toString()
        if (hash[dom]) {
            hash[dom]++;
        }else{
            hash[dom] = 1;
        }
    }

    let result = 0;

    for (let key in hash) {
        if (hash[key] > 1) {
            result += (hash[key] * (hash[key] - 1)) / 2
        }
    }
    
    return result;
}

//numCombinations = n! / ((n - r)! * r!)

// n * (n - 1) * (n - 2)! / ((n - 2)! * 2!)

//n * (n - 1) / 2!

console.log(numEquivDominoPairs([[1, 2], [2, 1], [3, 4], [5, 6]]))