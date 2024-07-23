#include <stack>
#include <algorithm>
using namespace std;

class Solution {
public:
    int goodNodes(TreeNode* root) {
        if (!root) return 0;

        int goodNodes = 0;
        stack<pair<TreeNode*, int>> stk;
        stk.push({root, INT_MIN});

        while (!stk.empty()) {
            auto [node, largest] = stk.top();
            stk.pop();

            if (largest <= node->val) {
                goodNodes++;
            }

            largest = max(largest, node->val);
            if (node->right) stk.push({node->right, largest});
            if (node->left) stk.push({node->left, largest});
        }

        return goodNodes;
    }
};
