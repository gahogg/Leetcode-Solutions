class Solution:
    def runningSum(self, nums):
        s = 0
        n = len(nums)
        prefix_sum = [0] * n
        
        for i in range(n):
            s += nums[i]
            prefix_sum[i] = s
        
        return prefix_sum
        # Time: O(n)
        # Space: O(n)