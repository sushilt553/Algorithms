function matrixRegionSum(matrix, topLeft, topRight) {
    let sum = 0;

    for (let i = topLeft[0]; i <= topRight[0]; i++) {
        for (let j = topLeft[1]; j <= topRight[1]; j++ ) {
            sum += matrix[i][j];
        }
    }
    return sum;
}
let matrix = [[1, 2, 5],
              [3, 4, 6]]

console.log(matrixRegionSum(matrix, [0, 0], [1, 2]));