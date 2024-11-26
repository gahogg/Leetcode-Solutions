class Solution:
    def permute(self, nums: List[int]) -> List[List[int]]:
        n = len(nums)
        res, sol = [], []

        def backtrack():
            if len(sol) == n:
                res.append(sol[:])
                return

            for x in nums:
                if x not in sol:
                    sol.append(x)
                    backtrack()
                    sol.pop()

        backtrack()
        return res

# Time Complexity: O(n!)
# Space Complexity: O(n)
