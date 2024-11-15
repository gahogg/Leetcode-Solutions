# Brute Force Solution
class Solution:
    def findMin(self, nums: List[int]) -> int:
        minn = float('inf')
        for num in nums:
            if num < minn:
                minn = num
        return minn

# Time: O(n)
# Space: O(1)

# Optimal Solution
class Solution:
    def findMin(self, nums: List[int]) -> int:
        n = len(nums)
        l = 0
        r = n - 1

        while l < r:
            m = (l + r) // 2
        
            if nums[m] > nums[r]:
                l = m + 1
            else:
                r = m

        return nums[l]

# Time Complexity: O(log(n))
# Space Complexity: O(1)
