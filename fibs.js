function fibs(num) {
    if (num === 0) return [];
    if (num === 1) return [0];
    if (num === 2) return [0, 1]

    let prevFibs = fibs(num - 1);
    prevFibs.push(prevFibs[prevFibs.length - 1] + prevFibs[prevFibs.length - 2]);
    return prevFibs;
}

console.log(fibs(3));
console.log(fibs(4));
console.log(fibs(5));