#include <vector>
#include <algorithm>
using namespace std;


/**
 * Brute force approach with simple recursion
 */
class Solution {
public:
    int coinChange(vector<int>& coins, int amount) {
        if (amount == 0)
            return 0;
        else if (amount < 0)
            return -1;

        int min_cnt = -1;
        for (int coin : coins) {
            int cnt = coinChange(coins, amount - coin);
            if (cnt >= 0) 
                min_cnt = min_cnt < 0 ? cnt + 1 : min(min_cnt, cnt + 1);
        }
        return min_cnt;
    }
};



class Solution {
public:
    int coinChange(vector<int>& coins, int amount) {
        vector<int> dp(amount + 1, INT_MAX);
        dp[0] = 0;
        sort(coins.begin(), coins.end());

        for (int i = 1; i <= amount; ++i) {
            for (int coin : coins) {
                if (i - coin < 0) break;
                if (dp[i - coin] != INT_MAX) {
                    dp[i] = min(dp[i], dp[i - coin] + 1);
                }
            }
        }

        return dp[amount] < INT_MAX ? dp[amount] : -1;
    }
};
