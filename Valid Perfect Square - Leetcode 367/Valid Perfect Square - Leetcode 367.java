public class Solution {
    public boolean isPerfectSquare(int num) {
        int l = 1;
        int r = num;

        while (l <= r) {
            int m = (l + r) / 2;
            long mSquared = (long) m * m; // Use long to prevent overflow

            if (num == mSquared) {
                return true;
            } else if (mSquared < num) {
                l = m + 1;
            } else {
                r = m - 1;
            }
        }

        return false;
    }
}
