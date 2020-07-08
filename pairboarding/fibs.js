const fibs = function(num) {
    if (num === 0) return [];
    if (num === 1) return [0];
    if (num === 2) return [0, 1];

    let prevFibs = fibs(num - 1);
    prevFibs.push(prevFibs[prevFibs.length - 1] + prevFibs[prevFibs.length - 2]);
    return prevFibs;
}

const fibs = function(num) {
    if (num === 0) return [];
    if (num === 1) return [0];

    let prevFibs = [0, 1];

    for (let i = 2; i < num; i++) {
        prevFibs.push(prevFibs[i - 1] + prevFibs[i - 2]);
    }
    return prevFibs;
}

console.log(fibs(4))