class Solution:
    def longestCommonPrefix(self, strs: List[str]) -> str:
        min_length = float('inf')

        for s in strs:
            if len(s) < min_length:
                min_length = len(s)
        
        i = 0
        while i < min_length:
            for s in strs:
                if s[i] != strs[0][i]:
                    return s[:i]
            i += 1
        
        return strs[0][:i]
        # Time: O(n * m) where n is the number of strings, m is the min word length
        # Space: O(1)
