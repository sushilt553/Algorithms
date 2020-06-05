var kidsWithCandies = function(candies, extraCandies) {
    let result = [];
    for (let i = 0; i < candies.length; i++) {
        let total = candies[i] + extraCandies;
        if (Math.max(...candies, total) === total) {
            result.push(true);
        }else{
            result.push(false);
        }
    }
    return result;
}

console.log(kidsWithCandies([2,3,5,1,3], 3));