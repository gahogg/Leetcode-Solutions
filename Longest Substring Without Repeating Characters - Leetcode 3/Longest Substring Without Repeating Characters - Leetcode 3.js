// brute force
// Time Complexity: O(n^3)
// Space Complexity: O(n)
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


var lengthOfLongestSubstring = function(s) {
    const set = new Set();
    let l = 0, longest = 0;

    for (let r = 0; r < s.length; r++) {
        while (set.has(s[r])) {
            set.delete(s[l]);
            l++;
        }

        longest = Math.max(longest, r - l + 1);
        set.add(s[r]);
    }

    return longest;
};
