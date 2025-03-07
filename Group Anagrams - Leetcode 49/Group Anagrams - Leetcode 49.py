# Brute Force Solution
class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        ans = defaultdict(list)
        for s in strs:
            key = ''.join(sorted(s))
            ans[key].append(s)

        return list(ans.values())
# Time: O(n * (m log m))
# Space: O(n * m)
# n is the number of strings, m is the length of largest string

# Optimal Solution
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
        # we need to convert the dict.values iterable to list, otherwise we get the following error
        # error : "dict_values([['eat', 'tea', 'ate'], ['tan', 'nat'], ['bat']]) is not valid value for the expected return type list<list<string>>"
        return list(anagrams_dict.values())
# n is the number of strings, m is the length of largest string
# Time Complexity: O(n * m)
# Space Complexity: O(n * m)
