import java.util.HashSet;

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
