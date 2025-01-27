class Solution(object):
    def findMaxAverage(self, nums, k):
        """
        :type nums: List[int]
        :type k: int
        :rtype: float
        """

        def avg(vals):
            return sum(vals) / float(len(vals))

        # Note, setting max_avg to any constant numeric value 
        # here is incorrect!!! 
        # Say 0, if nums = [-1, -2, -3, -4], k = 2, 
        # the output would be incorrect
        max_avg = avg(nums[:k])
        for i in range(len(nums) - k + 1):
            max_avg = max(max_avg, avg(nums[i:i+k])) # avg is O(k)
        return max_avg

