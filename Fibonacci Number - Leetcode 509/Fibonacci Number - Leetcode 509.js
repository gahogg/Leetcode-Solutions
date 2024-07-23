function helper(n, dp){
    if(n <= 1)
       return n;

   if(dp[n] != undefined){
       return dp[n];
   }
   
   return dp[n] = helper(n - 1, dp) + helper(n - 2, dp);
   
}
var fib = function(n) {
   let dp = [];
   helper(n, dp);
   return dp[n] || n;
};

//************************************************** */

/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    const dp = [0, 1];
    for (let i = 2; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }
    return dp[n];
};
