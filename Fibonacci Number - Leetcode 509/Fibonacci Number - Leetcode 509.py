# Top Down Recursive

# Time: O(2^n)
# Space: O(n)
class Solution:
    def fib(self, n: int) -> int:
        if n == 0:
            return 0
        elif n == 1:
            return 1
        else:
            return self.fib(n-1) + self.fib(n-2)


# Top Down Memoized

# Time: O(n)
# Space: O(n)
class Solution:
    def fib(self, n: int) -> int:
        memo = {0:0, 1:1}

        def f(x):
            if x in memo:
                return memo[x]
            else:
                memo[x] = f(x-1) + f(x-2)
                return memo[x]
        
        return f(n)


# Bottom Up Tabulation

# Time: O(n)
# Space: O(n)
class Solution:
    def fib(self, n: int) -> int:
        if n == 0:
            return 0
        if n == 1:
            return 1

        dp = [0] * (n+1)
        dp[0] = 0
        dp[1] = 1

        for i in range(2, n+1):
            dp[i] = dp[i-2] + dp[i-1]

        return dp[n]


# Bottom Up Constant Space

# Time: O(n)
# Space: O(1)
class Solution:
    def fib(self, n: int) -> int:
        if n == 0:
            return 0
        if n == 1:
            return 1

        prev = 0
        cur = 1

        for i in range(2, n+1):
            prev, cur = cur, prev+cur
        
        return cur
