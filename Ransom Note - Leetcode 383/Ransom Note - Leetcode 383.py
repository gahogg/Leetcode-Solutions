class Solution:
    def canConstruct(self, ransomNote: str, magazine: str) -> bool:
        hashmap = Counter(magazine) # TC for Counter is O(n)

        for ch in ransomNote:
            if hashmap[ch] > 0:
                hashmap[ch]-=1
            else:
                return False
        return True

# Time Complexity: O(m + n)  -> m = len(ransomNote), n = len(magazine)
# Space Complexity: O(n)     -> we're using a hashmap 