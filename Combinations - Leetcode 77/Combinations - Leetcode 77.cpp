#include <vector>
using namespace std;

class Solution {
public:
    vector<vector<int>> combine(int n, int k) {
        vector<vector<int>> ans;
        vector<int> sol;
        backtrack(n, k, sol, ans);
        return ans;
    }

private:
    void backtrack(int x, int k, vector<int>& sol, vector<vector<int>>& ans) {
        if (sol.size() == k) {
            ans.push_back(sol);
            return;
        }

        if (x > k - sol.size()) {
            backtrack(x - 1, k, sol, ans);
        }

        sol.push_back(x);
        backtrack(x - 1, k, sol, ans);
        sol.pop_back();
    }
};
