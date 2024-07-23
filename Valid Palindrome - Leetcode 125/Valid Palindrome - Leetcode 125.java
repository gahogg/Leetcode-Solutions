public class Solution {
    public boolean isPalindrome(String s) {
        int L = 0, R = s.length() - 1;

        while (L < R) {
            while (L < R && !Character.isLetterOrDigit(s.charAt(L))) {
                L++;
            }
            while (L < R && !Character.isLetterOrDigit(s.charAt(R))) {
                R--;
            }
            if (L < R && Character.toLowerCase(s.charAt(L)) != Character.toLowerCase(s.charAt(R))) {
                return false;
            }
            L++;
            R--;
        }
        return true;
    }
}
