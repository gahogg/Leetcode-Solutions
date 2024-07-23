import java.util.Arrays;

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
