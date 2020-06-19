var findSolution = function(customfunction, z) {
    let result = [];

    for (let i = 1; i <= 1000; i++) {
        for (let j = 1; j <= 1000; j++) {
            if (customfunction.f(i, j) === z) result.push([i, j]);
        }
    }
    return result;
}

var findSolution = function(customfunction, z) {
    let result = [];

    for (let x = 1, y = 1000; x <= 1000 && y >= 1;) {
        let val = customfunction.f(x, y);
        if (val === z) {
            result.push([x, y]);

        };
        if (val < z) {
            x++;
        }else {
            y--;
        }
    }
    return result;
}