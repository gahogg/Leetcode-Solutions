class Solution:
    def subsets(self, nums: List[int]) -> List[List[int]]:
        n = len(nums)
        res, sol = [], []

        def backtrack(i):
            if i == n:
                res.append(sol[:])
                return

            # Don't pick nums[i]
            backtrack(i + 1)

            # Pick nums[i]
            sol.append(nums[i])
            backtrack(i + 1)
            sol.pop()

        backtrack(0)
        return res

# Time Complexity: O(2^n)
# Space Complexity: O(n)
