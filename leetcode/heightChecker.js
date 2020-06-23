var heightChecker = function(heights) {
    let sortedHeights = Array.from(heights).sort((a, b) => a - b);

    let count = 0;

    for (let i = 0; i < sortedHeights.length; i++) {
        if (sortedHeights[i] !== heights[i]) count++;
    };

    return count;
}

console.log(heightChecker([1,1,4,2,1,3]))