class Solution(object):
    def singleNumber(self, nums: List[int]) -> int:
        a = 0

        for x in nums:
            a ^= x

        return a
        # Time: O(n)
        # Space: O(1)