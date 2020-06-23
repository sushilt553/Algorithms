var lastStoneWeight = function(stones) {
    let arr = stones.sort((a, b) => a - b);

    while (arr.length > 1) {
        let max1 = arr.pop();
        let max2 = arr.pop();

        let diff = Math.abs(max1 - max2);

        if (diff > 0) arr.push(diff);
    }

    if (arr.length > 0) return arr;

    return 0;
}

console.log(lastStoneWeight([2,7,4,1,8,1]));
console.log(lastStoneWeight([2,7,4,1,8,1,1]));