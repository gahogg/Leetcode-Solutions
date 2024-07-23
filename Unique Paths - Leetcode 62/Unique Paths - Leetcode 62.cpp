#include <vector>
using namespace std;

class Solution {
public:
    int uniquePaths(int m, int n) {
        vector<vector<int>> dp(m, vector<int>(n, 0));
        
        for (int i = 0; i < m; ++i) {
            for (int j = 0; j < n; ++j) {
                if (i == 0 && j == 0) {
                    dp[i][j] = 1;
                } else {
                    int fromTop = (i > 0) ? dp[i - 1][j] : 0;
                    int fromLeft = (j > 0) ? dp[i][j - 1] : 0;
                    dp[i][j] = fromTop + fromLeft;
                }
            }
        }
        
        return dp[m - 1][n - 1];
    }
};
