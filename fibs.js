// function fibs(num) {
//     if (num === 0) return [];
//     if (num === 1) return [0];
//     if (num === 2) return [0, 1]

//     let prevFibs = fibs(num - 1);
//     prevFibs.push(prevFibs[prevFibs.length - 1] + prevFibs[prevFibs.length - 2]);
//     return prevFibs;
// }

function fibs(num) {
    if (num === 0) return [];
    if (num === 1) return [0];
    
    let fibsArr = [0, 1];

    for (let i = 2; i < num; i++) {
        fibsArr.push(fibsArr[i - 1] + fibsArr[i - 2]);
    }
    return fibsArr;
}

console.log(fibs(3));
console.log(fibs(4));
console.log(fibs(5));