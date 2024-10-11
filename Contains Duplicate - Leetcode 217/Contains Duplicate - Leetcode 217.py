# Brute Force Solution
class Solution:
    def containsDuplicate(self, nums: List[int]) -> bool:
        n = len(nums)

        for i in range(n):
            for j in range(i+1, n):
                if nums[i] == nums[j]:
                    return True
        
        return False
        # Time Complexity: O(n^2)
        # Space Complexity: O(1)

# Optimal Solution
class Solution:
    def containsDuplicate(self, nums: list[int]) -> bool:
        h = set()
        for num in nums:
            if num in h:
                return True
            else:
                h.add(num)
        return False

# Time Complexity: O(n)
# Space Complexity: O(n)
