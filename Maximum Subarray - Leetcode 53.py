class Solution:
    def maxSubArray(self, nums: List[int]) -> int:
        # Bottom Up DP (Constant Space)
        # Time: O(n)
        # Space: O(1)
        max_sum = float('-inf')
        curr_sum = 0
        
        for i in range(len(nums)):
            curr_sum += nums[i]
            max_sum = max(max_sum, curr_sum)

            if curr_sum < 0:
                curr_sum = 0
        
        return max_sum
