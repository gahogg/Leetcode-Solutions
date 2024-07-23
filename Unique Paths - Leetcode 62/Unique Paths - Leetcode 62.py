class Solution:
    def uniquePaths(self, m: int, n: int) -> int:
        # Recursive Solution
        # Time: O(2^(m*n))
        # Space: O(m*n)
        
        def paths(i, j):
            if i == j == 0:
                return 1
            elif i < 0 or j < 0 or i == m or j == n:
                return 0
            else:
                return paths(i-1, j) + paths(i, j-1)
        
        return paths(m-1, n-1)



class Solution:
    def uniquePaths(self, m: int, n: int) -> int:
        # Top Down DP (Memoization)
        # Time: O(m*n)
        # Space: O(m*n)

        memo = {(0,0): 1}
        def paths(i, j):
            if (i,j) in memo:
                return memo[(i,j)]
            elif i < 0 or j < 0 or i == m or j == n:
                return 0
            else:
                val = paths(i, j-1) + paths(i-1, j)
                memo[(i,j)] = val
                return val
        
        return paths(m-1, n-1)



class Solution:
    def uniquePaths(self, m: int, n: int) -> int:
        # Bottom Up DP (Tabulation)
        # Time: O(m*n)
        # Space: O(m*n)

        dp = []
        for _ in range(m):
            dp.append([0] * n)
        
        dp[0][0] = 1
        
        for i in range(m):
            for j in range(n):
                if i == j == 0:
                    continue
                    
                val = 0
                if i > 0:
                    val += dp[i-1][j]
                if j > 0:
                    val += dp[i][j-1]
                
                dp[i][j] = val
        
        return dp[m-1][n-1]
                
