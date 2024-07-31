#include <vector>
#include <stack>
#include <algorithm>

class Solution {
public:
    int largestRectangleArea(std::vector<int>& heights) {
        int n = heights.size();
        std::stack<std::pair<int, int>> stk;
        int maxArea = 0;

        for (int i = 0; i < n; i++) {
            int height = heights[i];
            int start = i;
            while (!stk.empty() && height < stk.top().first) {
                auto [h, j] = stk.top(); stk.pop();
                int w = i - j;
                maxArea = std::max(maxArea, h * w);
                start = j;
            }
            stk.push({height, start});
        }

        while (!stk.empty()) {
            auto [h, j] = stk.top(); stk.pop();
            int w = n - j;
            maxArea = std::max(maxArea, h * w);
        }

        return maxArea;
    }
};
