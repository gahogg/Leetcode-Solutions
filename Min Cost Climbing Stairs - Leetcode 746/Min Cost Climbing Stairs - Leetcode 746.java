public class Solution {
    public int minCostClimbingStairs(int[] cost) {
        int n = cost.length;
        int prev = 0, curr = 0;

        for (int i = 2; i <= n; i++) {
            int next = Math.min(cost[i - 2] + prev, cost[i - 1] + curr);
            prev = curr;
            curr = next;
        }

        return curr;
    }
}
