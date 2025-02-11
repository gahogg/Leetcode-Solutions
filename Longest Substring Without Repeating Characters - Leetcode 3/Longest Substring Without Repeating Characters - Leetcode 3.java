import java.util.HashSet;


// brute force
// Time Complexity: O(n^3)
// Space Complexity: O(n)
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




public class Solution {
    public int lengthOfLongestSubstring(String s) {
        HashSet<Character> set = new HashSet<>();
        int l = 0, longest = 0;

        for (int r = 0; r < s.length(); r++) {
            while (set.contains(s.charAt(r))) {
                set.remove(s.charAt(l));
                l++;
            }

            longest = Math.max(longest, r - l + 1);
            set.add(s.charAt(r));
        }

        return longest;
    }
}
