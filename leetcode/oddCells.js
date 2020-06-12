var oddCells = function(n, m, indices) {
    let mat = new Array(n).fill().map(() => new Array(m).fill(0));
    let oddCount = 0;

    for (let i = 0; i < indices.length; i++) {
        let row = indices[i][0];
        let col = indices[i][1];
        for (let j = 0; j < m; j++) {
            mat[row][j] += 1;
        }

        for (let k = 0; k < n; k++) {
            mat[k][col] += 1;
        }
    }
    
    for (let i = 0; i < mat.length; i++) {
        for (let j = 0; j < mat[i].length; j++) {
            if (mat[i][j] % 2 !== 0) oddCount++;
        }
    }

    return oddCount;
}

console.log(oddCells(2,3,[[0,1],[1,1]]));