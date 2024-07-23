public class Solution {
    public int characterReplacement(String s, int k) {
        int[] counts = new int[26];
        int l = 0, longest = 0;
        int maxCount = 0;

        for (int r = 0; r < s.length(); r++) {
            maxCount = Math.max(maxCount, ++counts[s.charAt(r) - 'A']);

            while ((r - l + 1) - maxCount > k) {
                counts[s.charAt(l) - 'A']--;
                l++;
            }

            longest = Math.max(longest, r - l + 1);
        }

        return longest;
    }
}
