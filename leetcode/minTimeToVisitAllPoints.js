var minTimeToVisitAllPoints = function(points) {
    let seconds = 0;
    for (let i = 0; i < points.length - 1; i++) {
        let point = points[i];
        let nextPoint = points[i+1];
        let first = Math.abs(point[0] - nextPoint[0]);
        let second = Math.abs(point[1] - nextPoint[1]);
        seconds += Math.max(first, second);
    }
    return seconds;
}


console.log(minTimeToVisitAllPoints([[1,1], [3,4], [-1,0]]));