class Solution {
public:
    int characterReplacement(string s, int k) {
        vector<int> counts(26, 0);
        int l = 0, longest = 0, maxCount = 0;

        for (int r = 0; r < s.size(); r++) {
            maxCount = max(maxCount, ++counts[s[r] - 'A']);

            while ((r - l + 1) - maxCount > k) {
                counts[s[l] - 'A']--;
                l++;
            }

            longest = max(longest, r - l + 1);
        }

        return longest;
    }
};
