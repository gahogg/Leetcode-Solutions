# Recursive Solution
class Solution:
    def rob(self, nums: List[int]) -> int:
        n = len(nums)

        def helper(i):
            if i == 0:
                return nums[0]
            if i == 1:
                return max(nums[0], nums[1])
            
            return max(nums[i] + helper(i-2),
                       helper(i-1))
        
        return helper(n-1)
        # Time: O(2^n)
        # Space: O(n)


# Top Down DP (Memoization)
class Solution:
    def rob(self, nums: List[int]) -> int:
        n = len(nums)
        if n == 1:
            return nums[0]
        if n == 2:
            return max(nums[0], nums[1])

        memo = {0:nums[0], 1:max(nums[0], nums[1])}

        def helper(i):
            if i in memo:
                return memo[i]
            else:
                memo[i] = max(nums[i] + helper(i-2),
                              helper(i-1))
                return memo[i]
        
        return helper(n-1)
        # Time: O(n)
        # Space: O(n)



# Bottom Up DP (Tabulation)
class Solution:
    def rob(self, nums: List[int]) -> int:
        n = len(nums)
        if n == 1:
            return nums[0]
        if n == 2:
            return max(nums[0], nums[1])

        dp = [0] * n
        dp[0] = nums[0]
        dp[1] = max(nums[0], nums[1])
        for i in range(2, n):
            dp[i] = max(nums[i] + dp[i-2], dp[i-1])
        
        return dp[n-1]
        # Time: O(n)
        # Space: O(n)


# Bottom Up DP (Constant Space)
class Solution:
    def rob(self, nums: List[int]) -> int:
        n = len(nums)
        if n == 1:
            return nums[0]
        if n == 2:
            return max(nums[0], nums[1])

        prev = nums[0]
        curr = max(nums[0], nums[1])
        for i in range(2, n):
            prev, curr = curr, max(nums[i] + prev, curr)
        
        return curr
        # Time: O(n)
        # Space: O(1)
