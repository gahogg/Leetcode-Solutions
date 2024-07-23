class Solution:
    def longestOnes(self, nums: List[int], k: int) -> int:
        max_w = 0
        num_zeros = 0
        n = len(nums)
        l = 0

        for r in range(n):
            if nums[r] == 0:
                num_zeros += 1

            while num_zeros > k:
                if nums[l] == 0:
                    num_zeros -= 1
                l += 1
            w = r - l + 1
            max_w = max(max_w, w)

        return max_w

# Time Complexity: O(n)
# Space Complexity: O(1)
