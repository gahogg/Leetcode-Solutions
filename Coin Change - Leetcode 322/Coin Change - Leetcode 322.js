/**
 * Brute force approach with simple recursion
 * 
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    if (amount == 0)
        return 0;
    else if (amount < 0)
        return -1;

    let min_cnt = -1;
    for (let coin of coins) {
            let cnt = coinChange(coins, amount - coin);
            if (cnt >= 0) 
                min_cnt = min_cnt < 0 ? cnt + 1 : Math.min(min_cnt, cnt + 1);
    }
    return min_cnt;
};


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
