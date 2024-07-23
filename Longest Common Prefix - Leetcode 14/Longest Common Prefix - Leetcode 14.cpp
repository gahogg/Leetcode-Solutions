class Solution {
public:
    string longestCommonPrefix(vector<string>& strs) {
        if (strs.empty()) return "";
        
        int minLength = INT_MAX;
        for (const string& s : strs) {
            minLength = min(minLength, (int)s.length());
        }
        
        int i = 0;
        while (i < minLength) {
            for (const string& s : strs) {
                if (s[i] != strs[0][i]) {
                    return strs[0].substr(0, i);
                }
            }
            i++;
        }
        
        return strs[0].substr(0, i);
    }
};
