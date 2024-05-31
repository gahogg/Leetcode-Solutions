from collections import defaultdict
class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        anagrams_dict = defaultdict(list)
        for s in strs: # n
            count = [0] * 26
            for c in s:
                count[ord(c) - ord("a")] += 1
            key = tuple(count)
            anagrams_dict[key].append(s)

        return anagrams_dict.values()
# n is the number of strings, m is the length of largest string
# Time Complexity: O(n * m)
# Space Complexity: O(n * m)
