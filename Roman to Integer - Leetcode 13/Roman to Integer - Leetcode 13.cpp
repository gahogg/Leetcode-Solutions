class Solution {
public:
    int romanToInt(string s) {
        unordered_map<char, int> d = {{'I', 1}, {'V', 5}, {'X', 10}, {'L', 50}, {'C', 100}, {'D', 500}, {'M', 1000}};
        int summ = 0;
        int n = s.size();
        int i = 0;

        while (i < n) {
            if (i < n - 1 && d[s[i]] < d[s[i + 1]]) {
                summ += d[s[i + 1]] - d[s[i]];
                i += 2;
            } else {
                summ += d[s[i]];
                i++;
            }
        }

        return summ;
    }
};
