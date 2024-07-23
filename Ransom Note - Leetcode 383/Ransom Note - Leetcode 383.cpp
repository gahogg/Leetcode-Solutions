#include <unordered_map>
#include <string>
using namespace std;

class Solution {
public:
    bool canConstruct(string ransomNote, string magazine) {
        unordered_map<char, int> counter;
        
        for (char c : magazine) {
            counter[c]++;
        }
        
        for (char c : ransomNote) {
            if (counter[c] == 0) {
                return false;
            }
            counter[c]--;
        }
        
        return true;
    }
};
