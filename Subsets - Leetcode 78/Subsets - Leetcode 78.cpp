#include <vector>

using namespace std;

class Solution {
public:
    vector<vector<int>> subsets(vector<int>& nums) {
        vector<vector<int>> res;
        vector<int> sol;
        backtrack(nums, 0, sol, res);
        return res;
    }

private:
    void backtrack(vector<int>& nums, int start, vector<int>& sol, vector<vector<int>>& res) {
        res.push_back(sol);
        for (int i = start; i < nums.size(); i++) {
            sol.push_back(nums[i]);
            backtrack(nums, i + 1, sol, res);
            sol.pop_back();
        }
    }
};
