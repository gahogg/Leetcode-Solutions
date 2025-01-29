var lengthOfLongestSubstring = function(s) {

    let longest = 0;
    let n = s.length;
    for (let i = 0; i < n; ++i) {
        for (let substr_len = 1; i + substr_len <= n; ++substr_len) {
            var seen = new Set();
            for (let j = i; j < i + substr_len; ++j) {
                seen.add(s[j]);
            }
            if (seen.size == substr_len) {
                longest = Math.max(longest, substr_len);
            }
        }
    }

    return longest;
};
// Time Complexity: O(n^3)
// Space Complexity: O(n)
