function luckyNumbers(matrix) {
    let transposed = transposedArray(matrix);
}

function transposedArray(matrix) {
    let row = matrix.length;
    let col = matrix[0].length;
    let transposed = new Array(row).fill().map(() => new Array(col));

    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            transposed[j][i] = matrix[i][j];
        }
    }
    return transposed;
}

console.log(luckyNumbers([[7,8], [1,2]]));
console.log(transposedArray([[7,8], [1,2]]));

[
    [7,8],
    [1,2]
] //row Minimum

[
    [7,1],
    [8,2]
] //row Maximum