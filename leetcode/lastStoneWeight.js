var lastStoneWeight = function(stones) {
    
    while (stones.length > 1) {
        let arr = stones.sort((a, b) => a - b);
        let max1 = arr.pop();
        let max2 = arr.pop();

        let diff = Math.abs(max1 - max2);

        if (diff > 0) arr.push(diff);
    }

    if (stones.length > 0) return stones;

    return 0;
}

console.log(lastStoneWeight([2,7,4,1,8,1]));
console.log(lastStoneWeight([2,7,4,1,8,1,1]));