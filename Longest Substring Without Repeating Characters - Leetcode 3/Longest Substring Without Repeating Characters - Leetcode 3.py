# Brute Force
def length_of_longest_substring(s: str) -> int:
    max_length = 0

    for i in range(len(s)):
        for j in range(i, len(s)):
            if s[j] in s[i:j]:  # Check if the character already appeared in the substring
                break
            max_length = max(max_length, j - i + 1)

    return max_length
    # Time: O(n^3)
    # Space: O(n)

class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        l = 0
        longest = 0
        sett = set()
        n = len(s)

        for r in range(n):
            while s[r] in sett:
                sett.remove(s[l])
                l += 1

            w = (r - l) + 1
            longest = max(longest, w)
            sett.add(s[r])

        return longest

# Time Complexity: O(n)
# Space Complexity: O(n) (but because we're limited to common characters only, it's actually O(1))
