// Work through this problem on https://leetcode.com/problems/coin-change-2/ and use the specs given there.
// Feel free to use this file for scratch work.

var change = function(amount, coins, memo = {}) {

    if (amount === 0) return 1;

    let currCoin = coins[coins.length - 1];

    let count = 0;

    for (let quantity = 0; amount >= quantity * currCoin; quantity++) {
        count += change(amount - quantity * currCoin, coins.slice(0, -1))
    }

    return count;
}