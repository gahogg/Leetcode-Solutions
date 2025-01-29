#include <unordered_set>
#include <algorithm>
using namespace std;

class Solution {
public:
    int lengthOfLongestSubstring(const string s) {

        int longest = 0;

        for (auto i = 0; i < s.size(); ++i) {
            for (auto substr_len = 1; i + substr_len <= s.size(); ++substr_len) {
                unordered_set<char> seen{s.cbegin() + i, s.cbegin() + i + substr_len};
                if (seen.size() == substr_len) 
                    longest = max(longest, substr_len);
            }
        }

        return longest;
    }
};
// Time Complexity: O(n^3)
// Space Complexity: O(n)
