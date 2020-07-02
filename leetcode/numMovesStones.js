var numMovesStones = function(a, b, c) {
    let [x, y, z] = [Math.abs(a - b), Math.abs(b - c), Math.abs(c - a)];
    let [min, max] = [Math.min(x, y, z), Math.max(x, y, z)];

    return 2 === max ? [0, 0] : [min < 3 ? 1 : 2, max - 2];
}