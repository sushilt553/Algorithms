var arrayRankTransform = function(arr) {
    let rank = 1;
    let hash = {};
    let sorted = Array.from(arr).sort((a, b) => a - b);

    sorted.forEach((ele) => {
        if (!hash[ele]) {
            hash[ele] = rank;
            rank++;
        }
    })
    return arr.map((ele) => hash[ele]);
}

console.log(arrayRankTransform([40,10,20,30]));
console.log(arrayRankTransform([100, 100, 100]));