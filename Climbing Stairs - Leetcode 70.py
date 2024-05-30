# Recursive Solution
class Solution:
    def climbStairs(self, n: int) -> int:
        if n == 1:
            return 1
        if n == 2:
            return 2
        
        return self.climbStairs(n-2) + self.climbStairs(n-1)
        # Time: O(2^n)
        # Space: O(n)


# Top Down Memoization
class Solution:
    def climbStairs(self, n: int) -> int:
        memo = {1:1, 2:2}
        def f(n):
            if n in memo:
                return memo[n]
            else:
                memo[n] = f(n-2) + f(n-1)
                return memo[n]
        
        return f(n)
        # Time: O(n)
        # Space: O(n)


# Bottom Up Tabulation
class Solution:
    def climbStairs(self, n: int) -> int:
        if n == 1:
            return 1
        if n == 2:
            return 2
        
        dp = [0] * n
        dp[0] = 1
        dp[1] = 2

        for i in range(2, n):
            dp[i] = dp[i-2] + dp[i-1]
        
        return dp[n-1]
        # Time: O(n)
        # Space: O(n)


# Bottom up Constant Space
class Solution:
    def climbStairs(self, n: int) -> int:
        if n == 1:
            return 1
        if n == 2:
            return 2
        
        two_back = 1
        one_back = 2
        for i in range(2, n):
            next_num = two_back + one_back
            two_back = one_back
            one_back = next_num
        
        return one_back
        # Time: O(n)
        # Space: O(1)
