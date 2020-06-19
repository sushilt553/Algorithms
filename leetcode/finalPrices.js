var finalPrices = function(prices) {
    let arr = [];

    for (let i = 0; i < prices.length; i++) {
        let ele = prices[i];
        let j = i + 1;
        while (prices[i] < prices[j]) {
            j++;
        }
        let discount;
        if (j <prices.length) {
            discount = prices[j];
        }else{
            discount = 0;
        }
        arr.push(ele - discount);
    }

    return arr;
}

console.log(finalPrices([8,4,6,2,3]))