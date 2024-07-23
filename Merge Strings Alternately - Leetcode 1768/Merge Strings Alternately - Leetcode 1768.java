public class Solution {
    public String mergeAlternately(String word1, String word2) {
        int A = word1.length(), B = word2.length();
        int a = 0, b = 0;
        StringBuilder result = new StringBuilder();

        while (a < A && b < B) {
            result.append(word1.charAt(a++));
            result.append(word2.charAt(b++));
        }

        while (a < A) {
            result.append(word1.charAt(a++));
        }

        while (b < B) {
            result.append(word2.charAt(b++));
        }

        return result.toString();
    }
}
