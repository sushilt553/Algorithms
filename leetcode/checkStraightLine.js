var checkStraightLine = function(coordinates) {
    if (coordinates.length <=  2) return true;
    let result = true;

    for (let i = 0; i < coordinates.length - 1; i++) {
        if (coordinates[i][0] !== coordinates[i+1][0]) {
            result = false;
            break;
        }
    }

    if (result) return result;

    for (let i = 0; i < coordinates.length - 1; i++) {
        if (coordinates[i][1] !== coordinates[i+1][1]) {
            result = false;
            break;
        }
    }
    
    if (result) return result;

    let x1 = coordinates[0][0];
    let x2 = coordinates[1][0];
    let y1 = coordinates[0][1];
    let y2 = coordinates[1][1];

    let slope = (y2 - y1) / (x2 - x1);

    for (let i = 2; i < coordinates.length; i++) {
        x2 = coordinates[i][0];
        y2 = coordinates[i][1];
        if ((y2 - y1) / (x2 - x1) !== slope) return false;
    }
    return true;
}

console.log(checkStraightLine([[1,2], [2,3], [3,4], [4,5], [5,6], [6,7]]))
console.log(checkStraightLine([[1, 1], [2, 2], [3, 4], [4, 5], [5, 6], [7, 7]]))