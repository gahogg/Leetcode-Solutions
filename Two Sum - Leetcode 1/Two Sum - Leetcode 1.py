# Brute Force Solution
class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        n = len(nums)
        for i in range(n):
            for j in range(n):
                if nums[i] + nums[j] == target and i != j:
                    return (i, j)
    # Time: O(n^2)
    # Space: O(1)

# Better Brute Force Solution
class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        n = len(nums)
        for i in range(n):
            for j in range(i+1, n):
                if nums[i] + nums[j] == target:
                    return (i, j)
    # Time: O(n^2)
    # Space: O(1)

# 2-Pass Optimal Solution
class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        h = {}
        for i in range(len(nums)):
            h[nums[i]] = i

        for i in range(len(nums)):
            y = target - nums[i]

            if y in h and h[y] != i:
                return [i, h[y]]
# Time Complexity: O(n)
# Space Complexity: O(n)

# One-Pass Optimal Solution (For Bootcamp)
class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        h = {}
        n = len(nums)
        for i, x in enumerate(nums):
            y = target - nums[i]
            if y in h:
                return [i, h[y]]
            else:
                h[x] = i
# Time Complexity: O(n)
# Space Complexity: O(n)
