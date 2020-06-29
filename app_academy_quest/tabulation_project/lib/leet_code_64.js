// Work through this problem on https://leetcode.com/problems/minimum-path-sum/ and use the specs given there.
// Feel free to use this file for scratch work.

function minPathSum(grid) {
    let rows = grid.length;
    let column = grid[0].length;
    let table = new Array(rows).fill().map(() => new Array().fill(Infinity));
    table[0][0] = grid[0][0];

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < column; j++) {
            if (i < rows - 1) {
                table[i + 1][j] = Math.min(table[i + 1][j], table[i][j] + grid[i + 1][j]);
            }
            if (j < column - 1) {
                table[i][j + 1] = Math.min(table[i][j + 1], table[i][j] + grid[i][j + 1]);
            }
        }
    }
    return table[m - 1][n - 1];
}