#include <vector>
using namespace std;

class Solution {
public:
    vector<vector<int>> permute(vector<int>& nums) {
        vector<vector<int>> ans;
        vector<int> sol;
        vector<bool> used(nums.size(), false);
        
        backtrack(nums, ans, sol, used);
        return ans;
    }
    
    void backtrack(vector<int>& nums, vector<vector<int>>& ans, vector<int>& sol, vector<bool>& used) {
        if (sol.size() == nums.size()) {
            ans.push_back(sol);
            return;
        }
        
        for (int i = 0; i < nums.size(); i++) {
            if (used[i]) continue;
            
            sol.push_back(nums[i]);
            used[i] = true;
            backtrack(nums, ans, sol, used);
            sol.pop_back();
            used[i] = false;
        }
    }
};
