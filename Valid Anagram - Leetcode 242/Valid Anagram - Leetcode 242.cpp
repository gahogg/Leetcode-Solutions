#include <unordered_map>
#include <string>
using namespace std;

class Solution {
public:
    bool isAnagram(string s, string t) {
        if (s.size() != t.size()) {
            return false;
        }

        unordered_map<char, int> sMap, tMap;

        for (char c : s) {
            sMap[c]++;
        }

        for (char c : t) {
            tMap[c]++;
        }

        return sMap == tMap;
    }
};
