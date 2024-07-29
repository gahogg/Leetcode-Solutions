class Solution:
    def threeSumClosest(self, nums: List[int], target: int) -> int:
        n = len(nums)
        nums.sort()
        closest_sum = float('inf')

        for i in range(n):
            if i > 0 and nums[i] == nums[i-1]:
                continue

            lo, hi = i + 1, n - 1
            while lo < hi:
                cur_sum = nums[i] + nums[lo] + nums[hi]

                if abs(cur_sum - target) < abs(closest_sum - target):
                    closest_sum = cur_sum

                if cur_sum == target:
                    return cur_sum
                elif cur_sum < target:
                    lo += 1
                else:
                    hi -= 1

        return closest_sum
        # Time: O(n^2)
        # Space: O(n)
