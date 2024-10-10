# Brute Force Solution
class Solution:
    def numJewelsInStones (self, jewels: str, stones: str) -> int:
        count = 0
        for stone in stones:
            if stone in jewels:
                count += 1
        return count

# Time Complexity: O(n * m)
# Space Complexity: O(1)


# Optimal Solution
class Solution:
    def numJewelsInStones (self, jewels: str, stones: str) -> int:
        # O(n + m)
        s = set(jewels)
        count = 0
        for stone in stones:
            if stone in s:
                count += 1
        return count

# Time Complexity: O(n + m)
# Space Complexity: O(n)
