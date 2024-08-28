#include <unordered_map>
#include <string>
using namespace std;

class Solution {
public:
    bool canConstruct(string ransomNote, string magazine) {
        unordered_map<char, int> hashmap;

        for (char ch : magazine) {
            hashmap[ch]++;
        }

        for (char ch : ransomNote) {
            if (hashmap[ch] > 0) {
                hashmap[ch]--;
            } else {
                return false;
            }
        }

        return true;
    }
};

// Time Complexity: O(m + n)  -> m = length of ransomNote, n = length of magazine
// Space Complexity: O(n)     -> we're using an unordered_map
