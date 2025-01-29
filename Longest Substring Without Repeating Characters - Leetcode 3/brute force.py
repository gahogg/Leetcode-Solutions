class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        n = len(s)
        max_length = -1
        for i in range(n):
            for substr_len in range(1, n - i + 1):
                substr = s[i: i+substr_len]
                seen = set(substr) # O(m) where m = len(substr)
                if substr_len == len(seen):
                    # there are no repeated characters in the substr
                    max_length = max(max_length, substr_len)

        return max_length

# Time Complexity: O(n^3)
# Space Complexity: O(n)
