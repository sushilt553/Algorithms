function tribonacci(n, memo = {}) {
    if (memo[n]) return memo[n];
    if (n === 0) return 0;
    if (n === 1) return 1;
    if (n === 2) return 1;

    memo[n] = tribonacci(n - 1, memo) + tribonacci(n - 2, memo) + tribonacci(n - 3, memo);
    return memo[n];
}

console.log(tribonacci(4));
console.log(tribonacci(25));

// memo[n - 1] = tribonacci((n - 1), memo);
// memo[n - 2] = tribonacci((n - 2), memo);
// memo[n - 3] = tribonacci((n - 3), memo);
// return memo[n - 1] + memo[n - 2] + memo[n - 3]
