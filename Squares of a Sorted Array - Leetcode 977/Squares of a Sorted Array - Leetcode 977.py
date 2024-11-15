# Brute Force Solution
class Solution:
    def sortedSquares(self, nums: List[int]) -> List[int]:
        n = len(nums)
        for i in range(n):
            nums[i] = nums[i] ** 2
        
        nums.sort()

        return nums

# Time: O(n log n)
# Space: O(1)


# Optimal Solution
class Solution:
    def sortedSquares(self, nums: List[int]) -> List[int]:
        left = 0
        right = len(nums) - 1
        result = []

        while left <= right:
            if abs(nums[left]) > abs(nums[right]):
                result.append(nums[left] ** 2)
                left += 1
            else:
                result.append(nums[right] ** 2)
                right -= 1

        result.reverse()

        return result

# Time Complexity: O(n)
# Space Complexity: O(n)

# Optimal Solution for Bootcamp
class Solution:
    def sortedSquares(self, nums: List[int]) -> List[int]:
        n = len(nums)
        L, R = 0, n-1
        result = []

        for i in range(n):
            nums[i] = nums[i] ** 2

        while L <= R:
            if nums[L] > nums[R]:
                result.append(nums[L])
                L += 1
            else:
                result.append(nums[R])
                R -= 1

        result.reverse()
        return result
# Time: O(n)
# Space: O(n)
