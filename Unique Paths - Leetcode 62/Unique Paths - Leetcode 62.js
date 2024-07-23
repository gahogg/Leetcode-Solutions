var uniquePaths = function(m, n) {
    let dp = Array(m).fill().map(() => Array(n).fill(0));
    
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (i === 0 && j === 0) {
                dp[i][j] = 1;
            } else {
                let fromTop = i > 0 ? dp[i - 1][j] : 0;
                let fromLeft = j > 0 ? dp[i][j - 1] : 0;
                dp[i][j] = fromTop + fromLeft;
            }
        }
    }
    
    return dp[m - 1][n - 1];
};
