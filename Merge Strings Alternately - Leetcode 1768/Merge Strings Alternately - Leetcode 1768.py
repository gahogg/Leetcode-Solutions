class Solution:
    def mergeAlternately(self, word1: str, word2: str) -> str:        
        l = 0
        res = ""
        while l < len(word1) or l < len(word2):
            if l < len(word1):
                res += word1[l]
            if l < len(word2):
                res += word2[l]
            l+=1
        return res  
        # Time: O(n)  
        # Space: O(A + B) - A is Length of word1, B is Length of word2
