var countNegatives = function(grid) {
    let count = 0;

    for (let i = 0; i < grid.length; i++) {
        let current = grid[i];

        for (let i = current.length - 1; i >= 0; i--) {
            if (current[i] >= 0) break;
            count++;
        }
    }
    return count;
}

console.log(countNegatives([[4, 3, 2, -1], [3, 2, 1, -1], [1, 1, -1, -2], [-1, -1, -2, -3]]));