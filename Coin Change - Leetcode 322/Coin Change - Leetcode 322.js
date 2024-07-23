/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    const dp = new Array(amount + 1).fill(Infinity);
    dp[0] = 0;
    coins.sort((a, b) => a - b);

    for (let i = 1; i <= amount; i++) {
        for (const coin of coins) {
            if (i - coin < 0) break;
            dp[i] = Math.min(dp[i], dp[i - coin] + 1);
        }
    }

    return dp[amount] < Infinity ? dp[amount] : -1;
};
