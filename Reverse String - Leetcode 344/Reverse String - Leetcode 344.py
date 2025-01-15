# Brute Force Solution
class Solution:
    def reverseString(self, s: List[str]) -> None:
        """
        Do not return anything, modify s in-place instead.
        """
        n = len(s)
        T = []
        for i in range(n-1, -1, -1):
            T.append(s[i])
        
        for i in range(n):
            s[i] = T[i]
        
        # Time: O(n)
        # Space: O(n)

# Two Pointers (Optimal) Solution
class Solution:
    def reverseString(self, s: List[str]) -> None:
        """
        Do not return anything, modify s in-place instead.
        """
        n = len(s)
        l = 0
        r = n - 1

        while l < r:
            s[l], s[r] = s[r], s[l]
            l += 1
            r -= 1

# Time Complexity: O(n)
# Space Complexity: O(1)
