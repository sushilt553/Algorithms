var isBoomerang = function(points) {
    const [[ax, bx], [ay, by], [az, bz]] = points;
    return !(
        (ax === ay && bx === by) ||
        (ay === az && by === bz) ||
        (ax === az && bx === bz) ||
        (ax === ay && ay === az && az === ax) ||
        (bx === by && by === bz && bz === bx) ||
        (ax - ay === bx - by && ay - az === by - bz && az - ax === bz - bx)
    )
}