var minCostClimbingStairs = function(cost) {
    let n = cost.length;
    let prev = 0, curr = 0;

    for (let i = 2; i <= n; i++) {
        let next = Math.min(cost[i - 2] + prev, cost[i - 1] + curr);
        prev = curr;
        curr = next;
    }

    return curr;
};
