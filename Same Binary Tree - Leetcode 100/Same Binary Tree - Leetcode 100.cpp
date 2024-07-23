#include <algorithm>

class Solution {
public:
    bool isSameTree(TreeNode* p, TreeNode* q) {
        return isSame(p, q);
    }

private:
    bool isSame(TreeNode* p, TreeNode* q) {
        if (!p && !q) return true;
        if (!p || !q) return false;
        if (p->val != q->val) return false;

        return isSame(p->left, q->left) && isSame(p->right, q->right);
    }
};
