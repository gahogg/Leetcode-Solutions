class Solution:
    def canJump(self, nums: List[int]) -> bool:
	      # Recursive Solution
	      # Time: O(Max(nums) ^ n)
	      # Space: O(n)
        n = len(nums)
        
        def can_reach(i):
            if i == n-1:
                return True
            
            for jump in range(1, nums[i]+1):
                if can_reach(i+jump):
                    return True
            
            return False
        
        return can_reach(0)


class Solution:
    def canJump(self, nums: List[int]) -> bool:
        # Top Down DP (Memoization)
        # Time: O(n^2)
        # Space: O(n)
        n = len(nums)
        memo = {n-1: True}

        def can_reach(i):
            if i in memo:
                return memo[i]
            
            for jump in range(1, nums[i]+1):
                if can_reach(i+jump):
                    memo[i] = True
                    return True
            
            memo[i] = False
            return False
        
        return can_reach(0)


class Solution:
    def canJump(self, nums: List[int]) -> bool:
        # Greedy - Start at end
	      # Time: O(n)
	      # Space: O(1)
        n = len(nums)
        target = n - 1

        for i in range(n-1, -1, -1):
            max_jump = nums[i]
            if i + max_jump >= target:
                target = i

        return target == 0
