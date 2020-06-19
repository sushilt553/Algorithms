var checkStraightLine = function(coordinates) {
    let x;
    let y;
    let nextX;
    let nextY;

    let result = true;

    for (let i = 0; i < coordinates.length - 1; i++) {
        x = coordinates[i][0];
        y = coordinates[i][1];
        nextX = coordinates[i + 1][0];
        nextY = coordinates[i + 1][1];

        if (nextX !== x + 1 || nextY !== y + 1) {
            result = false;
            break;
        }
    }
    return result;
}

console.log(checkStraightLine([[1,2], [2,3], [3,4], [4,5], [5,6], [6,7]]))
console.log(checkStraightLine([[1, 1], [2, 2], [3, 4], [4, 5], [5, 6], [7, 7]]))