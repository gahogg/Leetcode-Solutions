# Brute Force Solution
class Solution:
    def firstBadVersion(self, n: int) -> int:
        for version in range(1, n+1):
            if isBadVersion(version):
                return version
    # Time: O(n)
    # Space: O(1)

# Optimal Solution
# The isBadVersion API is already defined for you.
# def isBadVersion(version: int) -> bool:
class Solution:
    def firstBadVersion(self, n: int) -> int:
        L = 1
        R = n

        while L < R:
            M = (L+R) // 2
            if isBadVersion(M):
                R = M
            else:
                L = M + 1
        
        return L 
        # Time: O(Log n)
        # Space: O(1)
