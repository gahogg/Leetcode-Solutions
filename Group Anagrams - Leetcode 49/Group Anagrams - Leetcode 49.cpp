#include <vector>
#include <string>
#include <unordered_map>
#include <algorithm>

using namespace std;

class Solution {
public:
    vector<vector<string>> groupAnagrams(vector<string>& strs) {
        unordered_map<string, vector<string>> anagramsMap;
        
        for (const string& s : strs) {
            string count = getCount(s);
            anagramsMap[count].push_back(s);
        }
        
        vector<vector<string>> result;
        for (const auto& entry : anagramsMap) {
            result.push_back(entry.second);
        }
        
        return result;
    }
    
private:
    string getCount(const string& s) {
        vector<int> count(26, 0);
        for (char c : s) {
            count[c - 'a']++;
        }
        string countStr;
        for (int i : count) {
            countStr += to_string(i) + '#';
        }
        return countStr;
    }
};
