//Works only for square matrix.

// function luckyNumbers(matrix) {
//     let transposed = transposedArray(matrix);

//     let result = [];

//     for (let i = 0; i < matrix.length; i++) {
//         let min = Math.min(...matrix[i]);
//         let max = Math.max(...transposed[i]);
//         if (min === max) result.push(min);
//     }
//     return result;
// }

// function transposedArray(matrix) {
//     let row = matrix.length;
//     let col = matrix[0].length;
//     let transposed = new Array(row).fill().map(() => new Array(col));

//     for (let i = 0; i < row; i++) {
//         for (let j = 0; j < col; j++) {
//             transposed[j][i] = matrix[i][j];
//         }
//     }
//     return transposed;
// }

const luckyNumbers = (matrix) => {
    let row = matrix.length;
    let col = matrix[0].length;

    let min = new Array(row).fill(Infinity);
    let max = new Array(col).fill(-Infinity);

    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            min[i] = Math.min(min[i], matrix[i][j]);
            max[j] = Math.max(max[j], matrix[i][j]);
        }
    }
    let result = [];

    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            if (min[i] === max[j]) result.push(matrix[i][j]);
        }
    }

    return result;
}

console.log(luckyNumbers([[7,8], [1,2]]));
console.log(luckyNumbers([[3, 7, 8], [9, 11, 13], [15, 16, 17]]))


