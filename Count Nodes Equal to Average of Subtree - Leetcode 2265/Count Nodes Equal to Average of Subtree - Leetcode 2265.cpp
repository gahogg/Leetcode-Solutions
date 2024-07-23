#include <algorithm>
using namespace std;

class Solution {
private:
    int numNodes = 0;

public:
    int averageOfSubtree(TreeNode* root) {
        dfs(root);
        return numNodes;
    }

    // Returns a pair: {number of nodes, sum of values}
    pair<int, int> dfs(TreeNode* root) {
        if (!root) return {0, 0};

        auto left = dfs(root->left);
        auto right = dfs(root->right);

        int nodeCount = 1 + left.first + right.first;
        int sum = root->val + left.second + right.second;
        int avg = sum / nodeCount;

        if (root->val == avg) numNodes++;

        return {nodeCount, sum};
    }
};
