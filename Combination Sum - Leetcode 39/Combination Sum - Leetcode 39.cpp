#include <vector>
using namespace std;

class Solution {
public:
    vector<vector<int>> combinationSum(vector<int>& candidates, int target) {
        vector<vector<int>> res;
        vector<int> sol;
        backtrack(candidates, target, 0, 0, sol, res);
        return res;
    }

private:
    void backtrack(vector<int>& candidates, int target, int start, int curSum, vector<int>& sol, vector<vector<int>>& res) {
        if (curSum == target) {
            res.push_back(sol);
            return;
        }
        if (curSum > target || start == candidates.size()) {
            return;
        }

        // Skip the current candidate
        backtrack(candidates, target, start + 1, curSum, sol, res);

        // Include the current candidate
        sol.push_back(candidates[start]);
        backtrack(candidates, target, start, curSum + candidates[start], sol, res);
        sol.pop_back();
    }
};
