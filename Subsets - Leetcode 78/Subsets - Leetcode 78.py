class Solution:
    def subsets(self, nums: List[int]) -> List[List[int]]:
        n = len(nums)
        ans, sol = [], []

        def backtrack(i):
            if i == n:
                ans.append(sol[:])
                return

            # Don't pick nums[i]
            backtrack(i + 1)

            # Pick nums[i]
            sol.append(nums[i])
            backtrack(i + 1)
            sol.pop()

        backtrack(0)
        return ans

# Time Complexity: O(2^n)
# Space Complexity: O(n)
