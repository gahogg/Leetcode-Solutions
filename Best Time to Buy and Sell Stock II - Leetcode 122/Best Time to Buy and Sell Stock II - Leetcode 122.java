class Solution {
    public int maxProfit(int[] prices) {
        int i = 0;
        int lo = prices[0];
        int hi = prices[0];
        int profit = 0;
        int n = prices.length;

        while (i < n - 1) {
            // Look where to buy
            while (i < n - 1 && prices[i] >= prices[i + 1]) {
                i++;
            }
            lo = prices[i];

            // Look where to sell
            while (i < n - 1 && prices[i] <= prices[i + 1]) {
                i++;
            }
            hi = prices[i];

            profit += hi - lo;
        }

        return profit;
    }
}
