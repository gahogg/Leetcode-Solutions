class Solution:
    def rangeBitwiseAnd(self, m: int, n: int) -> int:
        shift = 0
        
        while m < n:
            m = m >> 1
            n = n >> 1
            shift += 1

        return m << shift
        # Time: O(Bits)
        # Space: O(1)