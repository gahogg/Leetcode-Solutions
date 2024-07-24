var fib = function(n) {
    if (n === 0) return 0;
    if (n === 1) return 1;
    return fib(n - 1) + fib(n - 2);
};

// Naive Recursive Solution
// Time: O(2^n)
// Space: O(n)



var fib = function(n) {
    const memo = {};

    const helper = (x) => {
        if (x === 0) return 0;
        if (x === 1) return 1;
        if (memo[x]) return memo[x];
        memo[x] = helper(x - 1) + helper(x - 2);
        return memo[x];
    };

    return helper(n);
};
// Top Down DP with Memoization
// Time: O(n)
// Space: O(n)



var fib = function(n) {
    if (n === 0) return 0;
    if (n === 1) return 1;

    const dp = [0, 1];
    for (let i = 2; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }

    return dp[n];
};
// Bottom Up DP With Tabulation
// Time: O(n)
// Space: O(n)



var fib = function(n) {
    if (n === 0) return 0;
    if (n === 1) return 1;

    let prev = 0, cur = 1;
    for (let i = 2; i <= n; i++) {
        let next = prev + cur;
        prev = cur;
        cur = next;
    }

    return cur;
};
// Bottom Up DP With Constant Space
// Time: O(n)
// Space: O(1)

