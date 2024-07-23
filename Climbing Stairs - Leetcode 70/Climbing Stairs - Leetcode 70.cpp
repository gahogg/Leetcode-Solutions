class Solution {
public:
    int climbStairs(int n) {
        if (n == 1) return 1;
        if (n == 2) return 2;

        int twoBack = 1;
        int oneBack = 2;

        for (int i = 2; i < n; ++i) {
            int nextNum = twoBack + oneBack;
            twoBack = oneBack;
            oneBack = nextNum;
        }

        return oneBack;
    }
};
