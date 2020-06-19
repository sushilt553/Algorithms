var findSolution = function(customfunction, z) {
    let result = [];

    for (let i = 1; i <= 1000; i++) {
        for (let j = 1; j <= 1000; j++) {
            if (customfunction.f(i, j) === z) result.push([i, j]);
        }
    }
    return result;
}