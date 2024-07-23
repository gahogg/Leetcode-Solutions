#include <vector>
#include <algorithm>
using namespace std;

class Solution {
public:
    int minCostClimbingStairs(vector<int>& cost) {
        int n = cost.size();
        int prev = 0, curr = 0;

        for (int i = 2; i <= n; ++i) {
            int next = min(cost[i - 2] + prev, cost[i - 1] + curr);
            prev = curr;
            curr = next;
        }

        return curr;
    }
};
