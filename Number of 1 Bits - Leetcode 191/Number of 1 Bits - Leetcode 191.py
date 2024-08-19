class Solution:
    def hammingWeight(self, n: int) -> int:
        ans = 0

        while n != 0:
            ans += 1
            n = n & (n-1)
        
        return ans
        # Time: O(Bits), Space: O(1)