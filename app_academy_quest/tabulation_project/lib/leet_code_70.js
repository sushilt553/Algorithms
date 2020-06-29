// Work through this problem on https://leetcode.com/problems/climbing-stairs/ and use the specs given there.
// Feel free to use this file for scratch work.

function climbStairs(n, memo = {}) {
    if (memo[n]) return memo[n];
    if (n === 0) return 0;
    if (n === 1) return 1;
    if (n === 2) return 2;

    memo[n] = climbStairs(n - 1, memo) + climbStairs(n - 2, memo)
    return memo[n];
}

function climbStairs(n) {
    let table = new Array(n + 1);

    table[0] = 1;
    table[1] = 1;

    for (let i = 2; i < table.length; i++) {
        table[i] = table[i - 1] + table[i - 2];
    }
    return table[table.length - 1];
}