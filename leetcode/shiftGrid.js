var shiftGrid = function(grid, k) {
    let i = 0;
    let newGrid;
    while (i < k) {
        newGrid = shift(grid);
        grid = newGrid
        i++;
    }
    return grid;
}

var shift = function(grid) {
    let row = grid.length;
    let column = grid[0].length;
    let newGrid = new Array(row).fill().map(() => new Array(column));

    for (let i = 0; i < row; i++) {
        for (let j = 0; j < column - 1; j++) {
            newGrid[i][j + 1] = grid[i][j];
        }
    }
    for (let i = 0; i < row - 1; i++) {
        newGrid[i + 1][0] = grid[i][column - 1];
    }

    newGrid[0][0] = grid[row - 1][column - 1]
    return newGrid;
}