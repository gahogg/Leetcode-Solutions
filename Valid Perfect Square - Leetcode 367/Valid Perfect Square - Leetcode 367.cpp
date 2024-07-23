class Solution {
public:
    bool isPerfectSquare(int num) {
        long l = 1; // Use long to prevent overflow
        long r = num;

        while (l <= r) {
            long m = (l + r) / 2;
            long mSquared = m * m;

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
};
