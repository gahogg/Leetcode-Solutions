# Brute Force Solution
class Solution:
    def search(self, nums: List[int], target: int) -> int:
        n = len(nums)
        for i in range(n):
            if nums[i] == target:
                return i
        return -1
        # Time: O(n)
        # Space: O(1)

class Solution:
    def search(self, nums: List[int], target: int) -> int:
        left = 0
        right = len(nums) - 1

        while left <= right:
            middle = (right + left) // 2

            if nums[middle] == target:
                return middle
            elif nums[middle] > target:
                right = middle - 1
            else:
                left = middle + 1

        return -1

# Time Complexity: O(log(n))
# Space Complexity: O(1)
