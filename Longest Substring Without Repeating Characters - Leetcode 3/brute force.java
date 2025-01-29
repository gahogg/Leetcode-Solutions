import java.util.HashSet;

public class Solution {
    public int lengthOfLongestSubstring(String s) {
        int longest = 0;
        int n = s.length();
        for (int i = 0; i < n; i++) {
            for (int substr_len = 1; i + substr_len <= n; ++substr_len) {
                HashSet<Character> seen = new HashSet<>();
                for (int j = i; j < i + substr_len; ++j) 
                    seen.add(s.charAt(j));

                if (seen.size() == substr_len)
                    longest = Math.max(longest, substr_len);
            }
        }

        return longest;
    }
}
// Time Complexity: O(n^3)
// Space Complexity: O(n)
