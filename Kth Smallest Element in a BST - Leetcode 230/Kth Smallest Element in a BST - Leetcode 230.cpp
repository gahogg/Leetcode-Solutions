#include <vector>
#include <algorithm>

class Solution {
public:
    int kthSmallest(TreeNode* root, int k) {
        count = k;
        ans = 0;
        dfs(root);
        return ans;
    }

private:
    int count;
    int ans;

    void dfs(TreeNode* node) {
        if (!node) return;

        dfs(node->left);

        if (count == 1) {
            ans = node->val;
        }

        count--;
        if (count > 0) {
            dfs(node->right);
        }
    }
};
