class Solution:
    def minCostClimbingStairs(self, cost: List[int]) -> int:
        # Recursive Solution
        n = len(cost)

        def min_cost(i):
            if i < 2:
                return 0

            return min(cost[i-2] + min_cost(i-2),
                       cost[i-1] + min_cost(i-1))

        return min_cost(n)
        # Time: O(2^n)
        # Space: O(n)


class Solution:
    def minCostClimbingStairs(self, cost: List[int]) -> int:
        # Top Down DP (Memoization)
        n = len(cost)
        memo = {0:0, 1:0}
        def min_cost(i):
            if i in memo:
                return memo[i]
            else:
                memo[i] = min(cost[i-2] + min_cost(i-2),
                              cost[i-1] + min_cost(i-1))
                return memo[i]

        return min_cost(n)
        # Time: O(n)
        # Space: O(n)


class Solution:
    def minCostClimbingStairs(self, cost: List[int]) -> int:
        # Bottom Up DP (Tabulation)
        n = len(cost)
        dp = [0] * (n+1)
        
        for i in range(2, n+1):
            dp[i] = min(dp[i-2] + cost[i-2], dp[i-1] + cost[i-1])
        
        return dp[-1]

        # Time: O(n)
        # Space: O(n)


class Solution:
    def minCostClimbingStairs(self, cost: List[int]) -> int:
        # Bottom Up DP (Constant Space)
        n = len(cost)
        prev, curr = 0, 0

        for i in range(2, n+1):
            prev, curr = curr, min(cost[i-2] + prev, cost[i-1] + curr)
        
        return curr

        # Time: O(n)
        # Space: O(1)
        
