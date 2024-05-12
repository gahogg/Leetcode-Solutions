class Solution:
    def twoSum(self, numbers: List[int], target: int) -> List[int]:
        n = len(numbers)
        l = 0
        r = n - 1

        while l < r:
            summ = numbers[l] + numbers[r]
            if summ == target:
                return [l + 1, r + 1]
            elif summ < target:
                l += 1
            else:
                r -= 1

# Time Complexity: O(n)
# Space Complexity: O(1)
