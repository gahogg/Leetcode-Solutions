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
