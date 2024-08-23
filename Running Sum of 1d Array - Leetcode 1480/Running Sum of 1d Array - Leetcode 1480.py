class Solution:
    def runningSum(self, nums):
        s = 0
        running_sum = []
        
        for num in nums:
            s += num
            running_sum.append(s)
        
        return running_sum
        # Time: O(n)
        # Space: O(n)