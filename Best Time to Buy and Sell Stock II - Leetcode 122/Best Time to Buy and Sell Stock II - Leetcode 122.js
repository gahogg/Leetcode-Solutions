var maxProfit = function(prices) {
    var i = 0;
    var lo = prices[0];
    var hi = prices[0];
    var profit = 0;
    var n = prices.length;

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
};
