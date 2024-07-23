#include <vector>
#include <stack>

class Solution {
public:
    std::vector<int> dailyTemperatures(std::vector<int>& temperatures) {
        int n = temperatures.size();
        std::vector<int> answer(n, 0);
        std::stack<std::pair<int, int>> stk;  // pair<temperature, index>

        for (int i = 0; i < n; ++i) {
            int temp = temperatures[i];
            while (!stk.empty() && stk.top().first < temp) {
                auto [stk_temp, stk_index] = stk.top();
                stk.pop();
                answer[stk_index] = i - stk_index;
            }
            stk.push({temp, i});
        }
        return answer;
    }
};
