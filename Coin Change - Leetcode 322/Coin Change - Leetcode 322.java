import java.util.Arrays;


/**
 * Brute force approach with simple recursion
 */
class Solution {
    public int coinChange(int[] coins, int amount) {
        if (amount == 0)
            return 0;
        else if (amount < 0)
            return -1;

        int min_cnt = -1;
        for (int coin : coins) {
            int cnt = coinChange(coins, amount - coin);
            if (cnt >= 0) 
                min_cnt = min_cnt < 0 ? cnt + 1 : Math.min(min_cnt, cnt + 1);
        }
        return min_cnt;
    }
}



public class Solution {
    public int coinChange(int[] coins, int amount) {
        int[] dp = new int[amount + 1];
        Arrays.fill(dp, Integer.MAX_VALUE);
        dp[0] = 0; // base case: 0 amount requires 0 coins
        Arrays.sort(coins);

        for (int i = 1; i <= amount; i++) {
            for (int coin : coins) {
                if (i - coin < 0) break;
                if (dp[i - coin] != Integer.MAX_VALUE) {
                    dp[i] = Math.min(dp[i], dp[i - coin] + 1);
                }
            }
        }

        return dp[amount] == Integer.MAX_VALUE ? -1 : dp[amount];
    }
}
