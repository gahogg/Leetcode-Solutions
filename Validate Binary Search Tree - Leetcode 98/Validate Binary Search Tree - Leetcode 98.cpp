#include <climits>
using namespace std;

class Solution {
public:
    bool isValidBST(TreeNode* root) {
        return isValid(root, LONG_MIN, LONG_MAX);
    }

private:
    bool isValid(TreeNode* node, long min, long max) {
        if (!node) return true;

        if (node->val <= min || node->val >= max) return false;

        return isValid(node->left, min, node->val) && isValid(node->right, node->val, max);
    }
};
